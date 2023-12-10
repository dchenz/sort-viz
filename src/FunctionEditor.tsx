import React, { useState } from "react";
import CodeEditor from "./CodeEditor";
import { STARTER_BLANK, STARTER_BUBBLE_SORT } from "./constants";

type FunctionEditorProps = {
  execute: (code: string) => void;
  preamble: string;
  postamble: string;
};

const FunctionEditor: React.FC<FunctionEditorProps> = ({
  execute,
  preamble,
  postamble,
}) => {
  const [body, setBody] = useState(STARTER_BLANK);
  return (
    <div>
      <span>
        <button onClick={() => setBody(STARTER_BLANK)}>Blank</button>
        <button onClick={() => setBody(STARTER_BUBBLE_SORT)}>
          Bubble sort
        </button>
      </span>
      <CodeEditor code={preamble} readOnly={true} onChange={() => undefined} />
      <CodeEditor code={body} onChange={setBody} />
      <CodeEditor code={postamble} readOnly={true} onChange={() => undefined} />
      <button onClick={() => execute(body)}>Run</button>
    </div>
  );
};

export default FunctionEditor;
