import React from 'react'
import styled, { css } from 'styled-components'
import { rem } from 'polished'
import { theme } from '../../theme'

const FjContentSwitcherWrapper = styled.div`
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
`

export function FjContentSwitcher({options, active, size, disabled = false}) {
  let buttons = [];
  for (let option of options) {
    buttons.push(<button
      id={option.value}
      key={option.value}
      disabled={disabled}
      className={ active[0] === option.value ? 'content-switcher__button content-switcher__button--active' : 'content-switcher__button' }
      onClick={
        () => { if (!disabled) {
            return active[1](option.value)
          }
        }
      }>
      {option.label}
    </button>)
  }

  return (
    <FjContentSwitcherWrapper size={size}>
      {buttons}
    </FjContentSwitcherWrapper>
  )
}
