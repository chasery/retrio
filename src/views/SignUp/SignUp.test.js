import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SignUp from './SignUp';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/sign-up',
  }),
}));

describe('SignUp component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<SignUp />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
