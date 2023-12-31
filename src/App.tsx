import React, { useState } from "react";
import Graph from "./Graph";
import "./styles.css";
import FunctionEditor from "./FunctionEditor";
import { POSTAMBLE, PREAMBLE, STARTER_BUBBLE_SORT } from "./constants";

const AsyncFunction = Object.getPrototypeOf(async () => undefined).constructor;

const initialValues = Array(100)
  .fill(0)
  .map(() => Math.floor(Math.random() * 50));

const App = () => {
  const [values, setValues] = useState(initialValues);

  const setIndex = async (index: number, value: number) => {
    setValues((prevState) => {
      const copy = [...prevState];
      copy[index] = value;
      return copy;
    });
  };

  const execute = async (code: string) => {
    const fn = new AsyncFunction("arr", "setIndex", code);
    const valuesCopy = [...values];
    await fn(valuesCopy, async (index: number, value: number) => {
      valuesCopy[index] = value;
      await setIndex(index, value);
      await new Promise((resolve) => setTimeout(resolve, 10));
    });
  };

  return (
    <div className="App">
      <Graph values={values} />
      <FunctionEditor
        execute={execute}
        preamble={PREAMBLE}
        postamble={POSTAMBLE}
      />
    </div>
  );
};

export default App;
