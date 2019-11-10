import React from 'react';
import { FjCard } from 'freyja/Card';
import Highlight from 'react-highlight';
import { createTheme } from "theme";
import { ThemeProvider } from "styled-components";

const themeColors = {
  lightGray: '#aa0094',
  white: '#ff1a29',
  text: '#ffffff'
};

function CardPage() {
  return (
    <div className="page-content">
      <h3>Card</h3>
      <h4>Size</h4>
      <FjCard size="small">
        Small
      </FjCard>
      <FjCard>
        Medium
      </FjCard>
      <FjCard size="large">
        Large
      </FjCard>
      <Highlight language="javascript">
{
`<FjCard size="small">
  Small
</FjCard>
<FjCard>
  Medium
</FjCard>
<FjCard size="large">
  Large
</FjCard>`
}
      </Highlight>

      <h4>Expandable</h4>
      <FjCard
        content="This is the card body!">
        This is the card header!
      </FjCard>
      <Highlight language="javascript">
{
`<FjCard
  content="This is the card body!">
  This is the card header!
</FjCard>`
}
      </Highlight>

      <h4>Themed</h4>
      <ThemeProvider theme={createTheme(themeColors)}>
        <FjCard
          content="This is the card body!">
          This is the card header!
        </FjCard>
      </ThemeProvider>
      <Highlight language="javascript">
{
`<ThemeProvider theme={createTheme(themeColors)}>
  <FjCard
    content="This is the card body!">
    This is the card header!
  </FjCard>
</ThemeProvider>`
}
      </Highlight>
    </div>
  )
}

export default CardPage;