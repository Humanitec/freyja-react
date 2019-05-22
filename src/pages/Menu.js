import React, { useState } from 'react';
import { FjButton } from 'freyja/Button';
import { FjMenu } from 'freyja/Menu';
import Highlight from 'react-highlight';

function MenuPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="page-content">
      <h3>Menu</h3>
      <FjMenu
        xPosition="right"
        yPosition="center"
        open={open}
        setOpen={setOpen}
        menuItems={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' }
        ]}>
        <FjButton secondary onClick={() => setOpen(!open)}>Toggle menu</FjButton>
      </FjMenu>
      <Highlight language="javascript">
{
`const [open, setOpen] = useState(false);
<FjMenu
  xPosition="right"
  yPosition="center"
  open={open}
  setOpen={setOpen}
  menuItems={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ]}>
  <FjButton secondary onClick={() => setOpen(!open)}>Toggle menu</FjButton>
</FjMenu>`
}
      </Highlight>
    </div>
  )
}

export default MenuPage;