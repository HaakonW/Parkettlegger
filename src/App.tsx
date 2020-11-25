import React, { useState } from 'react';
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
      <h1>Parkettlegger 🛠 </h1>
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
      <h3>Disclaimer</h3>
      <p>
        Jeg tar INGEN ansvar for om dette ikke fungerer. Jeg er <b>ikke</b> en
        snekker. Jeg har kun prøvd å lage en løsning for å legge mitt eget gulv
        litt mer effektivt. Jeg har fulgt{' '}
        <a
          target="_blank"
          href="https://www.carlsenfritzoe.no/mediabank/store/89667/614108.pdf"
        >
          denne malen
        </a>
        .
      </p>
      <p>
        Hvis du har tilbakemeldinger eller ønsker om mer funksjonallitet, kan du
        sende meg en{' '}
        <a href="mailto:haakonwinther@gmail.com?subject=Parkettlegger.no">
          epost
        </a>
        .
      </p>
    </div>
  );
}