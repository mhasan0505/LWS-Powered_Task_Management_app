import React from "react";
import TaskSection from "../Components/TaskSection";
import Footer from "../Footer";
import Header from "../Header";
import HeronSection from "../HeronSection";

export default function Home() {
  return (
    <div className="bg-[#191D26] text-white">
      <Header />
      <HeronSection />
      <TaskSection />
      <Footer />
    </div>
  );
}
