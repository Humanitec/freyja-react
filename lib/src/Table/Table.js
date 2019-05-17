import React from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../theme'
import { rem } from 'polished'

const FjTableCell = styled.div`
  flex: 1;
  padding: ${rem(10)};
  align-items: center;
  display: flex;

  ${props => props.flex && css`
    flex: ${props.flex};
  `}

  ${props => props.header && css`
    padding: 0 ${rem(10)};
  `}
`;

const FjTableWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  
  .table {
    &__header {
      font-size: ${rem(10)};
      color: ${theme.gray};
      display: flex;
      flex: 1;
      &__row {
        flex: 1;
      }
    }
    &__content {
      display: flex;
      flex-direction: column;
      flex: 1;
      &__row {
        flex: 1;
        margin: ${rem(2)} 0;
        box-shadow: 0 ${rem(2)} ${rem(3)} 0 ${theme.shadow};
        background-color: ${theme.white};
        display: flex;
        border: ${rem(1)} solid ${theme.lightGrayLighter};
        &:hover {
          background-color: ${theme.lightGrayLightest};
        }
      }
    }
  }
`

export function FjTable({columns, rows}) {
  const header = [];
  columns.forEach(col => header.push(<FjTableCell header="true" flex={col.flex}>{ col.label }</FjTableCell>));
  const content = [];
  rows.forEach(row => {
    const rowContent = [];
    columns.forEach(col => rowContent.push(
      <FjTableCell flex={col.flex}>{ col.template ? col.template(row[col.prop]) : row[col.prop] }</FjTableCell>
    ));
    content.push(<div className="table__content__row">{rowContent}</div>);
  });
  return (
    <FjTableWrapper>
      <div className="table__header">
        {header}
      </div>
      <div className="table__content">
        {content}
      </div>
    </FjTableWrapper>
  )
}

