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
  name: '张三',
  title: '前端开发工程师',
  bio: '热爱技术与设计的前端开发者，专注于构建高性能、优美用户体验的 Web 应用。3 年开发经验，擅长 React 生态，追求代码质量与产品美学的统一。始终对新技术保持好奇心，喜欢将创意变成可交互的数字作品。',
  avatar: '/avatar.jpg',
  stats: {
    projects: 12,
    experience: 3,
    skills: 15,
  },
  skills: [
    { name: 'React', icon: 'SiReact', category: '前端框架' },
    { name: 'TypeScript', icon: 'SiTypescript', category: '前端框架' },
    { name: 'Vue.js', icon: 'SiVuedotjs', category: '前端框架' },
    { name: 'Next.js', icon: 'SiNextdotjs', category: '前端框架' },
    { name: 'Tailwind CSS', icon: 'SiTailwindcss', category: '样式' },
    { name: 'Sass', icon: 'SiSass', category: '样式' },
    { name: 'Node.js', icon: 'SiNodedotjs', category: '后端' },
    { name: 'Python', icon: 'SiPython', category: '后端' },
    { name: 'PostgreSQL', icon: 'SiPostgresql', category: '数据库' },
    { name: 'MongoDB', icon: 'SiMongodb', category: '数据库' },
    { name: 'Docker', icon: 'SiDocker', category: '工具' },
    { name: 'Git', icon: 'SiGit', category: '工具' },
    { name: 'Figma', icon: 'SiFigma', category: '设计' },
    { name: 'Vite', icon: 'SiVite', category: '工具' },
    { name: 'GraphQL', icon: 'SiGraphql', category: '其他' },
  ],
  projects: [
    {
      title: '电商管理后台',
      description: '全栈电商后台管理系统，包含商品管理、订单处理、数据仪表盘、权限控制等核心功能。',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      sourceUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: '在线协作白板',
      description: '实时协作白板应用，支持多人同时编辑、画笔工具、形状绘制、便签评论等功能。',
      image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop',
      tags: ['Next.js', 'Socket.io', 'Canvas API', 'Tailwind CSS'],
      sourceUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: 'AI 聊天助手',
      description: '基于大语言模型的智能对话应用，支持上下文理解、代码生成、文件解析等能力。',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      tags: ['React', 'Python', 'WebSocket', 'OpenAI API'],
      sourceUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: '组件库设计系统',
      description: '企业级 React 组件库，包含 30+ 组件，支持主题定制、无障碍访问和 Storybook 文档。',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop',
      tags: ['React', 'TypeScript', 'Storybook', 'Rollup'],
      sourceUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
  ],
  timeline: [
    {
      type: 'work',
      date: '2023.06 - 至今',
      title: '前端开发工程师',
      org: '某科技有限公司',
      description: '负责公司核心产品的前端架构设计与开发，主导组件库搭建，优化首屏加载性能 40%。',
    },
    {
      type: 'work',
      date: '2021.09 - 2023.05',
      title: '初级前端开发',
      org: '某互联网公司',
      description: '参与多个 B 端项目开发，独立负责运营后台模块，日常 Code Review 与技术分享。',
    },
    {
      type: 'education',
      date: '2017.09 - 2021.06',
      title: '计算机科学与技术 本科',
      org: '某大学',
      description: '主修数据结构、算法设计、操作系统、计算机网络，获校级优秀毕业设计。',
    },
  ],
  social: {
    github: 'https://github.com/xiaoshuidi277',
    linkedin: 'https://linkedin.com',
    email: 'hello@example.com',
  },
  navLinks: [
    { label: '关于', href: '#about' },
    { label: '技能', href: '#skills' },
    { label: '项目', href: '#projects' },
    { label: '经历', href: '#timeline' },
    { label: '联系', href: '#contact' },
  ],
};
