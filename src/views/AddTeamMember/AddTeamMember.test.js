import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddTeamMember from './AddTeamMember';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    teamId: '0c36af8f-4b3b-4f7ee-9491-c3d6396f1136',
  }),
}));

describe('AddTeamMember component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<AddTeamMember />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
