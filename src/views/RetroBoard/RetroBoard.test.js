import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RetroBoard from './RetroBoard';

describe('RetroBoard component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<RetroBoard />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
