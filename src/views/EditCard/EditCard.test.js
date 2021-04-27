import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import EditCard from './EditCard';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    boardId: '800f3047-0054-4146-affsb7a-e06bf86f0868',
    cardId: '238671c5-eeb3-4asdfafdc8-a5a4-f39fda7de8990e',
  }),
}));

describe('EditCard component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<EditCard />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
