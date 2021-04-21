import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ManageTeamItem from './ManageTeamItem';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    id: '',
  }),
}));

describe('ManageTeamItem component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<ManageTeamItem />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
