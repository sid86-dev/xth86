import Editor from "@monaco-editor/react";
import React, { useState } from "react";
import { codeSrc } from "../utils/helpers";
import CodeView from "./CodeView";
import View from "./CodeView";

const MonacoEditor = () => {
  function handleEditorChange(value, event) {
    setFiles({ ...files, [fileName]: { ...file, value } });
    console.log(value);
  }

  function handleEditorValidation(markers: any) {
    // model markers
    // markers.forEach((marker: any) =>
    //   console.log("onValidate:", marker.message)
    // );
  }

  const [fileName, setFileName] = useState<string>("index.html");
  const [value, setValue] = useState<string>(codeSrc[fileName].value);
  const [files, setFiles] = useState<any>(codeSrc);

  const srcDoc = `
    <html>
        <body>
        <style>
            ${files["style.css"].value}
        </style>
            <div id="root">
            ${files["index.html"].value}
            </div>
            <script>
                ${files["script.js"].value}
            </script>
        </body>
    </html>
    `;

  const file = codeSrc[fileName];

  console.log(srcDoc);

  return (
    <div className="container-fluid dark editor dark py-5">
      <div className="d-flex mt-5">
        <div className="col-7 h-100">
          <div className="bg-vs-dark my-0 py-0">
            <button
              className={`btn ${
                fileName === "script.js" ? "btn-active" : "btn-dark"
              }`}
              onClick={() => setFileName("script.js")}
            >
              script.js
            </button>
            <button
              className={`btn 
                ${fileName === "style.css" ? "btn-active" : "btn-dark"}
              `}
              onClick={() => setFileName("style.css")}
            >
              style.css
            </button>
            <button
              className={`btn 
                ${fileName === "index.html" ? "btn-active" : "btn-dark"}
                `}
              onClick={() => setFileName("index.html")}
            >
              index.html
            </button>
          </div>
          <Editor
            height="80vh"
            theme="vs-dark"
            path={file.name}
            defaultLanguage={file.language}
            defaultValue={file.value}
            onValidate={handleEditorValidation}
            onChange={handleEditorChange}
            className="h-100 pt-0 mt-0"
          />
        </div>
        <div className="col-5">
          <CodeView srcDoc={srcDoc} />
        </div>
      </div>
    </div>
  );
};

export default MonacoEditor;
