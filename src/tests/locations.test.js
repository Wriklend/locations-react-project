import React from 'react';
import renderer from 'react-test-renderer';
import Locations from "../pages/Locations";
/**
 * @jest-environment jsdom
 */

test('renders locations page', () => {
  const component = renderer.create(<Locations />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
