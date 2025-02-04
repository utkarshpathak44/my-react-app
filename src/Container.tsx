import React from "react";
import SideBar from "./SideBar";
import MainContent from "./MainContent";

const Container: React.FC = () => (
  <div className="flex flex-col md:flex-row h-screen">
    <SideBar />
    <MainContent />
  </div>
);

export default Container;
