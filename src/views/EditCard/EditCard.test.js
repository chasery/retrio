import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import EditCard from './EditCard';

describe('EditCard component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<EditCard />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
