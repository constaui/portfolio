import {
  Wrench,
  LayoutDashboard,
  Palette,
  Database,
  type Icon as IconType,
} from "@lucide/astro";

type Skill = {
  title: string;
  icon: typeof IconType;
  list: string[];
};

export const skills: Skill[] = [
  {
    title: "Frontend",
    icon: LayoutDashboard,
    list: ["TypeScript", "React", "Next", "React Query", "Redux", "Zustand"],
  },
  { title: "Backend", icon: Wrench, list: ["Express", "Nest"] },
  { title: "Styles", icon: Palette, list: ["SCSS", "Tailwind"] },
  { title: "Database", icon: Database, list: ["Prisma", "PostgreSQL"] },
] as const;
