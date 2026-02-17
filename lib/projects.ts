export type ProjectStatus = "MVP" | "Active" | "Paused";

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  techStack: string[]; // Icon names from lucide-react (e.g., "React", "Typescript", "Tailwind")
  status: ProjectStatus;
  tags: string[];
  featured: boolean;
  complexity: number; // 1-10 scale
  createdDate: string; // ISO date string
  link: string;
  image?: string; // URL to project image
  overview?: string;
  problem?: string;
  architecture?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "ai-content-generator",
    title: "AI Content Generator",
    description: "Intelligent tool for generating blog posts and marketing copy using GPT-4 API with real-time streaming.",
    techStack: ["Zap", "Brain", "Code", "Database"],
    status: "Active",
    tags: ["AI", "React", "NextJS", "Streaming"],
    featured: true,
    complexity: 8,
    createdDate: "2026-02-01",
    link: "/projects/ai-content-generator",
    image: "/projects/ai-content.jpg",
    overview:
      "AI Content Generator creates SEO-optimized articles from prompts and supports streaming previews and revisions.",
    problem:
      "Writers spend hours creating drafts and performing SEO research. This tool automates initial drafts and speeds up iteration.",
    architecture:
      "Next.js frontend, Node API layer, GPT-based inference service, Redis cache, and Postgres for persistence.",
  },
  {
    id: "2",
    slug: "task-management-app",
    title: "Task Management App",
    description: "Full-stack task management platform with real-time collaboration, drag-and-drop kanban board, and team features.",
    techStack: ["Check", "Users", "Zap", "Clock"],
    status: "Active",
    tags: ["React", "Typescript", "Backend", "Collaboration"],
    featured: true,
    complexity: 7,
    createdDate: "2026-01-15",
    link: "/projects/task-management-app",
    image: "/projects/task-app.jpg",
    overview:
      "Task Management App enables teams to organize work with boards, assignments, and real-time sync.",
    problem:
      "Existing tools are either too heavy or lack native collaboration features; teams need lightweight, real-time boards.",
    architecture:
      "Realtime WebSocket server, RESTful APIs, worker queue for background jobs, and relational datastore.",
  },
  {
    id: "3",
    slug: "portfolio-analytics-dashboard",
    title: "Portfolio Analytics Dashboard",
    description: "Analytics dashboard for tracking portfolio performance with interactive charts, real-time data updates, and export functionality.",
    techStack: ["BarChart3", "TrendingUp", "Calendar", "Download"],
    status: "Active",
    tags: ["React", "Dashboard", "Analytics", "Data-Viz"],
    featured: false,
    complexity: 6,
    createdDate: "2025-12-20",
    link: "/projects/portfolio-analytics-dashboard",
    image: "/projects/analytics.jpg",
    overview:
      "An analytics dashboard providing key metrics and customizable charts to monitor application performance.",
    problem:
      "Stakeholders need consolidated metrics from various sources; manual reporting is slow and error-prone.",
    architecture:
      "ETL pipelines ingest data, time-series DB for metrics, and frontend charts with lazy-loaded data chunks.",
  },
  {
    id: "4",
    slug: "ecommerce-mvp",
    title: "E-Commerce Platform MVP",
    description: "Minimal viable product for an e-commerce store with product catalog, shopping cart, and checkout flow.",
    techStack: ["ShoppingCart", "CreditCard", "Package", "Store"],
    status: "MVP",
    tags: ["NextJS", "E-Commerce", "Stripe", "Database"],
    featured: false,
    complexity: 9,
    createdDate: "2025-11-30",
    link: "/projects/ecommerce-mvp",
    image: "/projects/ecommerce.jpg",
    overview: "MVP for a storefront with catalog, checkout, and order management.",
    problem: "Launch quickly with core commerce features before investing in complex systems.",
    architecture: "Server-rendered product pages, serverless checkout functions, and Stripe integration.",
  },
  {
    id: "5",
    slug: "social-media-analytics",
    title: "Social Media Analytics Tool",
    description: "Monitor and analyze social media performance across multiple platforms with automated reporting and insights generation.",
    techStack: ["BarChart3", "Share2", "TrendingUp", "Send"],
    status: "Paused",
    tags: ["Analytics", "API-Integration", "Python", "Backend"],
    featured: false,
    complexity: 7,
    createdDate: "2025-10-15",
    link: "/projects/social-media-analytics",
    image: "/projects/social-analytics.jpg",
    overview: "Aggregate social metrics and generate scheduled reports for stakeholders.",
    problem: "Manual cross-platform reporting is time-consuming and inconsistent.",
    architecture: "Platform connectors, scheduled ingestion pipelines, and analytics dashboard.",
  },
  {
    id: "6",
    slug: "mobile-fitness-app",
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking application with workout logging, progress visualization, and community features.",
    techStack: ["Activity", "Heart", "Users", "TrendingUp"],
    status: "Active",
    tags: ["Mobile", "React-Native", "Fitness", "Community"],
    featured: false,
    complexity: 8,
    createdDate: "2025-09-10",
    link: "/projects/mobile-fitness-app",
    image: "/projects/fitness.jpg",
    overview: "Track workouts and progress with social features and personalized plans.",
    problem: "Users lack an integrated solution combining tracking with community motivation.",
    architecture: "Cross-platform app with backend APIs, push notifications, and analytics.",
  },
  {
    id: "7",
    slug: "code-collaboration-editor",
    title: "Code Collaboration Editor",
    description: "Real-time collaborative code editor with WebSocket integration, syntax highlighting, and live debugging capabilities.",
    techStack: ["Code2", "Users", "Zap", "Terminal"],
    status: "Active",
    tags: ["React", "WebSocket", "Collaboration", "DevTools"],
    featured: true,
    complexity: 9,
    createdDate: "2025-08-25",
    link: "/projects/code-collaboration-editor",
    image: "/projects/editor.jpg",
    overview: "Collaborative editor enabling pairs or teams to edit and debug together in real time.",
    problem: "Remote collaboration on code lacks seamless, low-latency editing and shared debugging.",
    architecture: "Operational transform CRDT server, WebSocket relays, and per-session storage.",
  },
  {
    id: "8",
    slug: "ai-chatbot-widget",
    title: "AI Chatbot Widget",
    description: "Embeddable AI chatbot widget for websites with custom training, multi-language support, and analytics integration.",
    techStack: ["MessageCircle", "Brain", "Globe", "BarChart3"],
    status: "Active",
    tags: ["AI", "React", "Typescript", "Widget"],
    featured: false,
    complexity: 7,
    createdDate: "2025-08-01",
    link: "/projects/ai-chatbot-widget",
    image: "/projects/chatbot.jpg",
    overview: "Embeddable chatbot with customization and analytics for websites.",
    problem: "Website owners need an easy way to add intelligent assistants without heavy infra.",
    architecture: "Small JS bundle for embedding, remote inference API, and analytics backend.",
  },
  {
    id: "9",
    slug: "real-estate-marketplace",
    title: "Real Estate Marketplace",
    description: "Property listing platform with advanced filtering, 3D tours, mortgage calculator, and agent management system.",
    techStack: ["Map", "Home", "Users", "Calculator"],
    status: "MVP",
    tags: ["NextJS", "Maps", "Database", "E-Commerce"],
    featured: false,
    complexity: 8,
    createdDate: "2025-07-12",
    link: "/projects/real-estate-marketplace",
    image: "/projects/realestate.jpg",
    overview: "Marketplace to list and search properties with rich media and calculators.",
    problem: "Homebuyers need consolidated listings with accurate pricing tools.",
    architecture: "Search-indexed properties, media CDN, and server-side rendering for SEO.",
  },
  {
    id: "10",
    slug: "developer-blog-platform",
    title: "Developer Blog Platform",
    description: "Open-source blogging platform for developers with markdown support, syntax highlighting, SEO optimization, and comments.",
    techStack: ["FileText", "Code", "Search", "MessageSquare"],
    status: "Active",
    tags: ["NextJS", "Backend", "SEO", "Content"],
    featured: false,
    complexity: 6,
    createdDate: "2025-06-28",
    link: "/projects/developer-blog-platform",
    image: "/projects/blog.jpg",
    overview: "A blog platform focused on developer workflows, markdown, and SEO.",
    problem: "Developers need a platform optimized for code-focused content and easy deployment.",
    architecture: "Markdown-based content pipeline, static generation, and comment system.",
  },
];

// Helper functions for filtering
export const getAllTags = (): string[] => {
  const tagsSet = new Set<string>();
  projects.forEach((project) => {
    project.tags.forEach((tag) => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
};

export const filterProjects = (
  projectList: Project[],
  selectedTags: string[],
  searchQuery: string,
  sortBy: "recent" | "complexity" | "featured"
): Project[] => {
  let filtered = projectList;

  // Filter by tags (all selected tags must be present)
  if (selectedTags.length > 0) {
    filtered = filtered.filter((project) =>
      selectedTags.every((tag) => project.tags.includes(tag))
    );
  }

  // Filter by search query
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (project) =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }

  // Sort
  const sorted = [...filtered];
  if (sortBy === "recent") {
    sorted.sort((a, b) => new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime());
  } else if (sortBy === "complexity") {
    sorted.sort((a, b) => b.complexity - a.complexity);
  } else if (sortBy === "featured") {
    sorted.sort((a, b) => {
      // Featured projects first, then by date
      if (a.featured !== b.featured) {
        return a.featured ? -1 : 1;
      }
      return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime();
    });
  }

  return sorted;
};
