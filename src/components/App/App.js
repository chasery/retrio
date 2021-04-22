import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../../views/Landing/Landing';
import SignIn from '../../views/SignIn/SignIn';
import SignUp from '../../views/SignUp/SignUp';
import Boards from '../../views/Boards/Boards';
import AddBoard from '../../views/AddBoard/AddBoard';
import RetroBoard from '../../views/RetroBoard/RetroBoard';
import AddCard from '../../views/AddCard/AddCard';
import Teams from '../../views/Teams/Teams';
import AddTeam from '../../views/AddTeam/AddTeam';
import ManageTeam from '../../views/ManageTeam/ManageTeam';
import EditTeam from '../../views/EditTeam/EditTeam';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/sign-in' component={SignIn} />
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='/boards' component={Boards} />
        <Route exact path='/boards/add-board' component={AddBoard} />
        <Route exact path='/boards/:boardId' component={RetroBoard} />
        <Route exact path='/boards/:boardId/add-card' component={AddCard} />
        <Route exact path='/teams' component={Teams} />
        <Route exact path='/teams/add-team' component={AddTeam} />
        <Route exact path='/teams/:teamId' component={ManageTeam} />
        <Route exact path='/teams/:teamId/edit-team' component={EditTeam} />
      </Switch>
    </>
  );
}

export default App;
