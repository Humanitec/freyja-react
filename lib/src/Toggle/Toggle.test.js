import React from 'react'
import renderer from 'react-test-renderer'
import { FjToggle } from './Toggle'
import 'jest-styled-components'

test('Toggle component', () => {
  const tree = renderer.create(<FjToggle />).toJSON()
  expect(tree).toMatchSnapshot()
})
