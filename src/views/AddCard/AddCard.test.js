import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddCard from './AddCard';

describe('AddCard component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<AddCard />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
