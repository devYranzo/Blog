export type CategoryIcon =
  | "code"
  | "wrench"
  | "monitor"
  | "server"
  | "rocket"
  | "architecture"
  | "tag";

export interface CategoryDefinition {
  icon: CategoryIcon;
  color: string;
}

export const categories = {
  development: {
    icon: "code",
    color: "59, 130, 246",
  },

  tools: {
    icon: "wrench",
    color: "234, 179, 8",
  },

  frontend: {
    icon: "monitor",
    color: "6, 182, 212",
  },

  backend: {
    icon: "server",
    color: "139, 92, 246",
  },

  devops: {
    icon: "rocket",
    color: "16, 185, 129",
  },

  architecture: {
    icon: "architecture",
    color: "244, 63, 94",
  },
} satisfies Record<string, CategoryDefinition>;

export type CategoryKey = keyof typeof categories;

export function getCategory(category: string): CategoryDefinition {
  return (
    categories[category as CategoryKey] ?? {
      icon: "tag",
      color: "107, 114, 128",
    }
  );
}
