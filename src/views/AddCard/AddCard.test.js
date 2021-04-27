import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddCard from './AddCard';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    boardId: '800f3047-0054-4146-affsb7a-e06bf86f0868',
  }),
}));

describe('AddCard component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<AddCard />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
