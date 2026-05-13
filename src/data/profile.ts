export interface Skill {
  name: string;
  icon: string;
  category: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  sourceUrl: string;
  liveUrl: string;
}

export interface TimelineItem {
  type: 'work' | 'education';
  date: string;
  title: string;
  org: string;
  description: string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  stats: {
    projects: number;
    experience: number;
    skills: number;
  };
  skills: Skill[];
  projects: Project[];
  timeline: TimelineItem[];
  social: {
    github: string;
    linkedin: string;
    email: string;
  };
  navLinks: { label: string; href: string }[];
}

export const profile: Profile = {
  name: '强强',
  title: '后端开发工程师',
  bio: '热爱技术的后端开发者，南京邮电大学信息与通信工程硕士在读。专注于 Java 生态与高性能服务端架构，具备大模型应用开发经验，熟悉 Spring AI、RAG、Agent 等 LLM 应用模式。追求代码质量与系统稳定性，对新技术保持好奇心。',
  avatar: '/avatar.jpg',
  stats: {
    projects: 6,
    experience: 2,
    skills: 12,
  },
  skills: [
    { name: 'Java', icon: 'SiOpenjdk', category: '编程语言' },
    { name: 'Python', icon: 'SiPython', category: '编程语言' },
    { name: 'Spring Boot', icon: 'SiSpringboot', category: '后端框架' },
    { name: 'MyBatis', icon: 'SiThealgorithms', category: '后端框架' },
    { name: 'MySQL', icon: 'SiMysql', category: '数据库' },
    { name: 'Redis', icon: 'SiRedis', category: '数据库' },
    { name: 'Docker', icon: 'SiDocker', category: '工具' },
    { name: 'Maven', icon: 'SiApache', category: '工具' },
    { name: 'Git', icon: 'SiGit', category: '工具' },
    { name: 'Linux', icon: 'SiLinux', category: '工具' },
    { name: 'Spring AI', icon: 'SiSpring', category: 'AI / 大模型' },
    { name: 'LangChain', icon: 'SiLangchain', category: 'AI / 大模型' },
  ],
  projects: [
    {
      title: 'AI Agent 可视化构建平台',
      description: '支持拖拽式编排大模型工作流的可视化平台。实现 DSL → DAG 执行图自动构建，通过 CompletableFuture + TTL 实现 50+ 节点的并行执行；基于 Spring AI 构建多模型统一网关，抹平 OpenAI / DeepSeek / Qwen 调用差异；使用 Reactor Flux 实现 SSE 流式响应，优化延迟至 200ms 以内。',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      tags: ['Java 21', 'Spring Boot', 'Spring AI', 'MySQL', 'Redis', 'Docker'],
      sourceUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Prompt 模板引擎',
      description: '基于 VariableTemplateRender 的 Prompt 动态渲染系统，支持 {{node-id.variable}} 语法实现上下文注入与内容级联绑定。集成 Token 计数与 Context Window 管理，最大化利用大模型上下文空间。',
      image: 'https://images.unsplash.com/photo-1717501218325-4cbe585b47e8?w=600&h=400&fit=crop',
      tags: ['Java', 'LLM', 'Template Engine', 'Prompt Engineering'],
      sourceUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: '双缓冲 SSE 流式响应引擎',
      description: '基于 ConcurrentLinkedQueue 的双缓冲中间件，通过异步调度线程实现 Token 片段的批量消费与背压控制，解决高并发 SSE 场景下的丢包与乱序问题，响应延迟控制在 200ms 以内。',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      tags: ['Reactor Flux', 'SSE', 'ConcurrentLinkedQueue', 'Backpressure'],
      sourceUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
  ],
  timeline: [
    {
      type: 'work',
      date: '2026.01 - 至今',
      title: 'AI Agent 可视化构建平台开发',
      org: '项目核心开发者',
      description: '主导平台核心模块设计与开发，涵盖工作流编排引擎、多模型统一网关、SSE 流式响应优化等关键功能，支持 50+ 节点规模的复杂工作流并行执行。',
    },
    {
      type: 'education',
      date: '2024.09 - 2027.06',
      title: '信息与通信工程 硕士',
      org: '南京邮电大学',
      description: '主修现代通信理论、信号处理、嵌入式系统，研究方向为 AI 应用与系统工程。',
    },
    {
      type: 'education',
      date: '2020.09 - 2024.06',
      title: '电子科学与技术 本科',
      org: '南通大学',
      description: '主修电路分析、模拟电子技术、数字电路、微处理器系统，毕业设计获校级优秀。',
    },
  ],
  social: {
    github: 'https://github.com/xiaoshuidi277',
    linkedin: '',
    email: '2795095936@qq.com',
  },
  navLinks: [
    { label: '关于', href: '#about' },
    { label: '技能', href: '#skills' },
    { label: '项目', href: '#projects' },
    { label: '经历', href: '#timeline' },
    { label: '联系', href: '#contact' },
  ],
};
