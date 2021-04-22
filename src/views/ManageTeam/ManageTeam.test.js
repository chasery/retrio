import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ManageTeam from './ManageTeam';

describe('ManageTeam component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<ManageTeam />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});