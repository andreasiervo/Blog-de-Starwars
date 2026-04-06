import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Layout = () => {
  return (
    <div className="bg-dark min-vh-100">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};