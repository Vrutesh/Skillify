import Editor from "@monaco-editor/react";
import "./CodingRounds.css";
import { useState } from "react";

const files = {
  "index.html": {
    name: "index.html",
    language: "html",
    value: `<!--Online HTML editor to run code online.-->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`,
  },
  "style.css": {
    name: "style.css",
    language: "css",
    value: `* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
}`,
  },
  "index.js": {
    name: "index.js",
    language: "javascript",
    value: "//Write your Code here",
  },
};

function Editor_R2() {

  const [fileName, setFileName] = useState("index.html");
  const file = files[fileName];

  return (
    <>
      <div className="editor-container">
        <div className="switches">
          <div className="color-tabs">
            <span className="color-tab-1"></span>
            <span className="color-tab-2"></span>
            <span className="color-tab-3"></span>
          </div>

          <div className="language-btns">
            <button
              className="active-tab"
              onClick={() => setFileName("index.html")}
            >
              <i className="fa-brands fa-html5"></i>
            </button>
            <button
              className="active-tab"
              onClick={() => setFileName("style.css")}
            >
              <i className="fa-brands fa-css3-alt"></i>
            </button>
            <button
              className="active-tab"
              onClick={() => setFileName("index.js")}
            >
              <i className="fa-brands fa-square-js"></i>
            </button>
          </div>
        </div>
        <Editor
          height="70vh"
          width="55vw"
          path={file.name}
          defaultLanguage={file.language}
          defaultValue={file.value}
          theme="vs-dark"
          
          
          options={
           {
              fontSize: 14,  
              wordWrap: 'on',
              colorDecorators: true,
              autoIndent: 'full',
              tabCompletion: 'on',
              lineHeight: 24,
              matchBrackets: 'always',
              selectOnLineNumbers: true,
              
            }
          }
        />
      </div>
    </>
  );
}

export default Editor_R2;
