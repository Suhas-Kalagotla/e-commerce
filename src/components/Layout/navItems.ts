import {
  Box,
  FileDown,
  LayoutDashboard,
  LucideIcon,
  Settings,
  UsersRound,
} from "lucide-react";

interface NavItem {
  title: string;
  label?: string | undefined;
  icon: LucideIcon;
  variant: "default" | "ghost";
  href: string;
}

const userItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    variant: "default",
  },
  {
    title: "Products",
    href: "/dashboard/products",
    icon: Box,
    variant: "ghost",
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    variant: "ghost",
  },
];

const adminItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
    variant: "default",
  },
  {
    title: "Products",
    href: "/products",
    icon: Box,
    variant: "ghost",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
    variant: "ghost",
  },
];

export const getNavItems = (role: string) => {
  switch (role) {
    case "USER":
      return userItems;
    case "ADMIN":
      return adminItems;
    default:
      return [];
  }
};
