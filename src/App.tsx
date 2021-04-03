import React, { useState } from 'react';
import { Disclaimer } from './Components/Disclaimer';
import { InputField } from './Fields';
import LayOutFloor from './LayOutFloor';
import NonValidPlankControl from './NonValidPlankControl';
import { getFloorData, WALL_SPACE } from './utils';
import './styles.css';

export default function App() {
  const [fullWidthFloor, setFullWidth] = useState(1000);
  const [plankWidth, setPlankWidth] = useState(283);
  const [minWidth, setminWidth] = useState(100);

  const {
    wholePlanks,
    leftOverPlank,
    lastPlankIsValid,
    slicedRow,
  } = getFloorData({
    fullWidthFloor: fullWidthFloor - WALL_SPACE,
    plankWidth,
    minWidth,
  });
  return (
    <>
      <header>
        <h1>Legge parkettgulv</h1>
        <p>Et verktøy for å regne ut hvordan man kan legge parkettgulv.</p>
      </header>
      <main className="App">
        <div className="Inputs">
          <InputField
            label="Bredde på gulvet"
            name="fullWidthFloor"
            value={fullWidthFloor}
            handleChange={setFullWidth}
          />
          <InputField
            label="Bredde på et parkettbor (mm)"
            name="plankWidth"
            value={plankWidth}
            handleChange={setPlankWidth}
          />
          <InputField
            label="Minste bredde for et kappet bord"
            name="minWidth"
            value={minWidth}
            handleChange={setminWidth}
          />
        </div>
        <NonValidPlankControl
          wholePlanks={wholePlanks}
          plankWidth={plankWidth}
          leftOverPlank={leftOverPlank}
          validPlank={lastPlankIsValid}
          slicedRow={slicedRow}
        />
        <LayOutFloor
          wholePlanks={wholePlanks}
          plankWidth={plankWidth}
          leftOverPlank={leftOverPlank}
          validPlank={lastPlankIsValid}
          slicedRow={slicedRow}
        />
        <Disclaimer />
      </main>
    </>
  );
}
