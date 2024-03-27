import { useState } from "react";
import { Nav } from "../ui/nav";

type Props = {};

import { ChevronLeft } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { getNavItems } from "./navItems";

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isCollapsed1, setIsCollapsed1] = useState(false);

  const { data: session } = useSession();

  function toggleSidebar() {
    setIsCollapsed1(!isCollapsed1);
    if (!isCollapsed1) {
      setTimeout(() => {
        setIsCollapsed(!isCollapsed);
      }, 1000);
    } else {
      setIsCollapsed(!isCollapsed);
    }
    // setTimeout(() => {
    //   setIsCollapsed(!isCollapsed);
    // }, 1000);
  }

  return (
    <div
      className={cn(
        "relative max-w-[17%] border-r-2 border-black px-3  pb-10 pt-4 transition-all duration-1000 ease-in-out ",
        !isCollapsed1 ? "w-full" : "w-20"
      )}
    >
      <div
        className={cn(
          "absolute right-[-20px]  top-7 z-40 transition-all duration-500 ease-in-out",
          isCollapsed1 ? "rotate-180" : "rotate-0"
        )}
      >
        <Button
          onClick={toggleSidebar}
          variant="secondary"
          className=" rounded-full p-2 hover:bg-black hover:text-white"
        >
          <ChevronLeft />
        </Button>
      </div>
      <div className="flex items-center  w-full ">
        <img src="/1.png" alt="logo" className="w-15 h-15" />
        {!isCollapsed && (
          <p className="text-md font-bold px-3 leading-7"></p>
        )}
      </div>
      <Nav
        isCollapsed={isCollapsed}
        links={getNavItems(session?.user?.role || "USER")}
      />
    </div>
  );
}

