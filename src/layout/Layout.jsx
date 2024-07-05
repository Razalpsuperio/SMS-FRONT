import React, { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <>
      {/* Navbar */}
      <SideBar />

      <section className="home-section">
        <NavBar />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </section>
    </>
    
  );
};

export default Layout;
