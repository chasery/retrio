import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Board from './Board';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    id: '',
  }),
}));

describe('Board component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<Board />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
