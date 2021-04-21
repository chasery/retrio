import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Error from './Error';

describe('Error component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<Error />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
