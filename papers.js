/* ═══════════════════════════════════════════════════════════════════════
   论文原文链接配置文件 papers.js
   ═══════════════════════════════════════════════════════════════════════

   ▎这个文件是干什么的？
     主页「学术成果」板块的 12 篇论文，每篇在这里对应一行配置。
     把论文网址填进引号里，页面上该论文标题就会自动变成可点击的
     链接（新窗口打开，带 ↗ 标记）；留空 "" 则保持纯文本。

   ▎论文网址去哪里找？（推荐顺序）
     1. Google Scholar 学术主页 → 点击论文标题进入详情页 →
        右侧一排小图标里点 [DOI] 或出版社图标，复制跳转后的网址
     2. 出版社官网直接搜论文标题：
        · IEEE 会议/期刊（RA-L、ROBIO、EMBC）→ ieeexplore.ieee.org
        · Elsevier（Neurocomputing、BSPC）    → sciencedirect.com
        · Springer Nature（Scientific Data）  → nature.com（开放获取，可放 PDF）
        · IOP（Journal of Neural Engineering）→ iopscience.iop.org
        · IntechOpen 专著章节                 → intechopen.com（开放获取）
     3. 有 arXiv 预印版的也可用 arxiv.org 链接

   ▎填好后如何生效？
     git add papers.js
     git commit -m "配置论文链接"
     git push
     （等待约 1 分钟 CDN 刷新即可看到标题变为链接）

   ▎填写示例（注意引号、逗号都要英文半角；key 请勿改动，只需填引号内的网址）：
   //   "example-paper-2020": "https://doi.org/10.1109/XXX.2021.xxxxxxx",
   ═══════════════════════════════════════════════════════════════════════ */

var PAPER_LINKS = {

  /* ─────────── 期刊论文（6 篇） ─────────── */

  // A bi-directional LSTM network for estimating continuous upper limb
  // movement from surface electromyography
  // IEEE Robotics and Automation Letters（RA-L）· 2021 · 6(4): 7217-7224 · 被引 113
  "ra-l-bilstm-2021": "https://ieeexplore.ieee.org/document/9484719",

  // sEMG-based continuous estimation of grasp movements by long short-term
  // memory network
  // Biomedical Signal Processing and Control · 2020 · 59: 101774 · 被引 91
  "bspc-lstm-2020": "https://www.sciencedirect.com/science/article/abs/pii/S1746809419303556",

  // Surface electromyogram, kinematic, and kinetic dataset of lower limb
  // walking for movement intent recognition
  // Scientific Data（Nature 子刊）· 2023 · 10(1): 358 · 被引 67
  "scidata-walking-2023": "https://www.nature.com/articles/s41597-023-02263-3",

  // Long exposure convolutional memory network for accurate estimation of
  // finger kinematics from surface electromyographic signals
  // Journal of Neural Engineering · 2021 · 18(2): 026027 · 被引 54
  "jne-lemc-2021": "https://iopscience.iop.org/article/10.1088/1741-2552/abd461/meta",

  // A novel and efficient feature extraction method for deep learning
  // based continuous estimation
  // IEEE Robotics and Automation Letters（RA-L）· 2021 · 6(4): 7341-7348 · 被引 41
  "ra-l-feature-2021": "https://ieeexplore.ieee.org/abstract/document/9484763",

  // Towards CSI-based diversity activity recognition via LSTM-CNN
  // Encoder-Decoder neural network
  // Neurocomputing · 2020 · 共同一作 · 被引 32
  "neurocomputing-2020": "https://www.sciencedirect.com/science/article/abs/pii/S092523122031777X",

  /* ─────────── 会议论文（5 篇） ─────────── */

  // DFNN-based gesture recognition with the shift and damage of the
  // HD-sEMG electrodes
  // IEEE ROBIO · 2019 · 第一作者
  "robio-2019": "https://ieeexplore.ieee.org/abstract/document/8961423/",

  // Towards diversity activity recognition via LSTM CNN Encoder-Decoder
  // neural network
  // IJCAI 2019 Workshop · 共同一作
  "ijcai-w-2019": "",

  // Continuous estimation of grasp movement with sEMG and temporal
  // convolutional nets model
  // IEEE EMBC · 2019 · 第一作者
  "embc-grasp-2019": "",

  // Continuous upper limb joint angles estimation with sEMG signals
  // based on TCN
  // IEEE EMBC · 2019（Poster）· 第一作者
  "embc-joints-2019": "",

  // 基于 DLGC 神经网络的手势识别中高密度电极的时空特性变换的研究
  // 中国机器人学术年会（CCRS）· 2019（Poster）· 中文 · 第一作者
  "ccrs-dlgc-2019": "",

  /* ─────────── 学术专著（1 部） ─────────── */

  // Deep Learning for Device-free Human Activity Recognition Using
  // WiFi Signals
  // 《Generalization with Deep Learning》英文专著章节 · 2021
  "book-wifi-dl-2021": "https://www.worldscientific.com/worldscibooks/10.1142/11784#t=aboutBook"

};
