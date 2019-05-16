import React from 'react'
import renderer from 'react-test-renderer'
import { FjCard } from './Card'
import 'jest-styled-components'

test('Card component', () => {
  const tree = renderer.create(<FjCard>Test</FjCard>).toJSON()
  expect(tree).toMatchSnapshot()
})
