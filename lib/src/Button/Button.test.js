import React from 'react'
import renderer from 'react-test-renderer'
import { FjButton }  from './Button.js'
import { theme } from 'theme'
import 'jest-styled-components'

test('Primary Button component', () => {
  const tree = renderer.create(<FjButton>Test</FjButton>).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('color', theme.white)
  expect(tree).toHaveStyleRule('background-color', theme.primary)
})

test('Secondary Button component', () => {
  const tree = renderer.create(<FjButton variant="secondary">Test</FjButton>).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('color', theme.primary)
  expect(tree).toHaveStyleRule('background-color', theme.white)
})

test('Upload Button component', () => {
  const tree = renderer.create(<FjButton size="small" upload>Test</FjButton>).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('position', 'relative')
})