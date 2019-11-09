import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../theme'
import { rem } from 'polished'

const CardWrapper = styled.div([({ theme, ...rest }) => css`
  display: flex;
  flex: 1;
  margin: ${rem(4)};
  align-items: flex-start;
`]);

const Card = styled.div([({ theme, ...rest }) => css`
  box-shadow: 0 ${rem(2)} ${rem(3)} 0 ${theme.shadow};
  background-color: ${theme.white};
  display: flex;
  flex: 1;
  flex-direction: column;
  box-sizing: border-box;
`]);

const CardContent = styled.div([({ theme, ...rest }) => css`
  padding: ${rem(12)};
  ${props => props.size === 'large' && css`padding: ${rem(20)};`}
  ${props => props.size === 'small' && css`padding: ${rem(8)};`}
`]);

const CardHeader = styled.div([({ theme, ...rest }) => css`
  ${props => props.content && css`
    cursor: pointer;
    &:hover {
      background-color: ${theme.lightGrayLightest};
    }
  `}
`]);

const CardBody = styled.div([({ theme, ...rest }) => css`
  max-height: 0;
  height: auto;
  overflow: hidden;
  transition: max-height linear 2s;
  ${props => props.expanded && css`
    max-height: 100vh;
  `}

  > div {
    border-top: ${rem(1)} solid ${theme.lightGrayLighter};
  }
`]);

CardWrapper.defaultProps = { theme };
Card.defaultProps = { theme };
CardHeader.defaultProps = { theme };
CardBody.defaultProps = { theme };
CardContent.defaultProps = { theme };


export function FjCard({ children, content, size = 'medium' }) {
  const [expanded, setExpanded] = useState(false);

  /** Toggles the card if content exists */
  const toggle = (expanded) => {
    if (content) {
      setExpanded(expanded);
    }
  }

  return (
    <CardWrapper>
      <Card>
        <CardHeader content={content} onClick={() => toggle(!expanded)}>
          <CardContent size={size}>
            {children}
          </CardContent>
        </CardHeader>
        {content && 
          <CardBody expanded={expanded}>
            <CardContent size={size}>
              {content}
            </CardContent>
          </CardBody>
        }
      </Card>
    </CardWrapper>
  )
}

