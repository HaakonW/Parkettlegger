import React from "react";
import { WALL_SPACE } from "./utils";

type Props = {
  wholePlanks: number;
  validPlank: boolean;
  leftOverPlank: number;
  plankWidth: number;
  slicedRow: number;
};

const LayOutFloor = ({
  wholePlanks,
  plankWidth,
  leftOverPlank,
  validPlank,
  slicedRow
}: Props) => {
  const floor = [];
  let i = 0;
  while (i < Math.floor(wholePlanks)) {
    floor.push(plankWidth);
    i++;
  }
  if (validPlank) {
    floor.unshift(leftOverPlank * plankWidth);
  }

  if (!validPlank) {
    floor.pop();
    floor.push(slicedRow);
    floor.unshift(slicedRow);
  }

  return (
    <div
      style={{
        border: "solid black 1px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px",
        margin: "0"
      }}
    >
      <span style={{ textAlign: "center", padding: "2px" }}>
        {WALL_SPACE / 2} mm
      </span>
      {floor.map((item, i) => (
        <p
          key={i}
          style={{
            borderTop: "solid black 1px",
            textAlign: "center",
            padding: "4px",
            backgroundColor: "#e8e8e8",
            margin: 0,
            height:
              item === plankWidth ? "100%" : `${(item / plankWidth) * 100}%`
          }}
        >
          {item.toFixed(0)} mm
        </p>
      ))}
      <span
        style={{
          padding: "2px",
          textAlign: "center",
          borderTop: "solid 1px black"
        }}
      >
        {WALL_SPACE / 2} mm
      </span>
    </div>
  );
};

export default LayOutFloor;
