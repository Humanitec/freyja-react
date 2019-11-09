import React from 'react';
import { FjButton } from 'freyja/Button';
import Highlight from 'react-highlight';
import { createTheme } from 'theme'
import { ThemeProvider } from "styled-components";
import { withCustomTheme } from 'freyja/custom-theme/custom-theme'


const themeColors = {
  primary: '#006385',
  danger: '#aa7226',
};

const MyNewThemedButton = withCustomTheme(FjButton, createTheme(themeColors));

function ButtonPage() {
  return (
    <div className="page-content element-wrapper">
      <h3>Button</h3>
      <h4>Variants</h4>
      <FjButton>Primary</FjButton>
      <FjButton variant="secondary">Secondary</FjButton>
      <FjButton variant="danger">Danger</FjButton>

        <ThemeProvider theme={createTheme({
            primary: '#1ddd28',
            danger: '#aa0094',
        })}  >
          <div className="element-wrapper">
            <FjButton>Themed Primary</FjButton>
            <FjButton variant="danger">Themed Danger</FjButton>
          </div>
        </ThemeProvider>

        <MyNewThemedButton>Custom Button</MyNewThemedButton>
      <Highlight language="javascript">
{
`<FjButton>Primary</FjButton>
<FjButton variant="secondary">Secondary</FjButton>
<FjButton variant="danger">Danger</FjButton>

you can also use themeProvider to pass your own theme to button.
<ThemeProvider theme={themeColors}>
  <FjButton>Themed Primary</FjButton>
  <FjButton variant="danger">Themed Danger</FjButton>
</ThemeProvider>


you can also generate button with your own style using our pre-made button

const MyNewThemedButton = withCustomTheme(FjButton, createTheme(themeColors));
<MyNewThemedButton>Custom Button</MyNewThemedButton>

`
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