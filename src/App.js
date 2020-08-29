import React, { useState } from "react";
import LayOutFloor from "./LayOutFloor";
import NonValidPlankControl from "./NonValidPlankControl";
import "./styles.css";

export default function App() {
  const [width, setWidth] = useState(1761);
  const [plankWidth, setPlankWidth] = useState(223);
  const [minWidth, setminWidth] = useState(100);

  const wholePlanks = Math.floor(width / plankWidth);
  const leftOver = ((width / plankWidth - wholePlanks) * 100).toFixed();
  const leftoverPlank = leftOver / 100;
  const validPlank = leftoverPlank * plankWidth > minWidth;
  const slicedRow = parseFloat(
    ((leftoverPlank + 1) * (plankWidth / 2)).toFixed(1)
  );
  const choppedPlanks = parseFloat(
    (wholePlanks - 1 * plankWidth + 2 * slicedRow).toFixed(1)
  );

  const floorData = {
    minWidth,
    choppedPlanks,
    plankWidth,
    wholePlanks,
    leftOver,
    leftoverPlank,
    validPlank,
    slicedRow
  };

  return (
    <div className="App">
      <h1>Parkettlegger</h1>
      <div className="Inputs">
        <label for="width">
          Gulvbredde (Trekk fra 10mm)
          <input
            type="number"
            name="width"
            value={width}
            onChange={({ target }) => setWidth(parseInt(target.value, 10))}
          />
        </label>

        <label for="plankWidth">
          Bordbredde (mm)
          <input
            type="number"
            name="plankWidth"
            value={plankWidth}
            onChange={({ target }) => setPlankWidth(parseInt(target.value, 10))}
          />
        </label>
        <label for="minWidth">
          Minste bredde for et kappet bord:
          <input
            type="number"
            name="minWidth"
            value={minWidth}
            onChange={({ target }) => setminWidth(parseInt(target.value, 10))}
          />
        </label>
      </div>
      {/*<Table floorData={floorData} />*/}
      <NonValidPlankControl floorData={floorData} />
      <LayOutFloor floorData={floorData} />
    </div>
  );
}
