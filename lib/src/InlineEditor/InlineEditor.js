import React, { useState, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../theme'
import { rem } from 'polished'

const FjInlineEditorWrapper = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;

  .inline-editor {
    display: flex;
    flex-direction: column;

    ${props => props.labelled && css`
      margin: ${rem(6)} 0;
    `}
  
    &__label {
      font-size: ${rem(10)};
      padding: 0 ${rem(4)};
      color: ${theme.grayDarkest};
    }

    &__input {
      border: ${rem(1)} solid ${theme.lightGray};
      border-radius: ${rem(4)};
      font-size: ${rem(15)};
      box-sizing: border-box;
      padding: ${rem(2)} ${rem(3)};
      transition: all 0.2s linear;
      outline: none;

      &:focus {
        border-color: ${theme.primary};
      }

      &::placeholder {
        color: ${theme.grayLighter};
      }

      ${props => props.tag === 'h1' && css`
        font-size: ${rem(32)};
        font-weight: bold;
      `}

      ${props => props.tag === 'h2' && css`
        font-size: ${rem(24)};
        font-weight: bold;
      `}

      ${props => props.tag === 'h3' && css`
        font-size: ${rem(18.72)};
        font-weight: bold;
      `}

      ${props => props.tag === 'h4' && css`
        font-size: ${rem(16)};
        font-weight: bold;
      `}
    }

    &__text {
      cursor: text;
      padding: ${rem(3)} ${rem(4)};
      
      h1, h2, h3, h4, p {
        margin: 0;
        color: ${theme.text};

        ${props => props.color === 'placeholder' && css`
          color: ${theme.grayLighter};
        `}
      }
      &:hover {
        .inline-editor__icon {
          visibility: visible;
          cursor: pointer;
          font-weight: bold;
        }
      }
    }

    &__icon {
      font-size: 0.85em;
      visibility: hidden;
      margin-left: ${rem(6)};
      color: ${theme.primary};
      transform: scale(-1, 1);
      display: inline-flex;
    }
  }
`

/**
 * Component for inline editing.
 */
export function FjInlineEditor({id, tag, label, value, placeholder, onChange}) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(value);
  const node = useRef();

  useEffect(() => {
    if (editing) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keyup', handleKeyup);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keyup', handleKeyup);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keyup', handleKeyup);
    };
  }, [editing, text]);

  /**
   * Handles the keyup events for enter and escape.
   */
  const handleKeyup = event => {
    switch (event.keyCode) {
      case 13: // Enter pressed
        update(event); // Update the text
        break;
      case 27: // Escape pressed
        setText(value); // Reset the text
        setEditing(false); // Close the input
        break;
      default:
        return;
    }
  }

  /**
   * Handles the click event based on whether it is inside the reference node.
   */
  const handleClickOutside = event => {
    if (node.current.contains(event.target)) {
      return;
    }
    update(event);
  };

  /**
   * Updates the text value.
   */
  const update = event => {
    onChange(text);
    setEditing(false);
  }
  
  let editElement = <span className="inline-editor__icon" onClick={() => setEditing(true)}>&#9998;</span>;
  let tagElement;
  switch (tag) {
    case 'h1':
      tagElement = <h1>{value || placeholder}{editElement}</h1>;
      break;    
    case 'h2':
      tagElement = <h2>{value || placeholder}{editElement}</h2>;
      break;
    case 'h3':
      tagElement = <h3>{value || placeholder}{editElement}</h3>;
      break;
    case 'h4':
      tagElement = <h4>{value || placeholder}{editElement}</h4>;
      break;
    case 'p':
    default:
      tagElement = <p>{value || placeholder}{editElement}</p>;
  }
  const labelled = Boolean(label);
  return (
    <FjInlineEditorWrapper onClick={event => event.stopPropagation()} labelled={labelled} color={value ? 'text' : 'placeholder'} tag={tag}>
      <div className="inline-editor">
        {label && <label className="inline-editor__label">{label}</label>}
        {editing ? (
          <input
            autoFocus
            ref={node}
            className="inline-editor__input"
            name={id}
            type="text"
            placeholder={placeholder}
            value={text}
            onChange={event => setText(event.target.value)} />
        ) : (
          <div onDoubleClick={() => setEditing(true)} className="inline-editor__text">
            {tagElement}
          </div>
        )}
      </div>
    </FjInlineEditorWrapper>
  )
}
