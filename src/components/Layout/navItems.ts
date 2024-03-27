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
    href: "/",
    icon: LayoutDashboard,
    variant: "default",
  },
  {
    title: "Products",
    href: "/book-order",
    icon: Box,
    variant: "ghost",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
    variant: "ghost",
  },
  {
    title: "Record",
    href: "/records",
    icon: FileDown,
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

