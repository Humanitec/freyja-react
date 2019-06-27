import React from 'react';
import { FjCard } from 'freyja/Card';
import Highlight from 'react-highlight';
import {createTheme} from "theme";
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
      <FjCard
        content="This is the card body!">
        This is the card header!
      </FjCard>
        <ThemeProvider theme={createTheme(themeColors)}  >
            <FjCard
                content="This is the card body!">
                This is the card header!
            </FjCard>
        </ThemeProvider>
      <Highlight language="javascript">
{
`<FjCard
  content="This is the card body!">
  This is the card header!
</FjCard>`
}
      </Highlight>
    </div>
  )
}

export default CardPage;