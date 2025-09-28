
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { LiveChatButton } from '../live-chat/LiveChatButton';
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-blue-100">
      <Navbar />
      <main className="min-h-[calc(100vh-64px-64px)]">
        <Outlet />
        {children}
      </main>
      <LiveChatButton />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
