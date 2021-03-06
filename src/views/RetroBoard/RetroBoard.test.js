import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RetroBoard from './RetroBoard';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    boardId: '800f3047-0054-4146-affsb7a-e06bf86f0868',
  }),
}));

describe('RetroBoard component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<RetroBoard />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
