"use client";

import AppSidebar from "@/components/Sidebar";
import { SidebarProvider, SidebarInset, useSidebar } from "@/components/ui/sidebar";
import useAuth from "@/hooks/useAuth";
import { FiMenu } from "react-icons/fi";

function Topbar() {
  const { toggleSidebar } = useSidebar();
  return (
  <div>Yest</div>
  );
}

export default function DashboardLayout({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return null;

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">

        <AppSidebar />

        <SidebarInset className="flex-1 flex flex-col">
          <Topbar />

          <main className="p-6">{children}</main>
        </SidebarInset>

      </div>
    </SidebarProvider>
  );
}
