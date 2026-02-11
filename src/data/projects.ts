import {
  Bot,
  BottleWine,
  Building2,
  Utensils,
  type Icon as IconType,
} from "@lucide/astro";

type Project = {
  title: string;
  description: string;
  slug: string;
  year: number;
  githubUrl?: string;
  url?: string;
  icon: typeof IconType;
  images: string[];
  stack: string[];
};

const IMAGE_BASE_PATH = "/projects";

export const projects: Project[] = [
  {
    title: "Impersonator Chat",
    description:
      "Веб-приложение, позволяющее пользователю общаться с известными личностями, которые 'оживают' с помощью AI. Персонажи ведут диалог в своём стиле, с учётом эпохи, знаний и мировоззрения.",
    slug: "impersonator-chat",
    year: 2025,
    githubUrl: "https://github.com/tiredtiredness/impersonator-chat",
    url: "https://impersonator-chat.vercel.app",
    icon: Bot,
    images: [
      `${IMAGE_BASE_PATH}/impersonator/1.webp`,
      `${IMAGE_BASE_PATH}/impersonator/2.webp`,
    ],
    stack: [
      "Next",
      "Typescript",
      "Tailwind",
      "OpenRouter API",
      "DexieJS",
      "FSD",
    ],
  },
  {
    title: "mayorverse",
    description:
      "Веб-приложение для игроков Cities: Skylines, где можно делиться фото городов и участвовать в создании чужих городов через опросы. Разработал fullstack-приложение с аутентификацией (JWT), REST API и проектированием базы данных.",
    slug: "mayorverse",
    year: 2025,
    githubUrl: "https://github.com/tiredtiredness/mayorverse",
    icon: Building2,
    images: [
      `${IMAGE_BASE_PATH}/mayorverse/1.webp`,
      `${IMAGE_BASE_PATH}/mayorverse/2.webp`,
      `${IMAGE_BASE_PATH}/mayorverse/3.webp`,
      `${IMAGE_BASE_PATH}/mayorverse/4.webp`,
      `${IMAGE_BASE_PATH}/mayorverse/5.webp`,
    ],
    stack: [
      "Next",
      "Typescript",
      "React Query",
      "Tailwind",
      "Nest",
      "PostgreSQL",
      "JWT",
      "Prisma",
    ],
  },
  {
    title: "brut",
    description: "Переделал устаревшую верстку на более актуальную.",
    slug: "brut",
    year: 2024,
    url: "https://brut.spb.ru/",
    icon: BottleWine,
    images: [
      `${IMAGE_BASE_PATH}/brut/1.webp`,
      `${IMAGE_BASE_PATH}/brut/2.webp`,
      `${IMAGE_BASE_PATH}/brut/3.webp`,
    ],
    stack: ["WordPress", "HTML", "CSS"],
  },
  {
    title: "Sixty Four",
    description:
      "Реализовал онлайн-бронирование столов, что упростило процесс резервирования для гостей.",
    slug: "sixty-four",
    year: 2024,
    githubUrl: "https://github.com/tiredtiredness/sixtyfour",
    url: "https://rest64.netlify.app/",
    icon: Utensils,
    images: [
      `${IMAGE_BASE_PATH}/sixty-four/1.webp`,
      `${IMAGE_BASE_PATH}/sixty-four/2.webp`,
      `${IMAGE_BASE_PATH}/sixty-four/3.webp`,
    ],
    stack: ["React", "EmailJs"],
  },
];
