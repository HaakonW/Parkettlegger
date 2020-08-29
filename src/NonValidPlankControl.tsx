import React from "react";

type Props = {
  floorData: {
    wholePlanks: number;
    validPlank: boolean;
    leftoverPlank: number;
    plankWidth: number;
    minWidth: number;
    slicedRow: number;
    choppedPlanks: number;
  };
};
const NonValidPlankControl = ({ floorData }: Props) => {
  const {
    wholePlanks,
    plankWidth,
    leftoverPlank,
    validPlank,
    minWidth,
    slicedRow,
    choppedPlanks
  } = floorData;

  return (
    <div>
      <h2>Slik legger du gulvet:</h2>
      {validPlank ? (
        <div>
          <p>
            <b>{wholePlanks} hele bord</b> av {wholePlanks * plankWidth}mm{" "}
            <br />
            <b>1 kappet bord</b> av {(leftoverPlank * plankWidth).toFixed(1)}mm
            <br />
            <b>Kontroll:</b>{" "}
            {(wholePlanks * plankWidth + leftoverPlank * plankWidth).toFixed(1)}
          </p>
        </div>
      ) : (
        <div>
          <p>
            <b>{wholePlanks - 1} hele bord</b> av{" "}
            {(wholePlanks - 1) * plankWidth}mm
            <br />
            <b>2 kappede bord på {slicedRow.toFixed(1)}mm </b>
            <br />
            <b>Kontroll</b> {(wholePlanks - 1) * plankWidth + slicedRow * 2}
            <br />
            <br />
            <br />
            Kapp den første og siste raden til samme bredde: <br />
            {leftoverPlank + 1}*{plankWidth}/2 = {slicedRow}mm <br />
            {wholePlanks - 1} bord + 2 kappede bord: <br />
            {wholePlanks - 1}*{plankWidth}
            mm + 2*{slicedRow} ={" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default NonValidPlankControl;
