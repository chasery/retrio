import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../../views/Landing/Landing';
import Boards from '../../views/Boards/Boards';
import AddBoard from '../../views/AddBoard/AddBoard';
import Teams from '../../views/Teams/Teams';
import AddTeam from '../../views/AddTeam/AddTeam';
import ManageTeam from '../../views/ManageTeam/ManageTeam';
import EditTeam from '../../views/EditTeam/EditTeam';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/boards' component={Boards} />
        <Route exact path='/boards/add-board' component={AddBoard} />
        <Route exact path='/teams' component={Teams} />
        <Route exact path='/teams/add-team' component={AddTeam} />
        <Route exact path='/teams/:teamId' component={ManageTeam} />
        <Route exact path='/teams/:teamId/edit-team' component={EditTeam} />
      </Switch>
    </>
  );
}

export default App;
