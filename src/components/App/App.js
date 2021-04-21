import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../../views/Landing/Landing';
import Boards from '../../views/Boards/Boards';
import AddBoard from '../../views/AddBoard/AddBoard';
import Teams from '../../views/Teams/Teams';
import AddTeam from '../../views/AddTeam/AddTeam';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/boards' component={Boards} />
        <Route exact path='/boards/add-board' component={AddBoard} />
        <Route exact path='/teams' component={Teams} />
        <Route exact path='/teams/add-team' component={AddTeam} />
      </Switch>
    </>
  );
}

export default App;
