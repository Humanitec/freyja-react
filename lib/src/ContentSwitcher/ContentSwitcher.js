import React from 'react'
import styled, { css } from 'styled-components'
import { rem } from 'polished'
import { theme } from '../../theme'


const Wrapper = styled.div([({ theme, ...rest }) => css`
  margin: ${rem(2)} 0;
`]);

const ContentSwitcher = styled.div([({ theme, ...rest }) => css`
  display: flex;
  margin: ${rem(2)} 0;
  align-items: flex-start;
`]);

const OptionButton = styled.button([({ theme, ...rest }) => css`
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
  white-space: no-wrap;

  ${({ theme, active }) => active && css`background-color: ${theme.primaryOverlay};`}

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
      
  ${({ size }) => size === 'large' && css`
    height: ${rem(48)};
    font-size: ${rem(16)};
    padding: 0 ${rem(16)};
  `}

  ${({ size }) => size === 'small' && css`
    height: ${rem(32)};
    font-size: ${rem(12)};
    padding: 0 ${rem(10)};
  `}

  ${({ size }) => size === 'micro' && css`
    height: ${rem(24)};
    font-size: ${rem(10)};
    padding: 0 ${rem(8)};
  `}
`]);

Wrapper.defaultProps = {
  theme
};

ContentSwitcher.defaultProps = {
  theme
};

OptionButton.defaultProps = {
  theme
};

export function FjContentSwitcher({options, active, size, disabled = false, allowMultiple = false, buttonsPerRow, requireOne = true}) {
  const buttons = [];
  const elements = [];
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

  /**
   * Returns an option button element
   * @param {*} option the option label and value
   */
  const buttonElement = (option) => {
    return <OptionButton
      size={size}
      id={option.value}
      key={option.value}
      disabled={disabled}
      active={checkIfActive(option.value)}
      onClick={() => setActive(option.value)}>
      {option.label}
    </OptionButton>;
  }

  options.forEach(option => options && buttons.push(buttonElement(option)));
  
  if (buttonsPerRow) {
    while (buttons.length > 0) {
      elements.push(<ContentSwitcher key={`switcher-${Math.random().toString(36).substring(7)}`}>{buttons.splice(0, buttonsPerRow)}</ContentSwitcher>);
    }
  } else {
    elements.push(<ContentSwitcher key={`switcher-${Math.random().toString(36).substring(7)}`}>{buttons}</ContentSwitcher>);
  }

  return <Wrapper>{elements}</Wrapper>;
}
