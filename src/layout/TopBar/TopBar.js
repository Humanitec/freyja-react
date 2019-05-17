import React from 'react'
import { theme } from 'theme'
import styled from 'styled-components'
import { rem } from 'polished'

const topBarHeight = rem(60);

const TopBarWrapper = styled.div`
  height: ${topBarHeight};
  max-height: ${topBarHeight};
  display: flex;
  background-color: ${theme.base};
  transition: all linear 0.3s;
  z-index: 3;
  align-items: center;
  
  h1 {
    margin: 0 ${rem(24)};
  }
`

/**
 * Component for the top bar header.
 */
function TopBar() {
  return (
    <TopBarWrapper>
      <h1>Freyja React</h1>
    </TopBarWrapper>
  )
}

export default TopBar;