import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BoardsItemThumb from './BoardsItemThumb';

describe('BoardsItemThumb component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<BoardsItemThumb />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
