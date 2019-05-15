import styled, { css } from 'styled-components'
import theme from 'theme'
import { rem } from 'polished'

const FjButton = styled.button`
  display: inline-flex;
  align-items: center;
  border-radius: ${rem(4)};
  height: ${rem(40)};
  padding: 0 ${rem(12)};
  transition: all 0.2s linear;
  font-weight: 600;
  background-color: ${theme.primary};
  border: ${rem(1)} solid ${theme.primary};
  color: ${theme.white};
  cursor: pointer;
  outline: none;
  margin: ${rem(4)} 0;
  font-size: ${rem(14)};

  img {
    max-height: ${rem(18)};
    max-width: ${rem(18)};
    margin-right: ${rem(4)};
  }

  &:hover {
    background-color: ${theme.primaryDarker};
  }

  &:disabled {
    background-color: ${theme.grayLightest};
    border-color: ${theme.grayLightest};
    color: ${theme.grayDarkest};
    cursor: default;
  }

  ${props => props.variant === 'secondary' && css`
    background: ${theme.white};
    color: ${theme.primary};
    border-color: ${theme.primary};

    &:hover {
      background-color: ${theme.primaryOverlay};
    }
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
