import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SignUpForm from './SignUpForm';

describe('SignUpForm component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<SignUpForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
