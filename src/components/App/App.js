import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
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
  const [cardCategories, setCardCategories] = useState({});

  useEffect(() => {
    setCardCategories({
      1: 'What went well',
      2: "What didn't go well",
      3: 'To try',
      4: 'Shout outs',
    });

    // Auth/Token service
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
  }, [setCardCategories]);

  const contextValue = {
    cardCategories,
  };

  return (
    <>
      <RetrioContext.Provider value={contextValue}>
        <Switch>
          <Route exact path='/' component={Landing} />
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
