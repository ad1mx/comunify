import Sidebar from "@/components/app/sidebar";
import React from "react";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <main>
      <Sidebar />
      {children}
    </main>
  );
};

export default AppLayout;
