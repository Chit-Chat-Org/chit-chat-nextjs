"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../../ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { UserButton, useUser } from "@clerk/nextjs";
import { Building, Play,BotMessageSquare, NotebookPen } from "lucide-react";


interface Props {
  children: React.ReactNode;
}

const SidebarNav = ({ children }: Props) => {
  const { user } = useUser();

  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <IconBrandTabler className="text-gray-200  h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Organization",
      href: "/organization",
      icon: <Building className="text-gray-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Playground",
      href: "/playground",
      icon: <Play className="text-gray-200  h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "ChatbotConfig",
      href: "/chatbotconfig",
      icon: <BotMessageSquare className="text-gray-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Docs",
      href: "/docs",
      icon: <NotebookPen className="text-gray-200 h-5 w-5 flex-shrink-0" />,
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={cn("h-full bg-background border-r border-border")}
       
      >
        <Sidebar open={open} setOpen={setOpen} animate={true}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              {/* <Logo /> */}
              <div className="flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
            <div>
              <SidebarLink
                link={{
                  label: user ? user.fullName : "Undefined",
                  href: "#",
                  icon: <UserButton />,
                }}
              />
            </div>
          </SidebarBody>
        </Sidebar>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
};

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-white py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-white whitespace-pre"
      >
        Acet Labs
      </motion.span>
    </Link>
  );
};

export default SidebarNav;
