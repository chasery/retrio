import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import EditTeam from './EditTeam';

describe('EditTeam component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<EditTeam />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
