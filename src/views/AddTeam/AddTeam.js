import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import FormField from '../../components/FormField/FormField';
// import Error from '../../components/Error/Error';
import './AddTeam.css';

function AddTeam(props) {
  const history = useHistory();
  const [teamName, setTeamName] = useState('');
  // const [error, setError] = useState(null);

  const handleAddTeam = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <main role='main'>
        <section className='AddTeam'>
          <div className='AddTeam__wrapper'>
            <Form id='AddTeam' onSubmit={(e) => handleAddTeam(e)}>
              <div className='Form__header'>
                <h2>Add Team</h2>
              </div>
              <div className='Form__body'>
                <p>Add a SCRUM team to associate with Retrio boards.</p>
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
                    onClick={() => history.push(`/teams`)}
                  >
                    Cancel
                  </button>
                  <button className='Form__button primary' type='submit'>
                    Add Team
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

export default AddTeam;
