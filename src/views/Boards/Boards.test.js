import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Boards from './Boards';

describe('Boards component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<Boards />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
