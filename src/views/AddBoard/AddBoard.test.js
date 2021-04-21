import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddBoard from './AddBoard';

describe('AddBoard component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<AddBoard />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
