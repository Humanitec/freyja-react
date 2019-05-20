import React from 'react'
import ButtonPage from '../../pages/Button'
import CardPage from '../../pages/Card'
import ContentSwitcherPage from '../../pages/ContentSwitcher'
import InlineEditorPage from '../../pages/InlineEditor'
import InputFieldPage from '../../pages/InputField'
import MenuPage from '../../pages/Menu'
import TablePage from '../../pages/Table'
import styled from 'styled-components'
import TopBar from '../TopBar/TopBar'
import NavBar from '../NavBar/NavBar'
import { theme } from 'theme'

const ContainerWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${theme.base};

  .container {
    display: flex;
    flex: 1;

    &__content {
      overflow-y: auto;
    }
  }
`

function Container({ page, setPage }) {
  let item = '';
  switch(page) {
    case 'button':
      item = <ButtonPage />;
      break;
    case 'card':
      item = <CardPage />;
      break;
    case 'content-switcher':
      item = <ContentSwitcherPage />;
      break;
    case 'inline-editor':
      item = <InlineEditorPage />;
      break;
    case 'input-field':
      item = <InputFieldPage />;
      break;
    case 'menu':
      item = <MenuPage />;
      break;
    case 'table':
      item = <TablePage />;
      break;
    default:
      item = <ButtonPage />;
  }
  return (
    <ContainerWrapper>
      <TopBar />
      <div className="container">
        <div className="container__nav">
          <NavBar page={page} setPage={setPage} />
        </div>
        <div className="container__content">
          {item}
        </div>
      </div>
    </ContainerWrapper>
  );
}

export default Container;