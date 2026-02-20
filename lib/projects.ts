export interface ArchNode {
  id: string;
  label: string;
  type: "frontend" | "backend" | "database" | "api" | "worker" | "service" | "storage";
  description: string;
  tech?: string[];
}

export interface ArchEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
}

export interface ArchitectureGraph {
  nodes: ArchNode[];
  edges: ArchEdge[];
}

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
  architectureGraph?: ArchitectureGraph;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "legal-ai-assistant",
    title: "Legal AI Assistant",
    description: "Web-based semantic search tool for legal documents with AI-powered chatbot recommendations and similarity analysis.",
    techStack: [],
    status: "MVP",
    tags: ["AI", "React", "Python", "NLP"],
    featured: true,
    complexity: 8,
    createdDate: "2026-02-10",
    link: "/projects/legal-ai-assistant",
    image: "/law-ai-img.png",
    overview:
      "AI-powered document assistant allowing users to access indexed legal databases and upload custom documents for semantic queries.",
    problem:
      "Legal databases lack intelligent semantic search. Lawyers spend hours manually searching through documents and finding similar cases.",
    architecture:
      "React frontend with document upload UI, Python backend for semantic indexing, MongoDB for doc storage, Gemini API for query understanding and recommendations.",
    architectureGraph: {
      nodes: [
        {
          id: "frontend",
          label: "Frontend",
          type: "frontend",
          description: "React + Tailwind + shadcn - Document upload and chat UI",
          tech: ["React", "Tailwind", "shadcn"],
        },
        {
          id: "api",
          label: "API Layer",
          type: "api",
          description: "REST API for document ingestion and queries",
          tech: ["Python", "FastAPI"],
        },
        {
          id: "semantic",
          label: "Semantic Engine",
          type: "service",
          description: "Document embedding and similarity matching",
          tech: ["Python", "Embeddings"],
        },
        {
          id: "llm",
          label: "LLM Layer",
          type: "service",
          description: "Query understanding and recommendations",
          tech: ["Gemini API"],
        },
        {
          id: "db",
          label: "Document Store",
          type: "database",
          description: "MongoDB for indexed documents and embeddings",
          tech: ["MongoDB"],
        },
      ],
      edges: [
        { id: "e1", source: "frontend", target: "api", label: "Upload/Query" },
        { id: "e2", source: "api", target: "semantic", label: "Embed" },
        { id: "e3", source: "semantic", target: "db", label: "Store/Search" },
        { id: "e4", source: "api", target: "llm", label: "Understand" },
        { id: "e5", source: "llm", target: "semantic", label: "Find Similar" },
      ],
    },
  },
  {
    id: "2",
    slug: "tech-store-landing",
    title: "Tech Store Landing Page",
    description: "Modern landing page for Tech Store built with Next.js, deployed on Vercel. Funnels users to WhatsApp chat.",
    techStack: [],
    status: "Active",
    tags: ["NextJS", "Frontend", "Landing"],
    featured: false,
    complexity: 3,
    createdDate: "2026-01-20",
    link: "/projects/tech-store-landing",
    image: "/tech-store-img.png",
    overview:
      "Clean, fast landing page showcasing Tech Store products with direct WhatsApp integration for sales inquiries.",
    problem:
      "Need a performant landing page that converts visitors to WhatsApp conversations for sales support.",
    architecture:
      "Server-side rendered Next.js pages deployed on Vercel, WhatsApp Business API integration for chat funnel.",
  },
  {
    id: "3",
    slug: "ecommerce-tech-reseller",
    title: "E-Commerce - Tech Re-seller",
    description: "Full-stack e-commerce platform with web scraping service for inventory and Express backend for order handling.",
    techStack: [],
    status: "Active",
    tags: ["NextJS", "E-Commerce", "Web-Scraping", "Backend"],
    featured: true,
    complexity: 7,
    createdDate: "2026-01-15",
    link: "/projects/ecommerce-tech-reseller",
    image: "/zenti-img-2.png",
    overview:
      "Complete e-commerce solution with dynamic inventory from web scraping, shopping cart, and checkout flow.",
    problem:
      "Manual inventory management is error-prone. Need automated scraping to sync prices and availability from supplier sites.",
    architecture:
      "Next.js frontend for storefront, Express backend for API, Playwright web scraper for inventory sync, database for orders and inventory.",
    architectureGraph: {
      nodes: [
        {
          id: "frontend",
          label: "Frontend",
          type: "frontend",
          description: "Next.js storefront with cart and checkout UI",
          tech: ["Next.js", "React"],
        },
        {
          id: "api",
          label: "API Server",
          type: "api",
          description: "Express backend for products and orders",
          tech: ["Express", "Node.js"],
        },
        {
          id: "scraper",
          label: "Web Scraper",
          type: "worker",
          description: "Playwright-based inventory sync service",
          tech: ["Playwright"],
        },
        {
          id: "db",
          label: "Database",
          type: "database",
          description: "Storage for products, inventory, and orders",
          tech: ["PostgreSQL"],
        },
      ],
      edges: [
        { id: "e1", source: "frontend", target: "api", label: "Browse/Order" },
        { id: "e2", source: "api", target: "db", label: "Query/Store" },
        { id: "e3", source: "scraper", target: "db", label: "Update Inventory" },
      ],
    },
  },
  {
    id: "4",
    slug: "sales-chatbot-assistant",
    title: "Sales Chatbot Assistant",
    description: "System for defining product catalogs and families with AI-powered sales chatbot. Features semantic search and LLM-based recommendations.",
    techStack: [],
    status: "Active",
    tags: ["AI", "React", "NestJS", "Chatbot"],
    featured: true,
    complexity: 9,
    createdDate: "2026-01-10",
    link: "/projects/sales-chatbot-assistant",
    image: "/sales-chatbot.png",
    overview:
      "Admin dashboard to manage product catalog with feature definitions. AI chatbot uses semantic search and LLM to answer customer queries and recommend products.",
    problem:
      "Sales teams need intelligent assistants that understand product features and can explain them in natural language to customers.",
    architecture:
      "React + Mantine frontend for admin, NestJS with Prisma for backend, Python LLM service with Elastic Search for semantic matching, Gemini API for natural language explanations.",
    architectureGraph: {
      nodes: [
        {
          id: "admin",
          label: "Admin Frontend",
          type: "frontend",
          description: "React + Mantine UI for catalog management",
          tech: ["React", "Mantine"],
        },
        {
          id: "chatbot",
          label: "Chatbot UI",
          type: "frontend",
          description: "React chatbot interface for customers",
          tech: ["React", "Tailwind"],
        },
        {
          id: "backend",
          label: "Backend",
          type: "api",
          description: "NestJS API for product and feature management",
          tech: ["NestJS"],
        },
        {
          id: "llm",
          label: "LLM Service",
          type: "service",
          description: "Python service with semantic search and Gemini integration",
          tech: ["Python", "Gemini API"],
        },
        {
          id: "search",
          label: "Vector Search",
          type: "storage",
          description: "Elastic Search for semantic product matching",
          tech: ["Elastic Search"],
        },
        {
          id: "db",
          label: "Database",
          type: "database",
          description: "Prisma ORM with PostgreSQL for products and features",
          tech: ["Prisma", "PostgreSQL"],
        },
      ],
      edges: [
        { id: "e1", source: "admin", target: "backend", label: "Define Products" },
        { id: "e2", source: "backend", target: "db", label: "Store" },
        { id: "e3", source: "backend", target: "search", label: "Index" },
        { id: "e4", source: "chatbot", target: "backend", label: "Query" },
        { id: "e5", source: "backend", target: "llm", label: "Explain" },
        { id: "e6", source: "llm", target: "search", label: "Find Match" },
      ],
    },
  },
  {
    id: "5",
    slug: "whatsapp-bot",
    title: "WhatsApp Bot",
    description: "Automation bot using the wappjs library with Puppeteer for browser automation. It performs broadcast messaging to multiple chat groups and basic moderation; moderation rules are hard-coded and not user-configurable.",
    techStack: [],
    status: "Active",
    tags: ["Automation", "JavaScript", "Backend"],
    featured: false,
    complexity: 6,
    createdDate: "2026-01-05",
    link: "/projects/whatsapp-bot",
    image: "/wapp-bot.png",
    overview:
      "Automated WhatsApp bot for broadcasting messages to multiple groups with basic moderation and user management.",
    problem:
      "Manual messaging across multiple WhatsApp groups is time-consuming. Need automation for broadcasts; moderation is implemented but rules are not configurable by end users.",
    architecture:
      "JavaScript service using wappjs (Puppeteer) for browser automation, SQLite for local state, deployed on AWS EC2.",
  },
  {
    id: "6",
    slug: "discounts-app",
    title: "Discounts App",
    description: "Mobile app (React Native) showing real-time discounts from local stores. Includes store owner backend for uploading promotions and student validation.",
    techStack: [],
    status: "Active",
    tags: ["Mobile", "React-Native", "NestJS"],
    featured: false,
    complexity: 7,
    createdDate: "2025-12-28",
    link: "/projects/discounts-app",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=400&fit=crop",
    overview:
      "Mobile app discovering local store discounts with location-based filtering and student-exclusive validation. Store owners manage promotions via admin panel.",
    problem:
      "University students struggle to find available discounts. Store owners lack an easy way to advertise time-limited promotions.",
    architecture:
      "React Native mobile app with map view, NestJS backend with Prisma ORM, PostgreSQL for discounts/stores/users, student verification system.",
    architectureGraph: {
      nodes: [
        {
          id: "mobile",
          label: "Mobile App",
          type: "frontend",
          description: "React Native iOS/Android with location and map views",
          tech: ["React Native"],
        },
        {
          id: "admin",
          label: "Store Admin",
          type: "frontend",
          description: "Web interface for store owners to manage discounts",
          tech: ["React", "Web"],
        },
        {
          id: "api",
          label: "API Backend",
          type: "api",
          description: "NestJS API for all app operations",
          tech: ["NestJS"],
        },
        {
          id: "verify",
          label: "Verification",
          type: "service",
          description: "Student credential validation service",
          tech: ["Node.js"],
        },
        {
          id: "db",
          label: "Database",
          type: "database",
          description: "PostgreSQL with Prisma ORM for discounts and users",
          tech: ["Prisma", "PostgreSQL"],
        },
      ],
      edges: [
        { id: "e1", source: "mobile", target: "api", label: "Browse/Validate" },
        { id: "e2", source: "admin", target: "api", label: "Manage" },
        { id: "e3", source: "api", target: "verify", label: "Verify Student" },
        { id: "e4", source: "api", target: "db", label: "Store" },
      ],
    },
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
