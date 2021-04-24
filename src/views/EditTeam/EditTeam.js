import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import FormField from '../../components/FormField/FormField';
// import Error from '../../components/Error/Error';
import './EditTeam.css';

function EditTeam(props) {
  const history = useHistory();
  const [teamName, setTeamName] = useState('');
  // const [error, setError] = useState(null);

  // Response object I am expecting for team
  const team = {
    id: 3,
    name: 'Team Name Pending',
  };

  const handleEditTeam = (e) => {
    e.preventDefault();
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
                  Make changes to <strong>Team Name Pending</strong>.
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
                    onClick={() => history.push(`/teams/${team.id}`)}
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
