import React, { useState } from 'react';
import { FjButton } from 'freyja/Button';
import { FjMenu } from 'freyja/Menu';
import Highlight from 'react-highlight';

function MenuPage() {
  const [menuOpened, toggleMenu] = useState(false);
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];
  return (
    <section>
    <h3>Menu</h3>
    <FjMenu
      xPosition="right"
      yPosition="center"
      open={menuOpened}
      setOpen={toggleMenu}
      menuItems={options}>
      <FjButton secondary onClick={() => toggleMenu(!menuOpened)}>Toggle menu</FjButton>
    </FjMenu>
    <Highlight language="javascript">
{`
<FjMenu
  xPosition="right"
  yPosition="center"
  open={menuOpened}
  setOpen={toggleMenu}
  menuItems={options}>
  <FjButton secondary onClick={() => toggleMenu(!menuOpened)}>Toggle menu</FjButton>
</FjMenu>
`}
    </Highlight>
  </section>
  )
}

export default MenuPage;