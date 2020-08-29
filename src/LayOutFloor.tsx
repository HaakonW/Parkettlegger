import React from "react";

type Props = {
  floorData: {
    wholePlanks: number;
    validPlank: boolean;
    leftoverPlank: number;
    plankWidth: number;
    minWidth: number;
    slicedRow: number;
  };
};

const LayOutFloor = ({ floorData }: Props) => {
  const {
    wholePlanks,
    plankWidth,
    leftoverPlank,
    validPlank,
    slicedRow
  } = floorData;

  const floor = [];
  let i = 0;
  while (i < Math.floor(wholePlanks)) {
    floor.push(plankWidth);
    i++;
  }
  if (validPlank) {
    floor.unshift(leftoverPlank * plankWidth);
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
        padding: "0 5px"
      }}
    >
      {floor.map((item) => (
        <p
          style={{
            border: "dotted black 1px",
            textAlign: "center",
            padding: "4px",
            backgroundColor: "beige",
            margin: 0,
            height:
              item === plankWidth ? "100%" : `${(item / plankWidth) * 100}%`
          }}
        >
          {item.toFixed(0)} mm
        </p>
      ))}
    </div>
  );
};

export default LayOutFloor;
