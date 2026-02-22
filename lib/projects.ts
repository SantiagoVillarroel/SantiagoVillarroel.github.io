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
          description: "Browser SPA used by users for login, document upload, search and real-time chat. Sends REST calls and opens WebSocket connections for interactive document chat.",
          tech: ["React", "Tailwind", "shadcn", "TypeScript", "WebSocket"],
        },
        {
          id: "api",
          label: "API / Python Server",
          type: "api",
          description: "Authenticates users, exposes REST and WebSocket endpoints (document chat), coordinates ingestion, chunking, vector indexing, retrieval, and RAG (retrieval-augmented generation) calls to LLMs. Also runs background jobs.",
          tech: ["Python", "FastAPI", "PyMongo"],
        },
        {
          id: "semantic",
          label: "Semantic Layer",
          type: "service",
          description: "Stores vector embeddings of document chunks and supports nearest-neighbor semantic search to return top-k relevant chunks for queries. Used by API to supply context to LLMs.",
          tech: ["Python", "Embeddings"],
        },
        {
          id: "llm",
          label: "LLM Layer",
          type: "service",
          description: "Provides embedding models and generation (completion) models. Used for computing embeddings (during ingestion and on-demand) and for generating answers / chat responses using retrieved context.",
          tech: ["Gemini API", "OpenAI API"],
        },
        {
          id: "db",
          label: "Document Store",
          type: "database",
          description: "Authoritative document metadata, user accounts, session state, ingestion status, chunk metadata, and pointers to stored files.",
          tech: ["MongoDB"],
        },
      ],
      edges: [
        { id: "e1", source: "frontend", target: "api", label: "CRUD/Search/Upload" },
        { id: "e2", source: "api", target: "semantic", label: "Semantic Search" },
        { id: "e3", source: "semantic", target: "db", label: "Store/Search" },
        { id: "e4", source: "api", target: "llm", label: "Query/Generate" },
        { id: "e5", source: "api", target: "db", label: "CRUD" }
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
          description: "Next.js-based single-page application that displays products, manages shopping cart, and handles product browsing. Users interact with the UI, and the app fetches product data from the Express API.",
          tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Axios"],
        },
        {
          id: "api",
          label: "API / Express Server",
          type: "api",
          description: "RESTful Express server that acts as the main backend. Exposes endpoints for fetching products and receiving data from the scraper.",
          tech: ["Express", "Node.js", "JavaScript"],
        },
        {
          id: "scraper",
          label: "Web Scraper",
          type: "worker",
          description: "Automated background service that scheduled scrapes product data from Tienda ITEC website, extracts product information (name, price, image, specs), and sends the data to the API for storage in the database. Runs on a scheduled interval.",
          tech: ["Playwright, Node.js", "Axios"],
        },
        {
          id: "db",
          label: "Database",
          type: "database",
          description: "Persistent data storage layer holding all product information (name, price, image, category, specs, etc.). Currently using JSON files, but will migrate to a proper relational database for scalability, performance, and transaction support.",
          tech: ["SQL"],
        },
      ],
      edges: [
        { id: "e1", source: "frontend", target: "api", label: "Browse/Order (HTTP)" },
        { id: "e2", source: "api", target: "db", label: "Query/Store (SQL)" },
        { id: "e3", source: "scraper", target: "api", label: "Update Inventory (HTTP)" },
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
          description: "Product CRUD, Catalog editor, Feature configuration, Analytics",
          tech: ["React", "MantineUI", "TypeScript"],
        },
        {
          id: "chatbot",
          label: "Chatbot UI",
          type: "frontend",
          description: "Real-time chat, message app integration ready. Can answer questions about products and features, and provide recommendations based on user queries. Not necessarily Web interface.",
          tech: ["WebSocket"],
        },
        {
          id: "backend",
          label: "Backend / NestJS Server",
          type: "api",
          description: "Persistent layer: authentication, user data, products, features, chat history.",
          tech: ["NestJS", "TypeScript", "JWT", "Prisma", "MySQL"],
        },
        {
          id: "semantic",
          label: "Python Semantic Engine",
          type: "service",
          description: "Intelligence layer: LLM orchestration, semantic search, embeddings.",
          tech: ["Python", "Gemini API", "ElasticSearch", "MySQL"],
        },
        {
          id: "db",
          label: "Database (MySQL)",
          type: "database",
          description: "Persistent data storage: users, products, features, chat history",
          tech: ["MySQL"],
        },
        {
          id: "db-es",
          label: "Database (ElasticSearch)",
          type: "database",
          description: "Persistent data storage for semantic search index",
          tech: ["ElasticSearch"],
        },
      ],
      edges: [
        { id: "e1", source: "admin", target: "backend", label: "Define/Update Products, Features" },
        { id: "e2", source: "backend", target: "db", label: "Store Products, Features, Users" },

        { id: "e3", source: "chatbot", target: "semantic", label: "Chat/Query Messages" },
        { id: "e4", source: "semantic", target: "db", label: "Fetch/Store Chat History, User Context" },
        { id: "e5", source: "semantic", target: "db-es", label: "Semantic Search, Vector Embeddings" },
        { id: "e6", source: "semantic", target: "backend", label: "Fetch Products, Features (optional cache)" },
        { id: "e7", source: "semantic", target: "chatbot", label: "Return Response" },
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
    image: "/discounts-img.jpg",
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
          description: "React Native app that allows the user to browse and discover local store discounts. Also, allows store owners to log in and manage their discounts.",
          tech: ["React Native", "TypeScript"],
        },
        {
          id: "api",
          label: "API / NestJS Server",
          type: "api",
          description: "NestJS backend that serves the mobile app. It exposes REST endpoints for fetching discounts, submitting new promotions, and validating student credentials. It also contains the business logic for filtering discounts based on user location and student status.",
          tech: ["NestJS"],
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
        { id: "e1", source: "mobile", target: "api", label: "Browse/Upload/Validate" },
        { id: "e4", source: "api", target: "db", label: "Query/Store" },
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
