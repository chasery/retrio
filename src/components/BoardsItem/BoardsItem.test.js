import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BoardsItem from './BoardsItem';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    id: '',
  }),
}));

describe('BoardsItem component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<BoardsItem />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
