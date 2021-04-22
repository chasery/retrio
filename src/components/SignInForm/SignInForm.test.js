import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SignInForm from './SignInForm';

describe('SignInForm component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<SignInForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
