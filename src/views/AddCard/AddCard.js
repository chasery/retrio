import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import FormField from '../../components/FormField/FormField';
import Error from '../../components/Error/Error';
import './AddCard.css';

function AddCard(props) {
  const history = useHistory();
  const [category, setCategory] = useState('');
  const [headline, setHeadline] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState(null);

  const handleAddCard = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <main role='main'>
        <section className='AddCard'>
          <div className='AddCard__wrapper'>
            <Form id='AddCard' onSubmit={(e) => handleAddCard(e)}>
              <div className='Form__header'>
                <h2>Add Card</h2>
              </div>
              <div className='Form__body'>
                <p>
                  Add a card to the{' '}
                  <strong>Team Name Pending Retrio Board</strong>.
                </p>
                <div className='FormField'>
                  <label className='FormField__label' htmlFor='category'>
                    Category<span className='FormField__required'>*</span>
                  </label>
                  <div class='FormField__select'>
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
                  isRequired={true}
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
                    Add Card
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

export default AddCard;
