type LeftoverPlanks = {
  plankWidth: number;
  fullWidthFloor: number;
  minWidth: number;
};

export const WALL_SPACE = 10;

const getAllWholePlanks = (fullwidthOfFloor: number, plankWidth: number) =>
  Math.floor(fullwidthOfFloor / plankWidth);

const getWidthOfSlicedRow = (leftOverPlank: number, plankWidth: number) =>
  parseFloat(((leftOverPlank + 1) * (plankWidth / 2)).toFixed(1));

const getChoppedPlanks = (
  wholePlanks: number,
  plankWidth: number,
  slicedRow: number
) => wholePlanks - 1 * plankWidth + 2 * slicedRow;

export const getFloorData = ({
  plankWidth,
  fullWidthFloor,
  minWidth
}: LeftoverPlanks) => {
  const wholePlanks = getAllWholePlanks(fullWidthFloor, plankWidth);
  const leftOver = (fullWidthFloor / plankWidth - wholePlanks) * 100;
  const leftOverPlank = leftOver / 100;
  const lastPlankIsValid = leftOverPlank * plankWidth > minWidth;
  const slicedRow = getWidthOfSlicedRow(leftOverPlank, plankWidth);
  const choppedPlanks = getChoppedPlanks(wholePlanks, plankWidth, slicedRow);

  return {
    leftOver,
    wholePlanks,
    leftOverPlank,
    lastPlankIsValid,
    slicedRow,
    choppedPlanks
  };
};
