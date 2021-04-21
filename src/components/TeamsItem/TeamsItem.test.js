import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TeamsItem from './TeamsItem';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    id: '',
  }),
}));

describe('TeamsItem component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<TeamsItem />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
