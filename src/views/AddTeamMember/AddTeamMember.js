import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import faker from 'faker';
import RetrioContext from '../../context/retrio-context';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import FormField from '../../components/FormField/FormField';
// import Error from '../../components/Error/Error';
import './AddTeamMember.css';

function AddTeamMember(props) {
  const context = useContext(RetrioContext);
  const history = useHistory();
  const { teamId } = useParams();
  const [email, setEmail] = useState('');
  // const [error, setError] = useState(null);

  const team = context.teams.find((team) => team.id === teamId);

  const handleAddTeamMember = (e) => {
    e.preventDefault();

    context.addTeamMember(teamId, {
      id: faker.datatype.uuid(),
      email,
      name: faker.name.firstName() + ' ' + faker.name.lastName(),
      owner: false,
    });
    history.push(`/teams/${teamId}`);
  };

  return (
    <>
      <Header />
      <main role='main'>
        <section className='AddTeamMember'>
          <div className='AddTeamMember__wrapper'>
            <Form id='AddTeamMember' onSubmit={(e) => handleAddTeamMember(e)}>
              <div className='Form__header'>
                <h2>Add Team Member</h2>
              </div>
              <div className='Form__body'>
                <p>
                  Add a registered Retrio user
                  {team ? ` to <strong>${team.name}</strong>` : ''}.
                </p>
                <FormField
                  id='email'
                  label='Email'
                  type='email'
                  isRequired={true}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
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
                    Add Team Member
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
