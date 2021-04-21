import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BoardThumbnail from './BoardThumbnail';

describe('BoardThumbnail component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<BoardThumbnail />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
