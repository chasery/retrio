import React from 'react';

const RetrioContext = React.createContext({
  loggedInUser: {},
  boards: [],
  cardCategories: {},
  teams: [],
  addBoard: () => {},
  editBoard: () => {},
  deleteBoard: () => {},
  addCard: () => {},
  editCard: () => {},
  deleteCard: () => {},
  addTeam: () => {},
  editTeam: () => {},
  deleteTeam: () => {},
  addTeamMember: () => {},
  removeTeamMember: () => {},
});

export default RetrioContext;
