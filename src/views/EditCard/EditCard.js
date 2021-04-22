import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import FormField from '../../components/FormField/FormField';
import Error from '../../components/Error/Error';
import './EditCard.css';

function EditCard(props) {
  const history = useHistory();
  const [category, setCategory] = useState('');
  const [headline, setHeadline] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState(null);

  const handleEditCard = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <main role='main'>
        <section className='EditCard'>
          <div className='EditCard__wrapper'>
            <Form id='EditCard' onSubmit={(e) => handleEditCard(e)}>
              <div className='Form__header'>
                <h2>Edit Card</h2>
              </div>
              <div className='Form__body'>
                <p>
                  Edit the following card in the
                  <strong>Team Name Pending Retrio Board</strong> retrospective.
                </p>
                <div className='FormField'>
                  <label className='FormField__label' htmlFor='category'>
                    Category<span className='FormField__required'>*</span>
                  </label>
                  <div className='FormField__select'>
                    <select
                      id='category'
                      required
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value=''>Select Category</option>
                      <option value='1'>What wen't well</option>
                      <option value='2'>What didn't go well</option>
                      <option value='3'>To try</option>
                      <option value='4'>Shout outs</option>
                    </select>
                  </div>
                </div>
                <FormField
                  id='headline'
                  label='Headline'
                  type='text'
                  isRequired={false}
                  onChange={(e) => setHeadline(e.target.value)}
                  value={headline}
                />
                <div className='FormField'>
                  <label className='FormField__label' htmlFor='text'>
                    Text<span className='FormField__required'>*</span>
                  </label>
                  <textarea
                    id='text'
                    onChange={(e) => setText(e.target.value)}
                    rows='8'
                  ></textarea>
                </div>
                {error ? <Error message={error} /> : null}
                <div className='Form__controls'>
                  <button
                    className='Form__button secondary'
                    type='button'
                    onClick={() => history.push(`/boards/1`)}
                  >
                    Cancel
                  </button>
                  <button className='Form__button primary' type='submit'>
                    Edit Card
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

export default EditCard;
