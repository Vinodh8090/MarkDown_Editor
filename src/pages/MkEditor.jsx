import React from "react";
import Editor from "../components/Editor";
import Preview from "../components/Preview";

export default function MkEditor() {
   return (
      <div className="container">
         <Editor />
         <Preview />
      </div>
   );
}
