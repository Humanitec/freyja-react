import React from 'react'
import { theme } from 'theme'
import styled, { css } from 'styled-components'
import { rem } from 'polished'

const NavBarWrapper = styled.div`
  display: flex;
  max-width: ${rem(220)};
  width: ${rem(220)};
  height: 100%;
  background-color: ${theme.base};
  min-height: calc(100vh - ${rem(60)});
  transition: max-width 0.3s ease-in-out;
  margin-top: ${rem(-60)};
  padding-top: ${rem(60)};

  .nav-bar {
    &__container {
      display: flex;
      margin: 0 ${rem(10)};
      flex-flow: column nowrap;
      width: ${rem(200)};
      height: calc(100vh - ${rem(60)});
      padding-bottom: ${rem(16)};
      box-sizing: border-box;
      transition: all 0.3s ease-in-out;
    }
    &__elements {
      flex: 3;
    }
  }

  ${props => props.hidden && css`
    max-width: 0;
    overflow: hidden;
    margin-right: ${rem(40)};
  `}
`
const NavItem = styled.div`
  padding: ${rem(8)};
  cursor: pointer;
  ${props => props.active && css`
    background-color: ${theme.primaryOverlay};
  `}
`

const listItems = [
  {label: 'Button', value: 'button'},
  {label: 'Card', value: 'card'},
  {label: 'Content Switcher', value: 'content-switcher'},
  {label: 'Inline Editor', value: 'inline-editor'},
  {label: 'Input Field', value: 'input-field'},
  {label: 'Menu', value: 'menu'},
  {label: 'Table', value: 'table'},
]

/**
 * Component for the side navigation.
 */
function NavBar({page, setPage}) {
  const items = [];
  for (const item of listItems) {
    items.push(<NavItem
      key={item.value}
      id={item.value}
      active={page === item.value}
      onClick={(e) => {setPage(item.value); console.log(e.target.value)}}>{item.label}</NavItem>);
  }
  
  return (
    <NavBarWrapper>
      <div className="nav-bar__container">
        <div className="nav-bar__elements">
          {items}
        </div>
      </div>
    </NavBarWrapper>
  )
}

export default NavBar;