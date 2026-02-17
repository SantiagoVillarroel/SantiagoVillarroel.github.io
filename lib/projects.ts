export type ProjectStatus = "MVP" | "Active" | "Paused";

export interface Project {
  id: string;
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
}

export const projects: Project[] = [
  {
    id: "1",
    title: "AI Content Generator",
    description: "Intelligent tool for generating blog posts and marketing copy using GPT-4 API with real-time streaming.",
    techStack: ["Zap", "Brain", "Code", "Database"],
    status: "Active",
    tags: ["AI", "React", "NextJS", "Streaming"],
    featured: true,
    complexity: 8,
    createdDate: "2026-02-01",
    link: "#",
    image: "/projects/ai-content.jpg",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Full-stack task management platform with real-time collaboration, drag-and-drop kanban board, and team features.",
    techStack: ["Check", "Users", "Zap", "Clock"],
    status: "Active",
    tags: ["React", "Typescript", "Backend", "Collaboration"],
    featured: true,
    complexity: 7,
    createdDate: "2026-01-15",
    link: "#",
    image: "/projects/task-app.jpg",
  },
  {
    id: "3",
    title: "Portfolio Analytics Dashboard",
    description: "Analytics dashboard for tracking portfolio performance with interactive charts, real-time data updates, and export functionality.",
    techStack: ["BarChart3", "TrendingUp", "Calendar", "Download"],
    status: "Active",
    tags: ["React", "Dashboard", "Analytics", "Data-Viz"],
    featured: false,
    complexity: 6,
    createdDate: "2025-12-20",
    link: "#",
    image: "/projects/analytics.jpg",
  },
  {
    id: "4",
    title: "E-Commerce Platform MVP",
    description: "Minimal viable product for an e-commerce store with product catalog, shopping cart, and checkout flow.",
    techStack: ["ShoppingCart", "CreditCard", "Package", "Store"],
    status: "MVP",
    tags: ["NextJS", "E-Commerce", "Stripe", "Database"],
    featured: false,
    complexity: 9,
    createdDate: "2025-11-30",
    link: "#",
    image: "/projects/ecommerce.jpg",
  },
  {
    id: "5",
    title: "Social Media Analytics Tool",
    description: "Monitor and analyze social media performance across multiple platforms with automated reporting and insights generation.",
    techStack: ["BarChart3", "Share2", "TrendingUp", "Send"],
    status: "Paused",
    tags: ["Analytics", "API-Integration", "Python", "Backend"],
    featured: false,
    complexity: 7,
    createdDate: "2025-10-15",
    link: "#",
    image: "/projects/social-analytics.jpg",
  },
  {
    id: "6",
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking application with workout logging, progress visualization, and community features.",
    techStack: ["Activity", "Heart", "Users", "TrendingUp"],
    status: "Active",
    tags: ["Mobile", "React-Native", "Fitness", "Community"],
    featured: false,
    complexity: 8,
    createdDate: "2025-09-10",
    link: "#",
    image: "/projects/fitness.jpg",
  },
  {
    id: "7",
    title: "Code Collaboration Editor",
    description: "Real-time collaborative code editor with WebSocket integration, syntax highlighting, and live debugging capabilities.",
    techStack: ["Code2", "Users", "Zap", "Terminal"],
    status: "Active",
    tags: ["React", "WebSocket", "Collaboration", "DevTools"],
    featured: true,
    complexity: 9,
    createdDate: "2025-08-25",
    link: "#",
    image: "/projects/editor.jpg",
  },
  {
    id: "8",
    title: "AI Chatbot Widget",
    description: "Embeddable AI chatbot widget for websites with custom training, multi-language support, and analytics integration.",
    techStack: ["MessageCircle", "Brain", "Globe", "BarChart3"],
    status: "Active",
    tags: ["AI", "React", "Typescript", "Widget"],
    featured: false,
    complexity: 7,
    createdDate: "2025-08-01",
    link: "#",
    image: "/projects/chatbot.jpg",
  },
  {
    id: "9",
    title: "Real Estate Marketplace",
    description: "Property listing platform with advanced filtering, 3D tours, mortgage calculator, and agent management system.",
    techStack: ["Map", "Home", "Users", "Calculator"],
    status: "MVP",
    tags: ["NextJS", "Maps", "Database", "E-Commerce"],
    featured: false,
    complexity: 8,
    createdDate: "2025-07-12",
    link: "#",
    image: "/projects/realestate.jpg",
  },
  {
    id: "10",
    title: "Developer Blog Platform",
    description: "Open-source blogging platform for developers with markdown support, syntax highlighting, SEO optimization, and comments.",
    techStack: ["FileText", "Code", "Search", "MessageSquare"],
    status: "Active",
    tags: ["NextJS", "Backend", "SEO", "Content"],
    featured: false,
    complexity: 6,
    createdDate: "2025-06-28",
    link: "#",
    image: "/projects/blog.jpg",
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
