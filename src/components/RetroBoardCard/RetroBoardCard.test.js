import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import TokenService from '../../services/token-service';
import RetroBoardCard from './RetroBoardCard';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    boardId: '1',
  }),
}));

describe('RetroBoardCard component', () => {
  const deleteCard = jest.fn();
  const testProps = {
    id: 1,
    boardOwner: true,
    category: '1',
    headline: 'This is a test headline',
    text: 'Here is some test text',
    user: {
      email: 'jim.halpert@dundermifflin.com',
      first_name: 'Jim',
      last_name: 'Halpert',
      user_id: 1,
    },
    deleteCard,
  };

  describe('Is the card owner', () => {
    beforeEach(() => {
      // Mock token service methods
      const fakeToken = {
        id: 1,
      };
      jest
        .spyOn(TokenService, 'readJwtToken')
        .mockImplementation(() => fakeToken);
      jest.spyOn(TokenService, 'hasAuthToken').mockImplementation(() => true);
    });

    afterEach(() => {
      // Clear mocked service methods
      TokenService.readJwtToken.mockRestore();
      TokenService.hasAuthToken.mockRestore();
    });

    it('renders without error', () => {
      mount(
        <Router>
          <RetroBoardCard {...testProps} />
        </Router>
      );
    });

    it('renders with props', () => {
      const headline = testProps.headline;
      const text = testProps.text;
      const creator = 'Submitted by Jim Halpert';

      const wrapper = mount(
        <Router>
          <RetroBoardCard {...testProps} />
        </Router>
      );

      // Check card column class applied
      expect(wrapper.find('.RetroBoardCard').hasClass('good')).toBeTruthy();

      // Check headline, text, and submitted by populates in the component
      expect(wrapper.find('.RetroBoardCard__headline h4').text()).toEqual(
        headline
      );
      expect(wrapper.find('.RetroBoardCard__text pre').text()).toEqual(text);
      expect(wrapper.find('.RetroBoardCard__creator').text()).toEqual(creator);
    });

    it('renders email if no first or last name', () => {
      const testUser = {
        email: 'jim.halpert@dundermifflin.com',
        first_name: '',
        last_name: '',
        user_id: 1,
      };
      const wrapper = mount(
        <Router>
          <RetroBoardCard {...testProps} user={testUser} />
        </Router>
      );

      expect(wrapper.find('.RetroBoardCard__creator').text()).toEqual(
        `Submitted by ${testUser.email}`
      );
    });

    const nameFields = ['first_name', 'last_name'];

    nameFields.forEach((field, i) => {
      const testUser = {
        email: 'jim.halpert@dundermifflin.com',
        first_name: 'Jim',
        last_name: 'Halpert',
        user_id: 1,
      };

      it(`renders other portion of name when '${field}' is empty`, () => {
        // Set the field empty
        testUser[field] = '';

        const wrapper = mount(
          <Router>
            <RetroBoardCard {...testProps} user={testUser} />
          </Router>
        );

        expect(wrapper.find('.RetroBoardCard__creator').text()).toEqual(
          `Submitted by ${
            i + 1 < nameFields.length ? testUser.last_name : testUser.first_name
          }`
        );
      });
    });

    it('renders without headline and menu', () => {
      const wrapper = mount(
        <Router>
          <RetroBoardCard {...testProps} headline='' />
        </Router>
      );

      expect(wrapper.exists('.RetroBoardCard__headline')).toBeFalsy();
      expect(wrapper.exists('.RetroBoardCard__control')).toBeTruthy();
    });

    it('renders edit and delete as owner of the board and the card', () => {
      const wrapper = mount(
        <Router>
          <RetroBoardCard {...testProps} />
        </Router>
      );

      expect(wrapper.exists('.RetroBoardCard__control')).toBeTruthy();
      expect(wrapper.exists('.RetroBoardCard__controlEdit')).toBeTruthy();
      expect(
        wrapper.find('.RetroBoardCard__controlDelete').exists()
      ).toBeTruthy();
    });

    it('renders edit and delete as owner of the card but not board', () => {
      const wrapper = mount(
        <Router>
          <RetroBoardCard {...testProps} boardOwner={false} />
        </Router>
      );

      expect(wrapper.exists('.RetroBoardCard__control')).toBeTruthy();
      expect(wrapper.exists('.RetroBoardCard__controlEdit')).toBeTruthy();
      expect(
        wrapper.find('.RetroBoardCard__controlDelete').exists()
      ).toBeTruthy();
    });
  });

  describe('Is not the card owner', () => {
    beforeEach(() => {
      // Mock token service methods
      const fakeToken = {
        id: 31,
      };
      jest
        .spyOn(TokenService, 'readJwtToken')
        .mockImplementation(() => fakeToken);
      jest.spyOn(TokenService, 'hasAuthToken').mockImplementation(() => true);
    });

    afterEach(() => {
      // Clear mocked service methods
      TokenService.readJwtToken.mockRestore();
      TokenService.hasAuthToken.mockRestore();
    });

    it('renders menu and delete only as owner of the board, but not the card', () => {
      const wrapper = mount(
        <Router>
          <RetroBoardCard {...testProps} />
        </Router>
      );

      expect(wrapper.exists('.RetroBoardCard__control')).toBeTruthy();
      expect(wrapper.exists('.RetroBoardCard__controlEdit')).toBeFalsy();
      expect(
        wrapper.find('.RetroBoardCard__controlDelete').exists()
      ).toBeTruthy();
    });

    it('renders without menu when not owner of card and board', () => {
      const wrapper = mount(
        <Router>
          <RetroBoardCard {...testProps} boardOwner={false} />
        </Router>
      );

      expect(wrapper.exists('.RetroBoardCard__control')).toBeFalsy();
      expect(wrapper.exists('.RetroBoardCard__controlEdit')).toBeFalsy();
      expect(
        wrapper.find('.RetroBoardCard__controlDelete').exists()
      ).toBeFalsy();
    });

    it('renders without headline and no menu when not owner of board or card', () => {
      const wrapper = mount(
        <Router>
          <RetroBoardCard {...testProps} boardOwner={false} headline='' />
        </Router>
      );

      expect(wrapper.exists('.RetroBoardCard__headline')).toBeFalsy();
      expect(wrapper.exists('.RetroBoardCard__control')).toBeFalsy();
    });
  });
});
