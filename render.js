/* ═══════════════════════════════════════════════════════════════════════
   渲染脚本 render.js
   读取 site-data.js（SITE_DATA）与 papers.js（PAPER_LINKS），
   将内容渲染到页面骨架中。一般无需修改本文件，
   内容更新请编辑 site-data.js，论文链接请编辑 papers.js。
   ═══════════════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  /* 作者名 [[...]] 转高亮 span */
  function highlightAuthor(authors) {
    return authors.replace(/\[\[(.+?)\]\]/g, '<span class="me">$1</span>');
  }

  /* 论文标题：papers.js 配置了网址则渲染为外链 */
  function paperTitle(paper) {
    var url = (window.PAPER_LINKS && PAPER_LINKS[paper.id] || "").trim();
    if (url) {
      return '<a href="' + url + '" target="_blank" rel="noopener">' + paper.title +
             '<span class="link-mark">↗</span></a>';
    }
    return paper.title;
  }

  /* ---------- 首屏 ---------- */
  function renderHero(profile, stats) {
    var el = document.getElementById("hero");
    if (!el) return;

    var links = profile.links.map(function (l) {
      var isMail = l.href.indexOf("mailto:") === 0;
      /* print-email：屏幕隐藏，仅打印 / PDF 中显示邮箱地址 */
      var extra = isMail ? '<span class="print-email">（' + l.href.replace("mailto:", "") + "）</span>" : "";
      return '<a class="btn ' + (l.primary ? "btn-solid" : "btn-outline") + '" href="' + l.href + '"' +
             (isMail ? "" : ' target="_blank" rel="noopener"') + ">" + l.text + extra + "</a>";
    }).join("\n            ");

    var metaHtml = profile.meta.join('<span class="sep">·</span>');

    el.innerHTML =
      '      <div class="hero-grid">\n' +
      '        <div class="avatar">' + profile.avatarText + "</div>\n" +
      '        <div class="hero-main">\n' +
      '          <h1 class="name">' + profile.name +
      '<span class="en">' + profile.nameEn + "</span>" +
      (profile.nickname ? '<span class="nickname">' + profile.nickname + "</span>" : "") +
      "</h1>\n" +
      '          <p class="role">\n' +
      "            <strong>" + profile.roleMain + '</strong>\n' +
      '            <span class="sep">|</span>' + profile.roleSub + "\n" +
      "          </p>\n" +
      '          <p class="meta">' + metaHtml + "</p>\n" +
      '          <p class="bio">' + profile.bio + "</p>\n" +
      '          <p class="motto">' + profile.motto + "</p>\n" +
      '          <div class="actions">\n' +
      "            " + links + "\n" +
      "          </div>\n" +
      "        </div>\n" +
      "      </div>\n\n" +
      '      <div class="stats">\n' +
      stats.map(function (s) {
        return '        <div class="stat"><div class="num">' + s.num +
               (s.unit ? "<small>" + s.unit + "</small>" : "") +
               '</div><div class="lab">' + s.label + "</div></div>";
      }).join("\n") + "\n" +
      "      </div>";
  }

  /* ---------- 各板块 ---------- */
  var renderers = {

    interests: function (data) {
      return '<div class="interest-grid">\n' + data.interests.map(function (it) {
        return '        <div class="interest">\n' +
          '          <h3><span class="ico">' + it.icon + "</span>" + it.title + "</h3>\n" +
          "          <p>" + it.desc + "</p>\n" +
          '          <div class="chips">\n' +
          "            " + it.chips.map(function (c) { return '<span class="chip">' + c + "</span>"; }).join("") + "\n" +
          "          </div>\n" +
          "        </div>";
      }).join("\n") + "\n      </div>";
    },

    projects: function (data) {
      return '<div class="proj-grid">\n' + data.projects.map(function (p) {
        var tags = p.tags.map(function (t) {
          return '<span class="tag' + (t.gold ? " gold" : "") + '">' + t.text + "</span>";
        }).join("");
        var points = p.points.map(function (pt) { return "<li>" + pt + "</li>"; }).join("\n            ");
        return '        <article class="proj">\n' +
          '          <div class="proj-top">' + tags + "</div>\n" +
          "          <h3>" + p.title + "</h3>\n" +
          "          <ul>\n            " + points + "\n          </ul>\n" +
          '          <p class="impact">' + p.impact + "</p>\n" +
          "        </article>";
      }).join("\n") + "\n      </div>";
    },

    publications: function (data) {
      var pubs = data.publications;
      var html = "";

      /* Scholar 横幅 + 科研经历：紧跟板块标题，位于「期刊论文」分组之前 */
      var s = pubs.scholar;
      html += '      <div class="scholar-banner">\n' +
        '        <div class="txt">\n' +
        "          <b>" + s.title + "</b>\n" +
        "          <p>" + s.desc + "</p>\n" +
        "        </div>\n" +
        '        <div class="scholar-stats">\n' +
        s.stats.map(function (st) {
          return "          <div><b>" + st.num + "</b><span>" + st.label + "</span></div>";
        }).join("\n") + "\n" +
        "        </div>\n" +
        '        <a class="btn btn-solid" href="' + s.url + '" target="_blank" rel="noopener">' + s.btn + "</a>\n" +
        "      </div>\n\n" +
        '      <div class="research-note">' + pubs.researchNote + "</div>\n\n";

      pubs.groups.forEach(function (g) {
        html += '      <div class="pub-group">\n' +
          '        <div class="pub-group-title">' + g.title + '<span class="count">' + g.countLabel + "</span></div>\n" +
          '        <ol class="pub-list">\n' +
          g.papers.map(function (p) {
            var meta = '              <span class="badge venue">' + p.venue + "</span>\n";
            p.badges.forEach(function (b) { meta += '              <span class="badge">' + b + "</span>\n"; });
            if (p.first) { meta += '              <span class="badge first">' + p.first + "</span>\n"; }
            if (p.cite !== "" && p.cite !== undefined && p.cite !== null) {
              meta += '              <span class="pub-cite">' + p.cite + "</span>\n";
            }
            meta += '              <span class="pub-year">' + p.year + "</span>\n";
            return '          <li class="pub" data-pub-id="' + p.id + '">\n' +
              '            <p class="pub-title">' + paperTitle(p) + "</p>\n" +
              '            <p class="pub-authors">' + highlightAuthor(p.authors) + "</p>\n" +
              '            <div class="pub-meta">\n' + meta + "            </div>\n" +
              "          </li>";
          }).join("\n") +
          "\n        </ol>\n      </div>\n\n";
      });

      html += '      <p class="pub-note">' + pubs.note + "</p>";
      return html;
    },

    timeline: function (data) {
      return '      <ul class="timeline">\n' + data.timeline.map(function (t) {
        return '        <li class="tl-item">\n' +
          '          <div class="tl-date">' + t.date + "</div>\n" +
          '          <div class="tl-head"><span class="org">' + t.org + '</span><span class="role-title">' + t.role + "</span></div>\n" +
          '          <p class="tl-desc">' + t.desc + "</p>\n" +
          "        </li>";
      }).join("\n") + "\n      </ul>";
    },

    honors: function (data) {
      return '      <div class="honor-grid">\n' + data.honors.map(function (h) {
        return '        <div class="honor">\n' +
          "          <h3>" + h.icon + " " + h.title + "</h3>\n" +
          "          <ul>\n" +
          h.items.map(function (i) { return "            <li>" + i + "</li>"; }).join("\n") + "\n" +
          "          </ul>\n" +
          "        </div>";
      }).join("\n") + "\n      </div>";
    },

    media: function (data) {
      return '      <div class="media-list">\n' + data.media.map(function (m) {
        return '        <a class="media-card" href="' + m.url + '" target="_blank" rel="noopener">\n' +
          '          <div class="media-src">\n' +
          '            <span class="src-badge">' + m.badge + "</span>\n" +
          '            <span class="src-name">' + m.source + "</span>\n" +
          '            <span class="src-date">' + m.date + "</span>\n" +
          "          </div>\n" +
          '          <div class="media-body">\n' +
          '            <h3>' + m.title + '<span class="link-mark">↗</span></h3>\n' +
          "            <p>" + m.summary + "</p>\n" +
          "          </div>\n" +
          "        </a>";
      }).join("\n") + "\n      </div>";
    }
  };

  function renderSections() {
    var main = document.getElementById("main-content");
    if (!main) return;
    main.innerHTML = SITE_DATA.sections.map(function (sec) {
      var renderer = renderers[sec.type];
      if (!renderer) return "";
      return '    <!-- ' + sec.title + ' -->\n' +
        '    <section id="' + sec.id + '">\n' +
        '      <div class="sec-head">\n' +
        '        <div class="sec-label">' + sec.label + "</div>\n" +
        "        <h2>" + sec.title + '<span class="en-title">' + sec.sub + "</span></h2>\n" +
        "      </div>\n" +
        renderer(SITE_DATA) + "\n" +
        "    </section>\n";
    }).join("\n");
  }

  /* ---------- 页脚访问人次 ---------- */
  function renderVisitCount() {
    var el = document.getElementById("visit-count");
    if (el && typeof SITE_DATA.visitCount === "number") {
      el.textContent = SITE_DATA.visitCount.toLocaleString("en-US");
    }
  }

  /* ---------- 入口 ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    renderHero(SITE_DATA.profile, SITE_DATA.stats);
    renderSections();
    renderVisitCount();
  });
})();
