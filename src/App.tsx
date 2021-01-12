import React, { useState } from 'react';
import { Disclaimer } from './Components/Disclaimer';
import { Feedback } from './Components/Feedback';
import { InputField } from './Fields';
import LayOutFloor from './LayOutFloor';
import NonValidPlankControl from './NonValidPlankControl';
import './styles.css';
import { getFloorData, WALL_SPACE } from './utils';

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
    <div className="App">
      <h1>Hvordan legger parkettgulv?</h1>
      <p>
        Her er en kalkulator som regner ut hvordan du skal legge parkettgulv.
        Den følger en oppskrift gitt av{' '}
        <a
          target="_blank"
          rel="noopener"
          href="https://www.bjelin.se/shop/h%C3%A4rdat-tr%C3%A4/27124-h-rdad-ek-bosarp-v2"
        >
          Bjelin
        </a>{' '}
        og har kun blitt testet til egent bruk.
      </p>
      <h2>Kalkulator</h2>
      <div className="Inputs">
        <InputField
          label="Gulvbredde"
          name="fullWidthFloor"
          value={fullWidthFloor}
          handleChange={setFullWidth}
        />

        <InputField
          label="Bordbredde (mm)"
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
      {/*<Table floorData={floorData} />*/}
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
      <Feedback />
    </div>
  );
}
