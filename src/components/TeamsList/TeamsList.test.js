import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TeamsList from './TeamsList';

describe('TeamsList component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<TeamsList />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
