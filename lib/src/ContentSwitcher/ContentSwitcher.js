import React from 'react'
import styled, { css } from 'styled-components'
import { rem } from 'polished'
import { theme } from '../../theme'

const style = ({ theme, ...rest }) => css`
  display: flex;
  margin: ${rem(4)} 0;
  align-items: flex-start;

  .content-switcher {
    &__button {
      display: inline-flex;
      align-items: center;
      border-radius: ${rem(4)};
      height: ${rem(40)};
      padding: 0 ${rem(12)};
      transition: all 0.2s linear;
      font-weight: 600;
      background-color: ${theme.white};
      border: ${rem(1)} solid ${theme.primary};
      color: ${theme.primary};
      cursor: pointer;
      outline: none;
      margin: ${rem(4)} 0;
      font-size: ${rem(14)};

      &--active {
        background-color: ${theme.primaryOverlay};
      }

      &:hover {
        background-color: ${theme.primaryOverlayHover};
      }
      
      :disabled {
        background-color: ${theme.lightGrayLighter};
        border-color: ${theme.gray};
        color: ${theme.gray};
        cursor: default;
      }

      &:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left-width: 0;
      }

      &:not(:last-child) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      
      ${props => props.size === 'large' && css`
        height: ${rem(48)};
        font-size: ${rem(16)};
        padding: 0 ${rem(16)};
      `}

      ${props => props.size === 'small' && css`
        height: ${rem(32)};
        font-size: ${rem(12)};
        padding: 0 ${rem(10)};
      `}

      ${props => props.size === 'micro' && css`
        height: ${rem(24)};
        font-size: ${rem(10)};
        padding: 0 ${rem(8)};
      `}
    }
  }
`;

const FjContentSwitcherWrapper = styled.div([style]);
FjContentSwitcherWrapper.defaultProps = {
    theme
};

export function FjContentSwitcher({options, active, size, disabled = false, allowMultiple = false, buttonsPerRow, requireOne = true}) {
  let buttons = [];
  const [activeValue, setActiveValue] = active;

  /** 
   * Checks if the value is active
   */
  const checkIfActive = (value) => {
    return allowMultiple
      ? activeValue && Array.isArray(activeValue) && activeValue.includes(value)
      : activeValue === value;
  }

  /**
   * Sets the active state
   */
  const setActive = (value) => {
    if (!disabled) {
      if (allowMultiple) {
        if (activeValue && Array.isArray(activeValue)) {
          // if the current value is a valid array
          if (checkIfActive(value)) {
            if (activeValue.length > 1 || !requireOne) {
              // if more than one 
              setActiveValue(activeValue.filter(item => item !== value)) // remove the value from the array
            }
          } else {
            setActiveValue(activeValue.concat(value)); // add the value to the array
          }
        } else {
          // set the value to active
          setActiveValue([value]);
        }
      } else {
        checkIfActive(value) && !requireOne
          ? setActiveValue(null) // if requireOne is false allow deselect
          : setActiveValue(value); // otherwise, set the value as active
      }
    }
  }

  for (let option of options) {
    buttons.push(<button
      id={option.value}
      key={option.value}
      disabled={disabled}
      className={ checkIfActive(option.value) ? 'content-switcher__button content-switcher__button--active' : 'content-switcher__button' }
      onClick={() => setActive(option.value)}>
      {option.label}
    </button>)
  }

  return (
    <FjContentSwitcherWrapper size={size}>
      {buttons}
    </FjContentSwitcherWrapper>
  )
}
