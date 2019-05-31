import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../theme'
import { rem } from 'polished'

const FjToggleWrapper = styled.div`
  display: inline-block;
  
  &:hover,
  &:active,
  &:focus {  
    .toggle-switch__indicator {
      background-color: ${theme.primaryOverlayHover};
      border-color: ${theme.primary};
    }
  }
  
  .toggle-switch {
    &__label {
      align-items: center;
      display: flex;
    }

    &__input {
      display: none;
    }

    &__indicator {
      height: ${rem(40)};
      width: ${rem(64)};
      border-radius: ${rem(24)};
      box-sizing: border-box;
      cursor: pointer;
      position: relative;
      transition: .2s linear;
      z-index: 0;
      background-color: ${theme.white};
      border: ${rem(2)} solid ${theme.lightGray};
    }

    &__slider {
      height: ${rem(36)};
      width: ${rem(36)};
      border-radius: ${rem(24)};
      background-color: ${theme.white};
      box-shadow: 0 ${rem(3)} ${rem(2)} 0 ${theme.shadow};
      left: 0;
      line-height: ${rem(16)};
      position: absolute;
      transition: .2s linear;
      top: 0;
      z-index: 1;
      background-color: ${theme.white};
      border-right: ${rem(1)} solid ${theme.lightGray};

      &:before,
      &:after {
        content: "";
        font-size: ${rem(14)};
        font-weight: normal;
        text-align: center;
      }

      &:before {
        display: none;
      }

      &:after {
        display: block;
      }
    }
    /* checked state */
    &__input:checked + .toggle-switch__indicator {
      background-color: ${theme.primary};
      border-color: ${theme.primary};

      .toggle-switch__slider {
        left: ${rem(24)};
        border-color: ${theme.primary};
        &:before {
          display: block;
        }
        &:after {
          display: none;
        }
        &:hover,
        &:active,
        &:focus {
          background-color: ${theme.primaryOverlayHover};
        }
      }
    }

    &__input[disabled] {
      & + .toggle-switch__indicator {
        cursor: not-allowed;
        opacity: 0.4;
        background-color: ${theme.white};
        border-color: ${theme.lightGray};
      }
    }

    ${props => props.size === 'micro' && css`
      &__indicator {
        height: ${rem(24)};
        width: ${rem(40)};
        border-radius: ${rem(16)};
      }
      &__slider {
        height: ${rem(20)};
        width: ${rem(20)};
        border-radius: ${rem(16)};
      }
      &__input:checked + .toggle-switch__indicator {
        .toggle-switch__slider {
          left: ${rem(16)};
        }
      }
    `}

    ${props => props.size === 'small' && css`
      &__indicator {
        height: ${rem(32)};
        width: ${rem(52)};
        border-radius: ${rem(18)};
      }
      &__slider {
        height: ${rem(28)};
        width: ${rem(28)};
        border-radius: ${rem(18)};
      }
      &__input:checked + .toggle-switch__indicator {
        .toggle-switch__slider {
          left: ${rem(20)};
        }
      }
    `}

    ${props => props.size === 'large' && css`
      &__indicator {
        height: ${rem(48)};
        width: ${rem(76)};
        border-radius: ${rem(28)};
      }
      &__slider {
        height: ${rem(44)};
        width: ${rem(44)};
        border-radius: ${rem(28)};
      }
      &__input:checked + .toggle-switch__indicator {
        .toggle-switch__slider {
          left: ${rem(28)};
        }
      }
    `}
  }
`

export function FjToggle({onChange, size, checked}) {
  if (!checked) {
    checked = useState(false);
  }
  const onToggle = () => {
    checked[1](!checked[0]);
    if (onChange) {
      onChange(checked[0]);
    }
  }

  return (
    <FjToggleWrapper size={size}>
      <label className="toggle-switch__label">
        <input
          className="toggle-switch__input"
          type="checkbox"
          onChange={onToggle}
          checked={checked[0]} />
        <div className="toggle-switch__indicator">
          <div className="toggle-switch__slider"></div>
        </div>
      </label>
    </FjToggleWrapper>
  )
}

