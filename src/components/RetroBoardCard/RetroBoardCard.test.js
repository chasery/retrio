import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RetroBoardCard from './RetroBoardCard';

describe('RetroBoardCard component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<RetroBoardCard />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
