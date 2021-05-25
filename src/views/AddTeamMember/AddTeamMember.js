import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import TeamsApiService from '../../services/teams-api-service';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import FormField from '../../components/FormField/FormField';
import Error from '../../components/Error/Error';
import './AddTeamMember.css';
import TeamApiService from '../../services/teams-api-service';

function AddTeamMember(props) {
  const history = useHistory();
  const { teamId } = useParams();
  const [team, setTeam] = useState({});
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    async function initState() {
      try {
        let apiCall = await TeamsApiService.getTeam(teamId);
        let res = await apiCall;

        setTeam(res);
      } catch (error) {
        setError(error.error);
      }
    }

    initState();
  }, [teamId]);

  const handleAddTeamMember = (e) => {
    e.preventDefault();

    TeamApiService.postTeamMember(teamId, {
      email,
    })
      .then((res) => history.push(`/teams/${res.team_id}`))
      .catch((error) => setError(error.error));
  };

  return (
    <>
      <Header />
      <main role='main'>
        <section className='AddTeamMember'>
          <div className='AddTeamMember__wrapper'>
            <Form id='AddTeamMember' onSubmit={(e) => handleAddTeamMember(e)}>
              <div className='Form__header'>
                <h2>Add Member</h2>
              </div>
              <div className='Form__body'>
                {team ? (
                  <p>
                    Add a registered Retrio user to <strong>{team.name}</strong>
                    .
                  </p>
                ) : (
                  <p>Add a registered Retrio user.</p>
                )}
                <FormField
                  id='email'
                  label='Email'
                  type='email'
                  isRequired={true}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
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
                    Add Member
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

export default AddTeamMember;
