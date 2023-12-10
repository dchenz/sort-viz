import React, { useMemo } from "react";
import { GRAPH_HEIGHT, GRAPH_WIDTH } from "./constants";

type GraphProps = {
  values: number[];
};

const Graph: React.FC<GraphProps> = ({ values }) => {
  const maxValue = useMemo(() => Math.max(...values), [values]);
  return (
    <div
      style={{
        width: `${GRAPH_WIDTH}px`,
        height: `${GRAPH_HEIGHT}px`,
        display: "flex",
        alignItems: "center",
      }}
    >
      {values.map((value, index) => (
        <div
          key={index}
          style={{
            width: `${GRAPH_WIDTH / values.length}px`,
            height: `${(GRAPH_HEIGHT * value) / maxValue}px`,
            backgroundColor: "black",
          }}
        ></div>
      ))}
    </div>
  );
};

export default Graph;
