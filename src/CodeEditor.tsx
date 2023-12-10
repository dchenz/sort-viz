import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/themes/prism.css";

type CodeEditorProps = {
  code: string;
  onChange: (code: string) => void;
  readOnly?: boolean;
};

const CodeEditor: React.FC<CodeEditorProps> = ({
  code,
  onChange,
  readOnly,
}) => {
  return (
    <Editor
      className="code-editor"
      highlight={(code) => highlight(code, languages.js, "js")}
      onValueChange={onChange}
      readOnly={readOnly}
      value={code}
    />
  );
};

export default CodeEditor;
