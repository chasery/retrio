import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BoardsList from './BoardsList';

describe('BoardsList component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<BoardsList />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
