"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaChartPie, FaCreditCard } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import clsx from "clsx";

export default function AppSidebar() {
  const { state, toggleSidebar } = useSidebar();
  const collapsed = state === "collapsed";
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <Sidebar
      collapsible="icon"
      className="transition-all duration-300"
    >
      {/* Header */}
      <SidebarHeader className="flex items-center justify-between px-3">
        {!collapsed && (
          <h1 className="text-lg font-bold text-mainCol">DashTrack</h1>
        )}

        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-200"
        >
          {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
        </button>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="mt-4 space-y-1">
            {/* Overview */}
            <SidebarMenuItem>
              <Link
                href="/dashboard"
                className={clsx(
                  "flex flex-col items-center justify-center gap-1 py-4 rounded-md transition",
                  isActive("/dashboard")
                    ? "bg-mainCol text-white"
                    : "hover:bg-gray-200"
                )}
              >
                <FaHome size={28} />
                {!collapsed && (
                  <span className="text-xs font-medium">Overview</span>
                )}
              </Link>
            </SidebarMenuItem>

            {/* Analytics */}
            <SidebarMenuItem>
              <Link
                href="/dashboard/analytics"
                className={clsx(
                  "flex flex-col items-center justify-center gap-1 py-4 rounded-md transition",
                  isActive("/dashboard/analytics")
                    ? "bg-mainCol text-white"
                    : "hover:bg-gray-200"
                )}
              >
                <FaChartPie size={28} />
                {!collapsed && (
                  <span className="text-xs font-medium">Analytics</span>
                )}
              </Link>
            </SidebarMenuItem>

            {/* Cards */}
            <SidebarMenuItem>
              <Link
                href="/dashboard/cards"
                className={clsx(
                  "flex flex-col items-center justify-center gap-1 py-4 rounded-md transition",
                  isActive("/dashboard/cards")
                    ? "bg-mainCol text-white"
                    : "hover:bg-gray-200"
                )}
              >
                <FaCreditCard size={28} />
                {!collapsed && (
                  <span className="text-xs font-medium">Cards</span>
                )}
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
