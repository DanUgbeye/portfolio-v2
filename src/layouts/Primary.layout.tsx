import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import useNav from "../hooks/useNav.hook";

export default function PrimaryLayout() {
  const { navExpanded, closeNav } = useNav();

  // handles closing open global states
  function handleGlobalClick() {
    navExpanded && closeNav();
  }

  return (
    <main
      className=" bg-gray-200 dark:bg-deep-blue-700 text-gray-800 dark:text-gray-200 flex flex-col min-h-screen h-full tracking-wide overflow-hidden "
      onClick={() => handleGlobalClick()}
    >
      <Navbar />
      <section className="  ">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
}
