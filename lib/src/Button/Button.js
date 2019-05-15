import styled, { css } from 'styled-components'
import { colors } from 'colors'
import { rem } from 'polished'

const FjButton = styled.button`
  display: inline-flex;
  align-items: center;
  border-radius: ${rem(4)};
  height: ${rem(40)};
  padding: 0 ${rem(12)};
  transition: all 0.2s linear;
  font-weight: 600;
  background-color: ${colors.primary};
  border: ${rem(1)} solid ${colors.primary};
  color: ${colors.white};
  cursor: pointer;
  outline: none;
  margin: ${rem(4)} 0;

  img {
    max-height: ${rem(18)};
    max-width: ${rem(18)};
  }

  &:hover {
    background-color: ${colors.primaryDarker};
  }

  &:disabled {
    background-color: ${colors.grayLight};
    border-color: ${colors.grayLight};
    color: ${colors.gray};
    cursor: default;
  }

  ${props => props.secondary && css`
    background: ${colors.white};
    color: ${colors.primary};
    border-color: ${colors.primary};

    &:hover {
      background-color: ${colors.primaryLightest};
    }
  `}

  ${props => props.small && css`
    height: ${rem(32)};
  `}

  ${props => props.upload && css`
    position: relative;

    input {
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      opacity: 0;
    }
  `}
`

export default FjButton;
