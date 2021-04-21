import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ManageTeamList from './ManageTeamList';

describe('ManageTeamList component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<ManageTeamList />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
