import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RetroBoardColumn from './RetroBoardColumn';

describe('RetroBoardColumn component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<RetroBoardColumn />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
