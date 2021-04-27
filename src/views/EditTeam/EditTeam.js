import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RetrioContext from '../../context/retrio-context';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import FormField from '../../components/FormField/FormField';
// import Error from '../../components/Error/Error';
import './EditTeam.css';

function EditTeam(props) {
  const context = useContext(RetrioContext);
  const { teamId } = useParams();
  const history = useHistory();

  const teamToEdit = context.teams.find((team) => team.id === teamId);

  const [teamName, setTeamName] = useState(teamToEdit ? teamToEdit.name : '');
  // const [error, setError] = useState(null);

  const handleEditTeam = (e) => {
    e.preventDefault();

    context.editTeam(teamId, { name: teamName });
    history.push(`/teams/${teamId}`);
  };

  return (
    <>
      <Header />
      <main role='main'>
        <section className='EditTeam'>
          <div className='EditTeam__wrapper'>
            <Form id='EditTeam' onSubmit={(e) => handleEditTeam(e)}>
              <div className='Form__header'>
                <h2>Edit Team</h2>
              </div>
              <div className='Form__body'>
                <p>
                  Make changes to{' '}
                  {teamToEdit ? <strong>{teamToEdit.name}</strong> : 'the team'}
                  .
                </p>
                <FormField
                  id='teamName'
                  label='Team Name'
                  type='text'
                  isRequired={true}
                  onChange={(e) => setTeamName(e.target.value)}
                  value={teamName}
                />
                {/* {error ? <Error message={error} /> : null} */}
                <div className='Form__controls'>
                  <button
                    className='Form__button secondary'
                    type='button'
                    onClick={() => history.push(`/teams/${teamId}`)}
                  >
                    Cancel
                  </button>
                  <button className='Form__button primary' type='submit'>
                    Edit Team
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

export default EditTeam;
