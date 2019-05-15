import React from 'react'
import styled from 'styled-components'
import theme from 'theme'
import { rem } from 'polished'

const FjInputFieldWrapper = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;

  .input-field {
    margin-bottom: ${rem(8)};
    display: flex;
    flex-direction: column;
  
    &__label {
      font-size: ${rem(12)};
      color: ${theme.grayDarkest};
    }

    &__input {
      margin-top: ${rem(4)};
      border: ${rem(1)} solid ${theme.lightGray};
      border-radius: ${rem(4)};
      height: ${rem(40)};
      font-size: ${rem(15)};
      box-sizing: border-box;
      padding: ${rem(8)} ${rem(12)};
      transition: all 0.2s linear;
      outline: none;

      &:focus {
        border-color: ${theme.primary};
      }
    }

    &__spacer {
      min-height: ${rem(16)};
      display: flex;
    }

    &__error {
      color: ${theme.danger};
      line-height: ${rem(12)};
      font-size: ${rem(10)};
      padding: ${rem(2)} 0;
    }
  }
`

function FjInputField({id, type, label, value, placeholder, onChange, error, required}) {
  return (
    <FjInputFieldWrapper>
      <div className="input-field">
        <label
          className="input-field__label"
          htmlFor={id}>
          {label}{required && '*'}
        </label>
        <input
          className="input-field__input"
          name={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange} />
        <div className="input-field__spacer">
          <small className="input-field__error">{error}</small>
        </div>
      </div>
    </FjInputFieldWrapper>
  )
}

export default FjInputField;
