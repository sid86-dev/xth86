import React from "react";
import MonacoEditor from "../components/MonacoEditor";
import Navbar from "../components/Navbar";

const editor = () => {
  return (
    <>
      <Navbar />
      <MonacoEditor />
    </>
  );
};

export default editor;
