import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import BoardsApiService from '../../services/boards-api-service';
import TeamsApiService from '../../services/teams-api-service';
import TokenService from '../../services/token-service';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import FormField from '../../components/FormField/FormField';
import Error from '../../components/Error/Error';
import './EditBoard.css';

function EditBoard(props) {
  const history = useHistory();
  const { boardId } = useParams();
  const [team, setTeam] = useState('');
  const [teams, setTeams] = useState([]);
  const [boardName, setBoardName] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    async function initState() {
      try {
        let boardsCall = await BoardsApiService.getBoard(boardId);
        let boardsRes = await boardsCall;
        setTeam(boardsRes.team_id);
        setBoardName(boardsRes.name);

        const jwt = TokenService.readJwtToken();
        let teamsCall = await TeamsApiService.getTeams(jwt.id);
        let teamsRes = await teamsCall;
        setTeams(teamsRes);
      } catch (error) {
        setError(error.error);
      }
    }

    initState();
  }, [boardId]);

  const handleEditBoard = (e) => {
    e.preventDefault();

    BoardsApiService.editBoard(boardId, {
      name: boardName,
      team_id: team,
    })
      .then((res) => history.push(`/boards`))
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
        <section className='EditBoard'>
          <div className='EditBoard__wrapper'>
            <Form id='EditBoard' onSubmit={(e) => handleEditBoard(e)}>
              <div className='Form__header'>
                <h2>Edit Board</h2>
              </div>
              <div className='Form__body'>
                <p>Make changes to the Retrio board.</p>
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
                    Edit Board
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

export default EditBoard;
