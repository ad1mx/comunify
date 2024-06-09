import Sidebar from "@/components/App/Sidebar";
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
