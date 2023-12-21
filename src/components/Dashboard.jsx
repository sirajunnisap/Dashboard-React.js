import React, { useState } from "react";

import Header from "./Header";
import SideBar from "./SideBar";
import MainSection from "./MainSection";

function Dashboard() {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div className="App">
      <section id="sidebar" className={isActive ? "hide" : null}>
        <a href="#" className="brand">
          <i className="bx bxs-smile"></i>
          <span className="text">AdminHub</span>
        </a>
        <SideBar />
      </section>

      <section id="content">
        <Header toggleclass={toggleClass} />
        <main>
          <MainSection/>
        </main>

        
      </section>
    </div>
  );
}

export default Dashboard;
