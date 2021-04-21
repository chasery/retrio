import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddTeam from './AddTeam';

describe('AddTeam component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<AddTeam />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
