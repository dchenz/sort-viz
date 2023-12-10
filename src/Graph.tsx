import React, { useMemo } from "react";

type GraphProps = {
  values: number[];
};

const width = 1000;
const height = 500;

const Graph: React.FC<GraphProps> = ({ values }) => {
  const maxValue = useMemo(() => Math.max(...values), [values]);
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        display: "flex",
        alignItems: "center",
      }}
    >
      {values.map((value, index) => (
        <div
          key={index}
          style={{
            width: `${width / values.length}px`,
            height: `${(height * value) / maxValue}px`,
            backgroundColor: "black",
          }}
        ></div>
      ))}
    </div>
  );
};

export default Graph;
