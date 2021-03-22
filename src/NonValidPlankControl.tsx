import React from 'react';
import { WALL_SPACE } from './utils';

type Props = {
  wholePlanks: number;
  validPlank: boolean;
  leftOverPlank: number;
  plankWidth: number;
  slicedRow: number;
};
const NonValidPlankControl = ({
  wholePlanks,
  plankWidth,
  leftOverPlank,
  validPlank,
  slicedRow,
}: Props) => {
  return (
    <article>
      <h2>Resultat:</h2>
      {validPlank ? (
        <div>
          <p>
            <b>{wholePlanks} hele bord</b> av {wholePlanks * plankWidth}mm{' '}
            <br />
            <b>1 kappet bord</b> av {(leftOverPlank * plankWidth).toFixed(1)}mm
            <br />
            <b>Avstand til veggen på hver side: </b> {WALL_SPACE}mm
            <br />
            <b>Kontroll:</b>{' '}
            {(
              wholePlanks * plankWidth +
              leftOverPlank * plankWidth +
              WALL_SPACE
            ).toFixed(1)}
          </p>
        </div>
      ) : (
        <div>
          <p>
            <b>{wholePlanks - 1} hele bord</b> av{' '}
            {(wholePlanks - 1) * plankWidth}mm
            <br />
            <b>2 kappede bord på {slicedRow.toFixed(1)}mm </b>
            <br />
            <b>Kontroll</b> {(wholePlanks - 1) * plankWidth + slicedRow * 2}
            <br />
            <br />
            <br />
            Kapp den første og siste raden til samme bredde: <br />
            {leftOverPlank + 1}*{plankWidth}/2 = {slicedRow}mm <br />
            {wholePlanks - 1} bord + 2 kappede bord: <br />
            {wholePlanks - 1}*{plankWidth}
            mm + 2*{slicedRow} ={' '}
          </p>
        </div>
      )}
    </article>
  );
};

export default NonValidPlankControl;
