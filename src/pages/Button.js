import React from 'react';
import { FjButton } from 'freyja/Button';
import Highlight from 'react-highlight';
import { createTheme } from 'theme'
import { ThemeProvider } from "styled-components";

const themeColors = {
    primary: '#1ddd28',
    danger: '#aa0094',
};


function ButtonPage() {
  return (
    <div className="page-content">
      <h3>Button</h3>
      <h4>Variants</h4>
      <FjButton>Primary</FjButton>
      <FjButton variant="secondary">Secondary</FjButton>
      <FjButton variant="danger">Danger</FjButton>

        <ThemeProvider theme={createTheme(themeColors)}  >
            <div>
                <div>
                    <FjButton>themed primary</FjButton>
                </div>
                <div>
                    <FjButton variant="danger">Themed Danger</FjButton>
                </div>
            </div>
        </ThemeProvider>
      <Highlight language="javascript">
{
`<FjButton>Primary</FjButton>
<FjButton variant="secondary">Secondary</FjButton>
<FjButton variant="danger">Danger</FjButton>

you can also use themeProvider to pass your own theme to button.
<ThemeProvider theme={themeColors}  >
    <div>
        <FjButton>themed primary</FjButton>
        <FjButton variant="danger">Themed Danger</FjButton>
    </div>
</ThemeProvider>`
}
      </Highlight>
      <h4>Sizes</h4>
      <FjButton size="large">Large</FjButton>
      <FjButton>Default</FjButton>
      <FjButton size="small">Small</FjButton>
      <FjButton size="micro">Micro</FjButton>
      <Highlight language="javascript">
{
`<FjButton size="large">Large</FjButton>
<FjButton>Default</FjButton>
<FjButton size="small">Small</FjButton>
<FjButton size="micro">Micro</FjButton>`
}
      </Highlight>
    </div>
  )
}

export default ButtonPage;