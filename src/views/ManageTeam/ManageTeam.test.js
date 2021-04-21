import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Teams from './Teams';

describe('Teams component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<Teams />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
