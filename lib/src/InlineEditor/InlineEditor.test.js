import React from 'react'
import renderer from 'react-test-renderer'
import { FjInlineEditor } from './InlineEditor'
import 'jest-styled-components'

test('InlineEditor component', () => {
  const tree = renderer.create(<FjInlineEditor />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('InlineEditor H1 component', () => {
  const tree = renderer.create(<FjInlineEditor tag="h1" />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('InlineEditor H2 component', () => {
  const tree = renderer.create(<FjInlineEditor tag="h2" />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('InlineEditor H3 component', () => {
  const tree = renderer.create(<FjInlineEditor tag="h3" />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('InlineEditor H4 component', () => {
  const tree = renderer.create(<FjInlineEditor tag="h4" />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('InlineEditor labelled component', () => {
  const tree = renderer.create(<FjInlineEditor label="Label" />).toJSON()
  expect(tree).toMatchSnapshot()
})
