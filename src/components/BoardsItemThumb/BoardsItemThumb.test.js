import React from 'react';
import { shallow } from 'enzyme';
import BoardsItemThumb from './BoardsItemThumb';

describe('BoardsItemThumb component', () => {
  it('renders without error', () => {
    shallow(<BoardsItemThumb />);
  });
});
