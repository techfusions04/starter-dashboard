"use client";

import {
  BookOpen,
  ChevronRight,
  FolderIcon,
  Frame,
  IndianRupee,
  LayoutDashboard,
  Map,
  PieChart,
  Settings2,
  SquareTerminal
} from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
// import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
// import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/shadcnui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./shadcnui/collapsible";
import { Button } from "./shadcnui/button";
// import Testnav from "./testnav";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      title: "Dash Board",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Payment",
      url: "#",
      icon: IndianRupee,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        // {
        //   title: "Tutorials",
        //   url: "#",
        // },
        // {
        //   title: "Changelog",
        //   url: "#",
        // },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        // {
        //   title: "Team",
        //   url: "#",
        // },
        // {
        //   title: "Billing",
        //   url: "#",
        // },
        // {
        //   title: "Limits",
        //   url: "#",
        // },
      ],
    },
  ],
  // projects: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="icon"
      {...props}>
      <SidebarHeader>
        <Link href="/">
          {/* <div className="grid place-items-center justify-center">
            <Image
              src="/emi.png"
              alt="Emi Management Logo"
              width={80}
              height={80}

            />
          </div> */}

          {/* <div className="flex flex-col place-items-center gap-0.5 leading-none">
            <span className="text-foreground place-items-center font-semibold wrap-break-word">
              Emi Management
            </span>
          </div> */}

          <div className="flex flex-col items-center gap-0.5 leading-none text-center">
            <span className="text-foreground font-semibold wrap-break-wordtext-foreground  wrap-break-word  text-center ">
              Logo
            </span>
          </div>
        </Link>
      </SidebarHeader>


      <SidebarContent className="">
        <div className="font-semibold">
          <NavMain items={data.navMain} />
        </div>



        <section className="font-semibold ms-2 mt-14 ">
          <div className="flex items-center ms-2 pb-3">
            <Link href="/" className="flex items-center gap-2">
              <LayoutDashboard />
              <span>Home</span>
            </Link>

          </div>
          <div className="flex items-center ms-2 pb-3">
            <Link href="/" className="flex items-center gap-2">
              <LayoutDashboard />
              <span>Users</span>
            </Link>

          </div>

          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="group w-full justify-start gap-3"
              >

                <FolderIcon />
                <div className="group flex justify-start gap-24"><span>Dashboard</span>
                  <ChevronRight className="transition-transform group-data-[state=open]:rotate-90" /></div>

              </Button>
            </CollapsibleTrigger>

            <CollapsibleContent className="ml-10 space-y-1">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                History
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                Starred
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                Settings
              </Button>
            </CollapsibleContent>
          </Collapsible>


        </section>


      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
