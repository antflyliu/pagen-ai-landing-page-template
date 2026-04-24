import { Page } from "@/types/landing";

export const page: Page = {
  template: "salient",
  theme: "light",
  header: {
    brand: {
      title: "从立创星科技",
      avatar: {
        src: "/imgs/logo.png",
        title: "北京从立创星科技有限公司",
      },
      url: "/",
    },
    nav: {
      items: [
        { title: "服务能力", url: "#services" },
        { title: "解决方案", url: "#solutions" },
        { title: "技术优势", url: "#features" },
        { title: "常见问题", url: "#faq" },
      ],
    },
    buttons: [
      {
        title: "联系合作",
        url: "#contact",
      },
    ],
  },
  hero: {
    title: "让 AI 真正进入业务流程",
    description:
      "北京从立创星科技有限公司专注 AI 应用开发、智能知识库、自动化工作流与企业数字化系统建设，帮助团队把想法快速落成可用产品。",
    image: { src: "/imgs/hero.png" },
    image_position: "right",
    text_align: "left",
    buttons: [
      { title: "了解服务", url: "#services" },
      { title: "咨询方案", url: "#contact", theme: "outline" },
    ],
    show_happy_users: true,
    show_proof: false,
  },
  section: {
    items: [
      {
        name: "services",
        title: "我们能做什么",
        description:
          "围绕企业真实业务场景，从需求梳理、原型验证到系统交付，提供轻量、高效、可持续迭代的 AI 技术服务。",
        image: { src: "/imgs/section1.png" },
        image_position: "left",
        text_align: "center",
        items: [
          {
            title: "AI 应用开发",
            description:
              "基于大语言模型、AIGC、OCR、语音识别等能力，开发智能助手、内容生成、数据处理与行业工具。",
          },
          {
            title: "企业知识库问答",
            description:
              "面向制度文档、产品资料、客服话术和项目资料，建设可检索、可追溯、可持续更新的智能知识库。",
          },
          {
            title: "业务流程自动化",
            description:
              "把重复录入、信息整理、报表生成、客户跟进等流程自动化，减少人工消耗，提高响应速度。",
          },
        ],
      },
      {
        name: "solutions",
        title: "适合落地的业务场景",
        description:
          "AI 不应该只停在演示里。我们更关注它如何接入现有流程、降低使用门槛，并持续产生业务价值。",
        image: { src: "/imgs/section2.png" },
        image_position: "right",
        text_align: "center",
        items: [
          {
            title: "智能客服与售前助手",
            description:
              "沉淀问答知识、自动回复常见咨询，帮助销售和客服团队更快响应客户。",
          },
          {
            title: "企业内部智能助手",
            description:
              "连接知识库、表格、文档和系统数据，让员工用自然语言完成查询、整理和生成。",
          },
          {
            title: "行业内容与数据处理",
            description:
              "批量生成营销素材、整理非结构化资料、抽取关键信息，让内容和数据处理不再靠硬熬。",
          },
        ],
      },
      {
        name: "process",
        title: "合作流程",
        description:
          "从一个清晰的小目标开始，先验证价值，再逐步扩展功能。少走弯路，就是最快的交付方式。",
        image: { src: "/imgs/section3.png" },
        image_position: "left",
        text_align: "center",
        items: [
          {
            title: "1. 需求诊断",
            description:
              "梳理业务目标、使用人群、数据来源和交付边界，确认最值得优先落地的 AI 场景。",
          },
          {
            title: "2. 原型验证",
            description:
              "快速搭建 Demo 或最小可用版本，用真实数据验证效果、成本和可用性。",
          },
          {
            title: "3. 交付迭代",
            description:
              "完成系统开发、部署、培训与后续优化，让方案从能看变成真能用。",
          },
        ],
        buttons: [{ title: "开始沟通 👉", url: "#contact" }],
      },
    ],
  },
  feature: {
    title: "技术优势",
    description:
      "我们用工程化方式做 AI，把模型能力、业务规则、数据安全和用户体验放在同一张图里考虑。",
    items: [
      {
        title: "大模型应用集成",
        description:
          "支持对接主流大模型能力，结合提示词工程、工具调用和业务规则，让 AI 输出更稳定、更贴合场景。",
        avatar: { src: "/imgs/icons/1.svg" },
      },
      {
        title: "RAG 知识库方案",
        description:
          "面向企业文档构建检索增强问答，支持知识切分、向量检索、引用溯源与持续更新。",
        avatar: { src: "/imgs/icons/2.svg" },
      },
      {
        title: "Agent 工作流",
        description:
          "将多步骤任务拆解为可控流程，让 AI 能完成查询、分析、生成、调用系统等连续动作。",
        avatar: { src: "/imgs/icons/3.svg" },
      },
      {
        title: "数据处理自动化",
        description:
          "处理表格、文档、图片、合同和客服记录等多源数据，减少人工整理和重复劳动。",
        avatar: { src: "/imgs/icons/4.svg" },
      },
      {
        title: "可部署可维护",
        description:
          "根据项目需要支持云端部署、私有化部署或轻量化集成，便于后续维护和二次开发。",
        avatar: { src: "/imgs/icons/5.svg" },
      },
      {
        title: "以结果为导向",
        description:
          "不堆概念，优先关注业务指标、使用体验、响应速度和实际节省的时间成本。",
        avatar: { src: "/imgs/icons/6.svg" },
      },
    ],
  },
  cta: {
    title: "有一个 AI 想法？先把它做成能用的版本",
    description: "从小场景切入，快速验证，稳步升级。让 AI 项目不再只停留在 PPT 里。",
    buttons: [{ title: "预约沟通", url: "#contact" }],
  },
  testimonial: {
    title: "典型服务方向",
    description:
      "以下为可落地的项目类型示例，可根据企业行业、数据条件和预算进行组合。",
    items: [
      {
        name: "知识库问答系统",
        title: "适合客服、售前、内部培训",
        description:
          "把企业资料变成可问可查的智能助手，提升信息获取效率，减少重复答疑。",
        avatar: { src: "/imgs/user/1.png" },
      },
      {
        name: "AI 内容生产工具",
        title: "适合运营、电商、营销团队",
        description:
          "批量生成标题、文案、商品描述、短视频脚本和活动素材，提升内容生产速度。",
        avatar: { src: "/imgs/user/2.png" },
      },
      {
        name: "智能表格与报表助手",
        title: "适合行政、财务、销售管理",
        description:
          "自动整理数据、生成摘要、输出报表和分析结论，让表格工作少一点痛苦。",
        avatar: { src: "/imgs/user/3.png" },
      },
      {
        name: "文档识别与信息抽取",
        title: "适合合同、票据、档案处理",
        description:
          "识别图片和文档中的关键信息，自动结构化入库，降低人工录入成本。",
        avatar: { src: "/imgs/user/4.png" },
      },
      {
        name: "智能客服机器人",
        title: "适合官网、私域、售后场景",
        description:
          "结合业务知识和转人工机制，构建更稳的客户问答与服务流程。",
        avatar: { src: "/imgs/user/5.png" },
      },
      {
        name: "定制化 AI 工具平台",
        title: "适合需要长期迭代的团队",
        description:
          "围绕企业自身流程开发专属工具，把多个 AI 能力整合到一个统一入口。",
        avatar: { src: "/imgs/user/6.png" },
      },
    ],
  },
  faq: {
    title: "常见问题",
    description: "关于 AI 项目落地、数据、安全和交付方式，你可能会先问这些。",
    items: [
      {
        title: "你们主要做哪类 AI 项目？",
        description:
          "主要覆盖 AI 应用开发、企业知识库问答、智能客服、业务流程自动化、数据处理和定制化系统开发。",
      },
      {
        title: "没有完整需求文档，可以开始吗？",
        description:
          "可以。通常会先从业务目标和现有流程开始梳理，再确定优先级、功能边界和最小可用版本。",
      },
      {
        title: "企业内部资料能否接入知识库？",
        description:
          "可以接入常见文档、表格和网页资料，并根据项目需要设计权限、更新机制和引用溯源。",
      },
      {
        title: "是否支持私有化部署？",
        description:
          "可根据数据敏感度、预算和运维条件评估云端、私有化或混合部署方案。",
      },
      {
        title: "项目周期一般多久？",
        description:
          "轻量原型通常可以较快验证，完整系统周期取决于功能复杂度、数据准备情况和集成范围。",
      },
      {
        title: "如何判断一个 AI 场景值不值得做？",
        description:
          "优先看是否高频、重复、耗时、规则相对明确，并且有足够数据支撑。能明确节省时间或提升转化的场景更值得优先落地。",
      },
    ],
  },
  footer: {
    brand: {
      title: "北京从立创星科技有限公司",
      description:
        "专注 AI 应用落地、智能知识库、自动化工作流与企业数字化系统建设，帮助企业把 AI 变成真实生产力。",
      avatar: {
        src: "/imgs/logo.png",
        title: "北京从立创星科技有限公司",
      },
      url: "/",
    },
    badge_disabled: false,
    copyright: "© 2026 • 北京从立创星科技有限公司 All rights reserved.",
    social: {
      items: [
        {
          title: "Email",
          url: "mailto:contact@example.com",
          target: "_self",
        },
      ],
    },
    nav: {
      items: [
        {
          title: "服务",
          children: [
            { title: "AI 应用开发", url: "#services" },
            { title: "知识库问答", url: "#solutions" },
            { title: "流程自动化", url: "#process" },
          ],
        },
        {
          title: "公司",
          children: [
            { title: "技术优势", url: "#features" },
            { title: "常见问题", url: "#faq" },
            { title: "商务合作", url: "#contact" },
          ],
        },
        {
          title: "合规",
          children: [
            { title: "隐私政策", url: "/privacy-policy" },
            { title: "服务条款", url: "/terms-of-service" },
          ],
        },
      ],
    },
  },
};
