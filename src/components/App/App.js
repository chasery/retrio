import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../../views/Landing/Landing';
import Boards from '../../views/Boards/Boards';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/boards' component={Boards} />
        {/* <Route exact path='/boards/add' component={AddBoards} />
        <Route exact path='/teams' component={Teams} />
        <Route exact path='/teams/add' component={AddTeams} /> */}
      </Switch>
    </>
  );
}

export default App;
