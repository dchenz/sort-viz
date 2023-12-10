import React, { useState } from "react";
import CodeEditor from "./CodeEditor";

type FunctionEditorProps = {
  execute: (code: string) => void;
  starterCode: string;
  preamble: string;
  postamble: string;
};

const FunctionEditor: React.FC<FunctionEditorProps> = ({
  execute,
  starterCode,
  preamble,
  postamble,
}) => {
  const [body, setBody] = useState(starterCode);
  return (
    <div>
      <CodeEditor code={preamble} readOnly={true} onChange={() => undefined} />
      <CodeEditor code={body} onChange={setBody} />
      <CodeEditor code={postamble} readOnly={true} onChange={() => undefined} />
      <button onClick={() => execute(body)}>Run</button>
    </div>
  );
};

export default FunctionEditor;
