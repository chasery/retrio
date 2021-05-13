import React, { useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import faker from 'faker';
import RetrioContext from '../../context/retrio-context';

import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import IdleService from '../../services/idle-service';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import PrivateRoute from '../Utils/PrivateRoute';

// View Components
import Landing from '../../views/Landing/Landing';
import SignIn from '../../views/SignIn/SignIn';
import SignUp from '../../views/SignUp/SignUp';
import Boards from '../../views/Boards/Boards';
import AddBoard from '../../views/AddBoard/AddBoard';
import EditBoard from '../../views/EditBoard/EditBoard';
import RetroBoard from '../../views/RetroBoard/RetroBoard';
import AddCard from '../../views/AddCard/AddCard';
import EditCard from '../../views/EditCard/EditCard';
import Teams from '../../views/Teams/Teams';
import AddTeam from '../../views/AddTeam/AddTeam';
import ManageTeam from '../../views/ManageTeam/ManageTeam';
import EditTeam from '../../views/EditTeam/EditTeam';
import AddTeamMember from '../../views/AddTeamMember/AddTeamMember';

function App() {
  useEffect(() => {
    // Auth/Token service effect
    const logoutFromIdle = () => {
      TokenService.clearAuthToken();
      TokenService.clearCallbackBeforeExpiry();
      IdleService.unRegisterIdleResets();
    };

    IdleService.setIdleCallback(logoutFromIdle);
    if (TokenService.hasAuthToken()) {
      IdleService.regiserIdleTimerResets();
      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken();
      });
    }
    return function cleanup() {
      IdleService.unRegisterIdleResets();
      TokenService.clearCallbackBeforeExpiry();
    };
  });

  const [loggedInUser, setLoggedInUser] = useState({
    id: '287cd92d-b224-4d73-9a3f-9b6fdfdc26bbbc0f',
    email: 'ryan@chasery.com',
    name: 'Ryan Chase',
  });

  const [teams, setTeams] = useState([
    {
      id: '238671c5-eeb3-4dc8-a5a4-f39fda7de8990e',
      name: 'Someone Else Broke It',
      owner_id: loggedInUser.id,
      created_at: faker.date.past(),
      modified_at: faker.date.recent(),
      members: [
        {
          id: loggedInUser.id,
          email: loggedInUser.email,
          name: loggedInUser.name,
        },
        {
          id: '238671c5-egffeb3-4dc8-a5a4-f39fda7de8990e',
          email: faker.internet.email(),
          name: faker.name.firstName() + ' ' + faker.name.lastName(),
        },
        {
          id: '238671c5-easddseb3-4dc8-a5a4-f39fda7de8990e',
          email: faker.internet.email(),
          name: faker.name.firstName() + ' ' + faker.name.lastName(),
        },
        {
          id: '238671c5-eebdsafas3-4dc8-a5a4-f39fda7de8990e',
          email: faker.internet.email(),
          name: faker.name.firstName() + ' ' + faker.name.lastName(),
        },
        {
          id: '238671c5-eeb3-4dghghc8-a5a4-f39fda7de8990e',
          email: faker.internet.email(),
          name: faker.name.firstName() + ' ' + faker.name.lastName(),
        },
        {
          id: '238671c5-eeb3-4dc8fgdg-a5a4-f39fda7de8990e',
          email: faker.internet.email(),
          name: faker.name.firstName() + ' ' + faker.name.lastName(),
        },
      ],
    },
    {
      id: '0c36af8f-4b3b-4f7ee-9491-c3d6396f1136',
      name: 'Team Name Pending',
      owner_id: loggedInUser.id,
      created_at: faker.date.past(),
      modified_at: faker.date.recent(),
      members: [
        {
          id: loggedInUser.id,
          email: loggedInUser.email,
          name: loggedInUser.name,
        },
        {
          id: '238asdfas671c5-eeb3-4dc8-a5a4-f39fda7de8990e',
          email: faker.internet.email(),
          name: faker.name.firstName() + ' ' + faker.name.lastName(),
        },
        {
          id: '23867dasds1c5-eeb3-4dc8-a5a4-f39fda7de8990e',
          email: faker.internet.email(),
          name: faker.name.firstName() + ' ' + faker.name.lastName(),
        },
        {
          id: '238671c5-eeb3-4ddfsfsc8-a5a4-f39fda7de8990e',
          email: faker.internet.email(),
          name: faker.name.firstName() + ' ' + faker.name.lastName(),
        },
        {
          id: '238671c5-eeb3-4dcdsafad8-a5a4-f39fda7de8990e',
          email: faker.internet.email(),
          name: faker.name.firstName() + ' ' + faker.name.lastName(),
        },
        {
          id: '238671c5-eeb3-4dcdsaa8-a5a4-f39fda7de8990e',
          email: faker.internet.email(),
          name: faker.name.firstName() + ' ' + faker.name.lastName(),
        },
      ],
    },
    {
      id: '238671c4-eeb3-4ffdc8-a5a4-f39a7de8990j',
      name: 'Deploy Happy',
      owner_id: '238671c4-eeb3-4dc8-a5a4-f39a7de',
      created_at: faker.date.past(),
      modified_at: faker.date.recent(),
      members: [
        {
          id: '238671c4-eeb3-4dc8-a5addsaadsaa4-f39a7de',
          email: faker.internet.email(),
          name: faker.name.firstName() + ' ' + faker.name.lastName(),
        },
        {
          id: loggedInUser.id,
          email: loggedInUser.email,
          name: loggedInUser.name,
        },
        {
          id: '238671c5-eeewqrqqb3-4dc8-a5a4-f39fda7de8990e',
          email: faker.internet.email(),
          name: faker.name.firstName() + ' ' + faker.name.lastName(),
        },
        {
          id: '238671c5-eeb3-4dfewqc8-a5a4-f39fda7de8990e',
          email: faker.internet.email(),
          name: faker.name.firstName() + ' ' + faker.name.lastName(),
        },
        {
          id: '238671c5-eeb3-4dcytrj8-a5a4-f39fda7de8990e',
          email: faker.internet.email(),
          name: faker.name.firstName() + ' ' + faker.name.lastName(),
        },
        {
          id: '238671c5-eeb3-4dgtrgec8-a5a4-f39fda7de8990e',
          email: faker.internet.email(),
          name: faker.name.firstName() + ' ' + faker.name.lastName(),
        },
      ],
    },
  ]);
  const [boards, setBoards] = useState([
    {
      id: '800f3047-0054-4146-affsb7a-e06bf86f0868',
      name: 'Team Name Pending Retrio Board',
      team_id: '0c36af8f-4b3b-4f7ee-9491-c3d6396f1136',
      owner_id: loggedInUser.id,
      created_at: faker.date.past(),
      modified_at: faker.date.recent(),
      cards: [
        {
          id: '238671c5-eeb3-4asdfafdc8-a5a4-f39fda7de8990e',
          category: 1,
          headline: faker.lorem.words(),
          text: faker.lorem.paragraph(2),
          created_by: {
            id: loggedInUser.id,
            name: loggedInUser.name,
          },
          created_at: faker.date.past(),
          modified_at: faker.date.recent(),
        },
        {
          id: '238671c5-eeb3-4qqewqdc8-a5a4-f39fda7de8990e',
          category: 1,
          headline: faker.lorem.words(),
          text: faker.lorem.paragraph(2),
          created_by: {
            id: '238671c5-eeewrb3-4dc8-a5a4-f39fda7de8990e',
            name: faker.name.firstName() + ' ' + faker.name.lastName(),
          },
          created_at: faker.date.past(),
          modified_at: faker.date.recent(),
        },
        {
          id: '238671c5-eeb3-4dc8-a5a4-f39rjrjfda7de8990e',
          category: 1,
          headline: faker.lorem.words(),
          text: faker.lorem.paragraph(2),
          created_by: {
            id: '238671c5jur-eeb3-4dc8-a5a4-f39fda7de8990e',
            name: faker.name.firstName() + ' ' + faker.name.lastName(),
          },
          created_at: faker.date.past(),
          modified_at: faker.date.recent(),
        },
        {
          id: '238671c5-eebujrrju3-4dc8-a5a4-f39fda7de8990e',
          category: 1,
          headline: faker.lorem.words(),
          text: faker.lorem.paragraph(2),
          created_by: {
            id: '238671c5-eeb3-4jurudc8-a5a4-f39fda7de8990e',
            name: faker.name.firstName() + ' ' + faker.name.lastName(),
          },
          created_at: faker.date.past(),
          modified_at: faker.date.recent(),
        },
        {
          id: '238671c5-eeb3-4dc8-a5dafaa4-f39fda7de8990e',
          category: 2,
          headline: faker.lorem.words(),
          text: faker.lorem.paragraph(2),
          created_by: {
            id: '238671c5-eedasfab3-4dc8-a5a4-f39fda7de8990e',
            name: faker.name.firstName() + ' ' + faker.name.lastName(),
          },
          created_at: faker.date.past(),
          modified_at: faker.date.recent(),
        },
        {
          id: '238671c5-eerwewetb3-4dc8-a5a4-f39fda7de8990e',
          category: 2,
          headline: faker.lorem.words(),
          text: faker.lorem.paragraph(2),
          created_by: {
            id: '238671c5-eeb3-4dytrc8-a5a4-f39fda7de8990e',
            name: faker.name.firstName() + ' ' + faker.name.lastName(),
          },
          created_at: faker.date.past(),
          modified_at: faker.date.recent(),
        },
        {
          id: '238671c5-eeb3-4dtryeytrc8-a5a4-f39fda7de8990e',
          category: 4,
          headline: faker.lorem.words(),
          text: faker.lorem.paragraph(2),
          created_by: {
            id: '238671c5-eebytey3-4dc8-a5a4-f39fda7de8990e',
            name: faker.name.firstName() + ' ' + faker.name.lastName(),
          },
          created_at: faker.date.past(),
          modified_at: faker.date.recent(),
        },
        {
          id: '238671c5-eeb3-4dcdsfddsg8-a5a4-f39fda7de8990e',
          category: 4,
          headline: faker.lorem.words(),
          text: faker.lorem.paragraph(2),
          created_by: {
            id: loggedInUser.id,
            name: loggedInUser.name,
          },
          created_at: faker.date.past(),
          modified_at: faker.date.recent(),
        },
      ],
    },
    {
      id: '800f3047-0054-4146-ab7a-e06bwewef86f0868',
      name: 'Someone Else Broke It Retrio Board',
      team_id: '238671c5-eeb3-4dc8-a5a4-f39fda7de8990e',
      owner_id: loggedInUser.id,
      created_at: faker.date.past(),
      modified_at: faker.date.recent(),
      cards: [
        {
          id: '238671c5-eeb3-4asdfafdc8-a5a4-f39fda7de8990e',
          category: 1,
          headline: faker.lorem.words(),
          text: faker.lorem.paragraph(2),
          created_by: {
            id: loggedInUser.id,
            name: loggedInUser.name,
          },
          created_at: faker.date.past(),
          modified_at: faker.date.recent(),
        },
        {
          id: '238671c5-eeb3-4qqewqdc8-a5a4-f39fda7de8990e',
          category: 1,
          headline: faker.lorem.words(),
          text: faker.lorem.paragraph(2),
          created_by: {
            id: '238671c5-eeewrb3-4dc8-a5a4-f39fda7de8990e',
            name: faker.name.firstName() + ' ' + faker.name.lastName(),
          },
          created_at: faker.date.past(),
          modified_at: faker.date.recent(),
        },
        {
          id: '238671c5-eeb3-4dc8-a5a4-f39rjrjfda7de8990e',
          category: 1,
          headline: faker.lorem.words(),
          text: faker.lorem.paragraph(2),
          created_by: {
            id: '238671c5jur-eeb3-4dc8-a5a4-f39fda7de8990e',
            name: faker.name.firstName() + ' ' + faker.name.lastName(),
          },
          created_at: faker.date.past(),
          modified_at: faker.date.recent(),
        },
        {
          id: '238671c5-eebujrrju3-4dc8-a5a4-f39fda7de8990e',
          category: 1,
          headline: faker.lorem.words(),
          text: faker.lorem.paragraph(2),
          created_by: {
            id: '238671c5-eeb3-4jurudc8-a5a4-f39fda7de8990e',
            name: faker.name.firstName() + ' ' + faker.name.lastName(),
          },
          created_at: faker.date.past(),
          modified_at: faker.date.recent(),
        },
        {
          id: '238671c5-eeb3-4dc8-a5dafaa4-f39fda7de8990e',
          category: 2,
          headline: faker.lorem.words(),
          text: faker.lorem.paragraph(2),
          created_by: {
            id: '238671c5-eedasfab3-4dc8-a5a4-f39fda7de8990e',
            name: faker.name.firstName() + ' ' + faker.name.lastName(),
          },
          created_at: faker.date.past(),
          modified_at: faker.date.recent(),
        },
        {
          id: '238671c5-eerwewetb3-4dc8-a5a4-f39fda7de8990e',
          category: 2,
          headline: faker.lorem.words(),
          text: faker.lorem.paragraph(2),
          created_by: {
            id: '238671c5-eeb3-4dytrc8-a5a4-f39fda7de8990e',
            name: faker.name.firstName() + ' ' + faker.name.lastName(),
          },
          created_at: faker.date.past(),
          modified_at: faker.date.recent(),
        },
        {
          id: '238671c5-eeb3-4dtryeytrc8-a5a4-f39fda7de8990e',
          category: 4,
          headline: faker.lorem.words(),
          text: faker.lorem.paragraph(2),
          created_by: {
            id: '238671c5-eebytey3-4dc8-a5a4-f39fda7de8990e',
            name: faker.name.firstName() + ' ' + faker.name.lastName(),
          },
          created_at: faker.date.past(),
          modified_at: faker.date.recent(),
        },
        {
          id: '238671c5-eeb3-4dcdsfddsg8-a5a4-f39fda7de8990e',
          category: 4,
          headline: faker.lorem.words(),
          text: faker.lorem.paragraph(2),
          created_by: {
            id: loggedInUser.id,
            name: loggedInUser.name,
          },
          created_at: faker.date.past(),
          modified_at: faker.date.recent(),
        },
      ],
    },
    {
      id: '800f3056-0054-4146-7a-e0qw6bf86f0868',
      name: 'Deploy Happy Retrio Board',
      team_id: '238671c4-eeb3-4ffdc8-a5a4-f39a7de8990j',
      owner_id: '0c36af8f-4b3j-47ee-9491-c3d6rt396f1136',
      created_at: faker.date.past(),
      modified_at: faker.date.recent(),
      cards: [
        {
          id: '238671c5-eeb3-4asdfafdc8-a5a4-f39fda7de8990e',
          category: 1,
          headline: faker.lorem.words(),
          text: faker.lorem.paragraph(2),
          created_by: {
            id: loggedInUser.id,
            name: loggedInUser.name,
          },
          created_at: faker.date.past(),
          modified_at: faker.date.recent(),
        },
        {
          id: '238671c5-eeb3-4qqewqdc8-a5a4-f39fda7de8990e',
          category: 1,
          headline: faker.lorem.words(),
          text: faker.lorem.paragraph(2),
          created_by: {
            id: '238671c5-eeewrb3-4dc8-a5a4-f39fda7de8990e',
            name: faker.name.firstName() + ' ' + faker.name.lastName(),
          },
          created_at: faker.date.past(),
          modified_at: faker.date.recent(),
        },
        {
          id: '238671c5-eeb3-4dc8-a5a4-f39rjrjfda7de8990e',
          category: 1,
          headline: faker.lorem.words(),
          text: faker.lorem.paragraph(2),
          created_by: {
            id: '238671c5jur-eeb3-4dc8-a5a4-f39fda7de8990e',
            name: faker.name.firstName() + ' ' + faker.name.lastName(),
          },
          created_at: faker.date.past(),
          modified_at: faker.date.recent(),
        },
        {
          id: '238671c5-eebujrrju3-4dc8-a5a4-f39fda7de8990e',
          category: 1,
          headline: faker.lorem.words(),
          text: faker.lorem.paragraph(2),
          created_by: {
            id: '238671c5-eeb3-4jurudc8-a5a4-f39fda7de8990e',
            name: faker.name.firstName() + ' ' + faker.name.lastName(),
          },
          created_at: faker.date.past(),
          modified_at: faker.date.recent(),
        },
        {
          id: '238671c5-eeb3-4dc8-a5dafaa4-f39fda7de8990e',
          category: 2,
          headline: faker.lorem.words(),
          text: faker.lorem.paragraph(2),
          created_by: {
            id: '238671c5-eedasfab3-4dc8-a5a4-f39fda7de8990e',
            name: faker.name.firstName() + ' ' + faker.name.lastName(),
          },
          created_at: faker.date.past(),
          modified_at: faker.date.recent(),
        },
        {
          id: '238671c5-eerwewetb3-4dc8-a5a4-f39fda7de8990e',
          category: 2,
          headline: faker.lorem.words(),
          text: faker.lorem.paragraph(2),
          created_by: {
            id: '238671c5-eeb3-4dytrc8-a5a4-f39fda7de8990e',
            name: faker.name.firstName() + ' ' + faker.name.lastName(),
          },
          created_at: faker.date.past(),
          modified_at: faker.date.recent(),
        },
        {
          id: '238671c5-eeb3-4dtryeytrc8-a5a4-f39fda7de8990e',
          category: 4,
          headline: faker.lorem.words(),
          text: faker.lorem.paragraph(2),
          created_by: {
            id: '238671c5-eebytey3-4dc8-a5a4-f39fda7de8990e',
            name: faker.name.firstName() + ' ' + faker.name.lastName(),
          },
          created_at: faker.date.past(),
          modified_at: faker.date.recent(),
        },
        {
          id: '238671c5-eeb3-4dcdsfddsg8-a5a4-f39fda7de8990e',
          category: 4,
          headline: faker.lorem.words(),
          text: faker.lorem.paragraph(2),
          created_by: {
            id: loggedInUser.id,
            name: loggedInUser.name,
          },
          created_at: faker.date.past(),
          modified_at: faker.date.recent(),
        },
      ],
    },
  ]);

  const [cardCategories, setCardCategories] = useState({
    1: 'What went well',
    2: "What didn't go well",
    3: 'To try',
    4: 'Shout outs',
  });

  const addBoard = (board) => {
    setBoards([...boards, board]);
  };

  const editBoard = (boardId, board) => {
    setBoards(
      boards.map((b) => {
        const { name, team_id } = board;

        return b.id === boardId ? { ...b, name, team_id } : b;
      })
    );
  };

  const deleteBoard = (boardId) => {
    const updatedBoards = boards.filter((board) => board.id !== boardId);

    setBoards(updatedBoards);
  };

  const addCard = (boardId, card) => {
    setBoards(
      boards.map((board) =>
        board.id === boardId
          ? { ...board, cards: [...board.cards, card] }
          : board
      )
    );
  };

  const editCard = (boardId, cardId, card) => {
    setBoards(
      boards.map((board) => {
        const { category, headline, text, modified_at } = card;
        const editedCards = board.cards.map((c) =>
          c.id === cardId ? { ...c, category, headline, text, modified_at } : c
        );

        return board.id === boardId ? { ...board, cards: editedCards } : board;
      })
    );
  };

  const deleteCard = (boardId, cardId) => {
    setBoards(
      boards.map((board) => {
        const updatedCards = board.cards.filter((c) => c.id !== cardId);

        return board.id === boardId
          ? { ...board, cards: updatedCards ? updatedCards : [] }
          : board;
      })
    );
  };

  const addTeam = (team) => {
    setTeams([...teams, team]);
  };

  const editTeam = (teamId, team) => {
    setTeams(
      teams.map((t) => {
        const { name } = team;
        return t.id === teamId ? { ...t, name } : t;
      })
    );
  };

  const deleteTeam = (teamId) => {
    setTeams(teams.filter((team) => team.id !== teamId));
  };

  const addTeamMember = (teamId, teamMember) => {
    setTeams(
      teams.map((team) =>
        team.id === teamId
          ? { ...team, members: [...team.members, teamMember] }
          : team
      )
    );
  };

  const removeTeamMember = (teamId, teamMemberId) => {
    setTeams(
      teams.map((team) => {
        const updatedMembers = team.members.filter((m) => {
          return m.id !== teamMemberId.toString();
        });

        return team.id === teamId
          ? { ...team, members: updatedMembers ? updatedMembers : [] }
          : team;
      })
    );
  };

  // Here to prevent context error, remove later
  const throwAway = () => {
    setLoggedInUser();
    setCardCategories({});
  };

  const contextValue = {
    loggedInUser,
    boards,
    cardCategories,
    teams,
    addBoard,
    editBoard,
    deleteBoard,
    addCard,
    editCard,
    deleteCard,
    addTeam,
    editTeam,
    deleteTeam,
    addTeamMember,
    removeTeamMember,
    throwAway,
  };

  return (
    <>
      <RetrioContext.Provider value={contextValue}>
        <Switch>
          <PublicOnlyRoute exact path='/' component={Landing} />
          <PublicOnlyRoute exact path='/sign-in' component={SignIn} />
          <PublicOnlyRoute exact path='/sign-up' component={SignUp} />
          <PrivateRoute exact path='/boards' component={Boards} />
          <PrivateRoute path='/boards/add' component={AddBoard} />
          <PrivateRoute exact path='/boards/:boardId' component={RetroBoard} />
          <PrivateRoute
            exact
            path='/boards/:boardId/edit'
            component={EditBoard}
          />
          <PrivateRoute path='/boards/:boardId/cards/add' component={AddCard} />
          <PrivateRoute
            path='/boards/:boardId/cards/:cardId/edit'
            component={EditCard}
          />
          <PrivateRoute exact path='/teams' component={Teams} />
          <PrivateRoute path='/teams/add' component={AddTeam} />
          <PrivateRoute exact path='/teams/:teamId' component={ManageTeam} />
          <PrivateRoute path='/teams/:teamId/edit' component={EditTeam} />
          <PrivateRoute
            path='/teams/:teamId/members/add'
            component={AddTeamMember}
          />
        </Switch>
      </RetrioContext.Provider>
    </>
  );
}

export default App;
