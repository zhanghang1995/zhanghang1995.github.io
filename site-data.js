/* ═══════════════════════════════════════════════════════════════════════
   个人主页核心内容配置文件 site-data.js
   ═══════════════════════════════════════════════════════════════════════

   ▎这个文件是干什么的？
     主页的全部核心内容（个人简介、统计、研究方向、工程项目、论文、
     履历、荣誉、媒体报道）都以数据形式集中在本文件中。
     修改内容只需编辑本文件，保存后推送即可，无需改动 index.html。

   ▎修改后如何生效？
     git add site-data.js && git commit -m "更新主页内容" && git push

   ▎书写约定（重要）：
     · 文本字段支持少量 HTML 标签：<strong>加粗强调</strong>、<em>斜体</em>；
       重点数字建议用 <strong> 包裹，页面会以主题蓝高亮显示。
     · 论文作者中自己的名字用双方括号包裹，如 [[H. Zhang]]，
       页面会自动加粗高亮。
     · 数组末尾最后一项后面不要加逗号（JS 语法要求）。
   ═══════════════════════════════════════════════════════════════════════ */

var SITE_DATA = {

  /* ═══════════ 访问人次（页脚） ═══════════
     静态基数：GitHub Pages 为纯静态托管，无法自动累计真实访问量，
     想调整显示数字直接修改下方数值即可（页面会自动加千分位）。 */
  visitCount: 1000,

  /* ═══════════ 个人信息（首屏） ═══════════ */
  profile: {
    name: "张行",
    nameEn: "Zhang Hang",
    nickname: "小行家",                 // 名字旁的个人徽章
    avatarText: "行",                    // 头像圆圈内的文字
    roleMain: "中国移动咪咕公司 · AI 团队负责人 / AI 算法总监",
    roleSub: "原华为盘古大模型团队 · 高级算法工程师",
    meta: ["中国科学院大学 · 计算机技术硕士", "中科院深圳先进技术研究院科研经历"],
    bio: "长期耕耘<strong>大模型训练与 AIGC 工程化落地</strong>：主导文生图大模型、AI 游戏智能体、多智能体游戏生成引擎等产品从研发到商用，多项功能行业首发；学术方面发表论文 12 篇（含 <em>Scientific Data</em>、IEEE RA-L、<em>Neurocomputing</em> 等），Google Scholar 总引用 400+，出版英文专著 1 部，申请发明专利多项。兴趣横跨<strong>算法研究与工程落地</strong>——既在顶刊顶会发表论文，也让 AI 能力走进千万用户的产品。",
    motto: "从论文到产品，让大模型真正走进用户",
    links: [
      { text: "🎓 Google Scholar 学术主页", href: "https://scholar.google.com/citations?user=dISPYjYAAAAJ&hl=en", primary: true },
      { text: "GitHub", href: "https://github.com/zhanghang1995" },
      { text: "✉️ Email", href: "mailto:zh749931552@gmail.com" }
    ]
  },

  /* ═══════════ 首屏统计条（重点数字） ═══════════ */
  stats: [
    { num: "12",     unit: "篇", label: "学术论文（SCI 期刊 / 国际会议）" },
    { num: "402",    unit: "",   label: "Google Scholar 总引用" },
    { num: "1",      unit: "部", label: "英文国际学术专著" },
    { num: "多项",   unit: "",   label: "发明专利 · 行业首发功能" },
    { num: "2000万", unit: "+",  label: "产品服务用户规模" }
  ],

  /* ═══════════ 研究方向 ═══════════ */
  interests: [
    {
      icon: "🧠",
      title: "大语言模型与后训练",
      desc: "指令微调（Full / LoRA SFT）与强化学习（RLHF / DPO / RAFT / ReFL），具备 7B–14B 垂域模型从数据构建到部署的完整后训练经验。",
      chips: ["SFT", "RLHF / DPO", "LoRA", "Qwen等"]
    },
    {
      icon: "🎨",
      title: "图像与视频生成",
      desc: "SD / DiT 架构的文生图与文生视频模型：大规模数据构建（Recaption、自动化标注）、预训练与强化学习优化、风格与主体一致性控制。",
      chips: ["Stable Diffusion", "DiT", "DreamBooth", "ComfyUI"]
    },
    {
      icon: "👁️",
      title: "多模态与视觉识别",
      desc: "CLIP / SigLip2 多模态向量模型的预训练与对比学习微调；YOLO、RTMPose 等视觉识别模型的算法优化与端侧落地。",
      chips: ["CLIP / SigLip2", "对比学习", "YOLO", "RTMPose"]
    },
    {
      icon: "🤖",
      title: "Agent 与大规模训练",
      desc: "基于 Harness 架构的多智能体协同生成；DeepSpeed 训练优化，GPU / Ascend NPU 下百亿级数据与参数量的稳定训练调优。",
      chips: ["Multi-Agent", "LangGraph / MCP", "DeepSpeed", "Ascend NPU"]
    }
  ],

  /* ═══════════ 工程实践（tags.gold = 金色高亮标签；impact = 成果行，数字用 <strong>） ═══════════ */
  projects: [
    {
      tags: [{ text: "中国移动咪咕 · 2024 – 至今" }, { text: "全网上线", gold: true }],
      title: "多智能体协同的 AI 游戏生成引擎「咪咕智造」",
      points: [
        "基于 Claude Code CLI 搭建游戏创作后端服务，研发游戏 Skill、MCP 等工具链，实现<strong>一句话生成游戏、多轮对话编辑</strong>；",
        "微调 GDD 生成模型（Qwen3-14B），构建「意图 → 策划 → 模板」自动化工作流，创作效率提升 <strong>2–3 倍</strong>。"
      ],
      impact: "日均 Token 消耗超 <strong>10 亿</strong> · 上线 1 月生产游戏 <strong>4000+</strong> 款 · 覆盖用户 <strong>20 万+</strong>"
    },
    {
      tags: [{ text: "中国移动咪咕 · 2024 – 至今" }, { text: "多项行业首发", gold: true }],
      title: "AI 游戏智能体（搜索 / 问答 / 攻略 / 伴玩 / 回帖）",
      points: [
        "构建十万级意图数据，Full / LoRA 微调 7B 模型，意图识别精度达 <strong>97%</strong>；",
        "SigLip2 预训练 + 对比学习迭代，视频卡关检测精度 <strong>95%</strong>、误差控制在 <strong>10s</strong> 内；",
        "AI 伴玩覆盖游戏 <strong>1000+</strong> 款；AI 攻略行业首发应用于《双影奇境》《拳皇 15》。"
      ],
      impact: "日均 Token 消耗超 <strong>3 亿</strong> · 上线 1 年服务用户 <strong>100 万+</strong>"
    },
    {
      tags: [{ text: "中国移动咪咕 · 2024 – 至今" }, { text: "商业化落地", gold: true }],
      title: "AIGC 体感健身内容生产与交互",
      points: [
        "SD / DiT 图像生成模型训练，LoRA 与概念学习实现多主体风格一致性；",
        "十万级人体动作数据，优化 YOLO / RTMPose，攻克弱光、复杂背景识别，精度 <strong>95%+</strong>，支持 12 类动作；",
        "基于 ComfyUI 搭建「文本 → 图像 / 视频」内容生产管线。"
      ],
      impact: "服务用户超 <strong>2000 万</strong> · 拓展收入 <strong>1500 万</strong>"
    },
    {
      tags: [{ text: "华为 · 盘古大模型团队 · 2021 – 2024" }],
      title: "华为自研文生图大模型与 AIGC 广告搜推",
      points: [
        "主导 EDD 架构（3B）人像专项优化，构建 SFT / RLHF 范式，多阶段强化策略（RAFT / DPO / ReFL + 概念学习 + 连续学习）；",
        "主导 Diffusion 底座训练：百亿级数据与参数量，分阶段训练与 Recaption 数据策略；",
        "多模态 Embedding（文 / 视 / 图）：关键词精度 +5%、打标 +4%，带动 ECPM 显著提升。"
      ],
      impact: "商用发布华为 <strong>P系列 / 鸿蒙 NEXT</strong> · 覆盖数千万台设备 · 广告向量模型带动千万美金级年收入"
    },
    {
      tags: [{ text: "华为 · 2021 – 2024" }, { text: "业界首发", gold: true }],
      title: "大屏隔空手势交互算法",
      points: [
        "构建 600 万+ 样本多任务数据平台（检测 / 分类 / 跟踪），数据生产效率提升 <strong>80%</strong>；",
        "改进 MobileNet V3 + NanoDet：Focal Loss 解样本不均衡，Teacher-Student 蒸馏在精度损失 &lt;1% 下提速 <strong>30%+</strong>，端到端召回 +20%。"
      ],
      impact: "落地 <strong>IdeaHub 及鸿蒙生态</strong> · 赋能 P / Mate 旗舰系列"
    },
    {
      tags: [{ text: "华为 · 2021 – 2024" }, { text: "产品线部长奖", gold: true }],
      title: "IMU 主动笔与 N2N 投屏时延优化",
      points: [
        "优化后 Mahony 算法：动态累计误差清零 + 自适应显控比，误差 <strong>&lt;10°/h</strong>（申请专利）；",
        "YOLOv3 + 卡尔曼滤波笔尖实时检测，算法集成 HiSilicon DSP 芯片；",
        "基于 LSTM 的动态缓存机制，投屏时延降低 <strong>20%</strong>。"
      ],
      impact: "助力 <strong>IdeaHub S2</strong> 新品发布 · 落地鸿蒙空鼠与投屏方案"
    }
  ],

  /* ═══════════ 学术成果 ═══════════
     paper.first: "第一作者" / "共同一作"（金色徽章，留空则不显示）
     paper.cite:  被引次数（留空则不显示）
     paper.id:    对应 papers.js 中的链接 key，配置网址后标题自动变链接 */
  publications: {
    groups: [
      {
        title: "期刊论文",
        countLabel: "6 篇 · 按被引排序",
        papers: [
          { id: "ra-l-bilstm-2021", title: "A bi-directional LSTM network for estimating continuous upper limb movement from surface electromyography",
            authors: "C. Ma, C. Lin, O. W. Samuel, W. Guo, [[H. Zhang]], S. Greenwald, L. Xu, G. Li",
            venue: "IEEE Robotics and Automation Letters（RA-L）", badges: ["SCI 期刊"], first: "", cite: 113, year: "2021 · 6(4): 7217–7224" },
          { id: "bspc-lstm-2020", title: "sEMG-based continuous estimation of grasp movements by long short-term memory network",
            authors: "C. Wang, W. Guo, [[H. Zhang]], L. Guo, C. Huang, C. Lin",
            venue: "Biomedical Signal Processing and Control", badges: ["SCI Q2"], first: "", cite: 91, year: "2020 · 59: 101774" },
          { id: "scidata-walking-2023", title: "Surface electromyogram, kinematic, and kinetic dataset of lower limb walking for movement intent recognition",
            authors: "W. Wei, F. Tan, [[H. Zhang]], H. Mao, M. Fu, O. W. Samuel, G. Li",
            venue: "Scientific Data", badges: ["SCI Q1"], first: "", cite: 67, year: "2023 · 10(1): 358" },
          { id: "jne-lemc-2021", title: "Long exposure convolutional memory network for accurate estimation of finger kinematics from surface electromyographic signals",
            authors: "W. Guo, C. Ma, Z. Wang, [[H. Zhang]], D. Farina, N. Jiang, C. Lin",
            venue: "Journal of Neural Engineering", badges: ["SCI 期刊"], first: "", cite: 54, year: "2021 · 18(2): 026027" },
          { id: "ra-l-feature-2021", title: "A novel and efficient feature extraction method for deep learning based continuous estimation",
            authors: "C. Ma, W. Guo, [[H. Zhang]], O. W. Samuel, X. Ji, L. Xu, G. Li",
            venue: "IEEE Robotics and Automation Letters（RA-L）", badges: ["SCI 期刊"], first: "", cite: 41, year: "2021 · 6(4): 7341–7348" },
          { id: "neurocomputing-2020", title: "Towards CSI-based diversity activity recognition via LSTM-CNN Encoder-Decoder neural network",
            authors: "L. Guo, [[H. Zhang]]†, et al.",
            venue: "Neurocomputing", badges: ["SCI Q1"], first: "共同一作", cite: 32, year: "2020" }
        ]
      },
      {
        title: "会议论文",
        countLabel: "5 篇",
        papers: [
          { id: "robio-2019", title: "DFNN-based gesture recognition with the shift and damage of the HD-sEMG electrodes",
            authors: "[[H. Zhang]], C. Wang, W. Guo, L. Guo, C. Lin",
            venue: "IEEE ROBIO", badges: [], first: "第一作者", cite: 4, year: "2019" },
          { id: "ijcai-w-2019", title: "Towards diversity activity recognition via LSTM CNN Encoder-Decoder neural network",
            authors: "L. Guo, [[H. Zhang]]†, L. Wang",
            venue: "IJCAI 2019 · Workshop", badges: [], first: "共同一作", cite: "", year: "2019" },
          { id: "embc-grasp-2019", title: "Continuous estimation of grasp movement with sEMG and temporal convolutional nets model",
            authors: "[[H. Zhang]], W. Guo, C. Wang, C. Lin, L. Li, X. Huang",
            venue: "IEEE EMBC", badges: [], first: "第一作者", cite: "", year: "2019" },
          { id: "embc-joints-2019", title: "Continuous upper limb joint angles estimation with sEMG signals based on TCN",
            authors: "[[H. Zhang]], C. Ma",
            venue: "IEEE EMBC", badges: [], first: "第一作者", cite: "", year: "2019 · Poster" },
          { id: "ccrs-dlgc-2019", title: "基于 DLGC 神经网络的手势识别中高密度电极的时空特性变换的研究",
            authors: "[[张行]], 林闯, 王超, 郭伟钰",
            venue: "中国机器人学术年会（CCRS）", badges: ["中文"], first: "第一作者", cite: "", year: "2019 · Poster" }
        ]
      },
      {
        title: "学术专著",
        countLabel: "1 部",
        papers: [
          { id: "book-wifi-dl-2021", title: "Deep Learning for Device-free Human Activity Recognition Using WiFi Signals",
            authors: "L. Guo, [[H. Zhang]], W. Guo, J. Fang, B. Lu, C. Ma, G. Li, C. Lin, L. Wang",
            venue: "Generalization with Deep Learning", badges: ["英文学术专著（章节）"], first: "", cite: "", year: "2021" }
        ]
      }
    ],
    note: "† 共同第一作者 · 被引数据来自 Google Scholar（截至 2026.09）· 论文原文链接补充中",
    scholar: {
      title: "🎓 Google Scholar 学术主页",
      desc: "含肌电手势识别、WiFi 感知动作识别、多模态学习等方向 · 数据截至 2026.09",
      url: "https://scholar.google.com/citations?user=dISPYjYAAAAJ&hl=en",
      btn: "前往学术主页 ↗",
      stats: [
        { num: "402", label: "总引用" },
        { num: "6",   label: "h-index" },
        { num: "6",   label: "i10-index" },
        { num: "12",  label: "学术成果" }
      ]
    },
    researchNote: "<b>科研经历（中国科学院深圳先进技术研究院）：</b>高密度肌电手势识别（利用卷积网络平移不变性解决电极位移与缺失）、WiFi 信号人体动作识别（时空序列 Encoder-Decoder）、肌电信号关节角度连续估计（RNN + Attention / TCN 跨模态拟合）；参与<b>国家 863 计划</b>与<b>国家自然科学基金重点项目</b>，相关技术应用于多自由度假肢臂、下肢康复机器人样机。"
  },

  /* ═══════════ 教育与履历（时间线） ═══════════ */
  timeline: [
    { date: "2024.06 – 至今", org: "中国移动咪咕公司（游戏业务）", role: "AI 团队负责人 / AI 算法总监",
      desc: "负责公司 AI 战略方向制定与落地，从 0 到 1 组建覆盖算法、工程、数据、产品的全栈 AI 团队；主导 AI 游戏生成引擎、AI 游戏智能体、AIGC 体感健身等产品。" },
    { date: "2021.08 – 2024.06", org: "华为技术有限公司 · 盘古大模型团队", role: "算法工程师 → 高级算法工程师",
      desc: "华为自研文生图大模型（EDD 架构）研发与商用；AIGC 广告多模态理解与生成；大屏隔空手势交互；IMU 主动笔与投屏时延优化。" },
    { date: "2018.09 – 2021.07", org: "中国科学院大学", role: "计算机技术 · 硕士",
      desc: "研究方向：机器学习、深度学习（CV / NLP / 多模态交互）、数据工程；于中科院深圳先进技术研究院开展科研工作。" },
    { date: "2014.09 – 2018.07", org: "长春工业大学", role: "计算机科学与技术 · 本科",
      desc: "中国软件杯全国二等奖、全国高教社杯数学建模全国二等奖等竞赛经历。" }
  ],

  /* ═══════════ 荣誉奖项（条目中 <strong> 会高亮） ═══════════ */
  honors: [
    { icon: "👤", title: "个人荣誉", items: [
      "<strong>中国移动集团「拔尖人才」计划</strong>入选",
      "<strong>2026 年南京市紫金山英才计划</strong>（建邺区双创项目创新类，资助 50 万元）",
      "<strong>华为产品线研发部长奖 × 3</strong>（2021 – 2023）",
      "2020 DeeCamp 人工智能训练营 · 赛道第三名",
      "2016 中国软件杯全国二等奖 · 全国高教社杯数学建模全国二等奖"
    ] },
    { icon: "🏆", title: "团队成果", items: [
      "<strong>工信部与国家体育总局</strong> 2024 年度智能体育典型案例",
      "<strong>广电总局</strong> 2025 年「全国智慧广电网络新服务」",
      "<strong>「华彩杯」算力大赛</strong>数字内容专题二等奖"
    ] }
  ],

  /* ═══════════ 媒体报道（整卡点击跳转原文） ═══════════ */
  media: [
    { badge: "产品报道", source: "智能相对论 · 中金在线", date: "2026.07 · ChinaJoy",
      url: "http://mp.cnfol.com/52773/article/1785505108-142606144.html",
      title: "《AI 钻进游戏社区，咪咕游戏打的是什么算盘？》",
      summary: "2026 ChinaJoy 现场直击：观众一句话生成可直接上手的小游戏；玩《双影奇境》卡关，按 F1 即时弹出走位指引；AI 伴玩智能体「星璃」陪聊、讲剧情、剪高光；AI 娱乐主机让体感健身零门槛——同日咪咕发布「AI 智造 · AI 游戏创作计划」产业生态。" },
    { badge: "工作事迹", source: "中国青年网", date: "2025.11",
      url: "https://news.youth.cn/jsxw/202511/t20251124_16367900.htm",
      title: "《AI 青年不止热爱 | 用 AI 创启无限 智领未来》",
      summary: "「一个游戏平台如何与 AI 技术深度融合，为用户带来更新潮、便捷的游戏体验？」作为咪咕快游 AI 技术研发人员，张行正与同伴们一起探索作答；报道同期预热动感地带 AI+ 高校创智计划总决赛。" },
    { badge: "学习阶段", source: "中科院深圳先进院", date: "2021.06 · 毕业季",
      url: "https://www.siat.ac.cn/yxsh/xshd/202412/t20241214_7459159.html",
      title: "《毕业季 · 正青春 | 张行：专心、专注、专业的小行家》",
      summary: "硕士毕业季专访：于集成所神经工程研究中心师从李光林研究员，研究肌电控制、深度学习与人体运动意图识别；发表 3 篇 SCI，赴 IJCAI、ROBIO 国际会议作报告，并编写 World Scientific 智能感知算法书籍章节。" }
  ],

  /* ═══════════ 板块顺序与标题（type 决定渲染器，一般无需改动） ═══════════ */
  sections: [
    { id: "research",     label: "Research Interests", title: "研究方向", sub: "算法研究 × 工程实践",          type: "interests" },
    { id: "engineering",  label: "Engineering",        title: "工程实践", sub: "从算法研究到亿级调用的产品落地", type: "projects" },
    { id: "publications", label: "Publications",       title: "学术成果", sub: "完整论文列表 · 引用数据",       type: "publications" },
    { id: "timeline",     label: "Experience",         title: "教育与履历", sub: "Education · Career",          type: "timeline" },
    { id: "honors",       label: "Honors",             title: "荣誉与奖项", sub: "Honors · Awards",             type: "honors" },
    { id: "media",        label: "Media Coverage",     title: "媒体报道", sub: "从求学探索到产品落地",          type: "media" }
  ]
};
