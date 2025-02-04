import React from "react";
import UploadFile from "./UploadFile";
import FlexTable from "./FlexTable";
import NavigationBar from "./NavigationBar";
import Toolbar from "./Toolbar";

const MainContent = () => (
  <>
    <div className="w-full h-full border border-stone-500 order-1 md:order-2 flex flex-col items-center">
      <NavigationBar />
      <Toolbar />
      <FlexTable />
    </div>
  </>
);

export default MainContent;
