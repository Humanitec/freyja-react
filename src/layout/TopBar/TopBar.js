import React from 'react'
import { theme } from 'theme'
import styled from 'styled-components'
import { rem } from 'polished'
import SVGInline from 'react-svg-inline'
import logo from '../../assets/freyja.svg'

const topBarHeight = rem(80);

const TopBarWrapper = styled.div`
  height: ${topBarHeight};
  max-height: ${topBarHeight};
  display: flex;
  background-color: ${theme.baseLighter};
  border-bottom: ${rem(1)} solid ${theme.baseDarker};
  transition: all linear 0.3s;
  z-index: 3;
  align-items: center;
  padding: 0 ${rem(24)};
`

/**
 * Component for the top bar header.
 */
function TopBar() {
  return (
    <TopBarWrapper>
      <SVGInline svg={logo} height="50%" width="50%" />
    </TopBarWrapper>
  )
}

export default TopBar;