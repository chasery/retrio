import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import TeamApiService from '../../services/teams-api-service';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import FormField from '../../components/FormField/FormField';
import Error from '../../components/Error/Error';
import './EditTeam.css';

function EditTeam(props) {
  const history = useHistory();
  const { teamId } = useParams();
  const [teamName, setTeamName] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    async function initState() {
      try {
        let apiCall = await TeamApiService.getTeam(teamId);
        let res = await apiCall;

        setTeamName(res.name);
      } catch (error) {
        setError(error.error);
      }
    }

    initState();
  }, [teamId]);

  const handleEditTeam = (e) => {
    e.preventDefault();

    TeamApiService.editTeam(teamId, {
      name: teamName,
    })
      .then((res) => history.push(`/teams/${teamId}`))
      .catch((error) => setError(error.error));
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
                  {teamName ? <strong>{teamName}</strong> : 'the team'}.
                </p>
                <FormField
                  id='teamName'
                  label='Team Name'
                  type='text'
                  isRequired={true}
                  onChange={(e) => setTeamName(e.target.value)}
                  value={teamName}
                />
                {error ? <Error message={error} /> : null}
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
