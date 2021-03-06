import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BoardsApiService from '../../services/boards-api-service';
import TeamsApiService from '../../services/teams-api-service';
import TokenService from '../../services/token-service';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import FormField from '../../components/FormField/FormField';
import Error from '../../components/Error/Error';
import './AddBoard.css';

function AddBoard(props) {
  const history = useHistory();
  const [team, setTeam] = useState('');
  const [teams, setTeams] = useState([]);
  const [boardName, setBoardName] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    async function initState() {
      try {
        const jwt = TokenService.readJwtToken();
        let apiCall = await TeamsApiService.getTeams(jwt.id);
        let res = await apiCall;

        setTeams(res);
      } catch (error) {
        setError(error.error);
      }
    }

    initState();
  }, []);

  const handleAddBoard = (e) => {
    e.preventDefault();

    BoardsApiService.postBoard({
      name: boardName,
      team_id: team,
    })
      .then((res) => history.push(`/boards/${res.id}`))
      .catch((error) => setError(error.error));
  };

  const renderTeamOptions = (teams) => {
    return teams.map((team) => (
      <option key={team.id} value={team.id}>
        {team.name}
      </option>
    ));
  };

  return (
    <>
      <Header />
      <main role='main'>
        <section className='AddBoard'>
          <div className='AddBoard__wrapper'>
            <Form id='AddBoard' onSubmit={(e) => handleAddBoard(e)}>
              <div className='Form__header'>
                <h2>Add Board</h2>
              </div>
              <div className='Form__body'>
                <p>Add a Retrio board to begin collaborating with your team.</p>
                <div className='FormField'>
                  <label className='FormField__label' htmlFor={team}>
                    Team<span className='FormField__required'>*</span>
                  </label>
                  <div className='FormField__select'>
                    <select
                      id='team'
                      required
                      value={team}
                      onChange={(e) => setTeam(e.target.value)}
                    >
                      <option value=''>Select Team</option>
                      {renderTeamOptions(teams)}
                    </select>
                  </div>
                </div>
                <FormField
                  id='boardName'
                  label='Board Name'
                  type='text'
                  isRequired={true}
                  onChange={(e) => setBoardName(e.target.value)}
                  value={boardName}
                />
                {error ? <Error message={error} /> : null}
                <div className='Form__controls'>
                  <button
                    className='Form__button secondary'
                    type='button'
                    onClick={() => history.push(`/boards`)}
                  >
                    Cancel
                  </button>
                  <button className='Form__button primary' type='submit'>
                    Add Board
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </section>
      </main>
    </>
  );
}

export default AddBoard;
