import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Menu from './Menu';

describe('Menu component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<Menu />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
