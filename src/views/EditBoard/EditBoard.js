import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RetrioContext from '../../context/retrio-context';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import FormField from '../../components/FormField/FormField';
// import Error from '../../components/Error/Error';
import './EditBoard.css';

function EditBoard(props) {
  const context = useContext(RetrioContext);
  const history = useHistory();
  const { boardId } = useParams();

  const boardToEdit = context.boards.find((board) => board.id === boardId);

  const [team, setTeam] = useState(boardToEdit ? boardToEdit.team_id : '');
  const [boardName, setBoardName] = useState(
    boardToEdit ? boardToEdit.name : ''
  );
  // const [error, setError] = useState(null);

  const handleEditBoard = (e) => {
    e.preventDefault();

    context.editBoard(boardId, {
      name: boardName,
      team_id: team,
    });
    history.push(`/boards`);
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
                      {renderTeamOptions(context.teams)}
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
                {/* {error ? <Error message={error} /> : null} */}
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
