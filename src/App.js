import React, { useState } from 'react';

import FjButton from 'freyja/Button/Button';
import FjMenu from 'freyja/Menu/Menu';
import FjCard from './freyja/Card/Card';

function App() {
  const [menuOpened, toggleMenu] = useState(false);
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ];
  return (
    <div className="App" style={{'margin': '3rem'}}>

      <div style={{'display': 'flex', 'flexDirection': 'column', 'alignItems': 'flex-start'}}>
        <h3>Freyja button</h3>
        <FjButton>Primary</FjButton>
        <FjButton secondary>Secondary</FjButton>
        <FjButton small>Small</FjButton>
      </div>

      <div style={{'display': 'flex', 'flexDirection': 'column', 'alignItems': 'flex-start'}}>
        <h3>Freyja menu</h3>
        <FjMenu
          xPosition="right"
          yPosition="center"
          open={menuOpened}
          setOpen={toggleMenu}
          options={options}>
          <FjButton secondary onClick={() => toggleMenu(!menuOpened)}>Toggle menu</FjButton>
        </FjMenu>
      </div>

      <div style={{'display': 'flex', 'flexDirection': 'column', 'alignItems': 'flex-start'}}>
        <h3>Freyja card</h3>
        <FjCard
          content="This is the card body!">
          This is the card header!
        </FjCard>
      </div>

    </div>
  );
}

export default App;
