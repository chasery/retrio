import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import faker from 'faker';
import RetrioContext from '../../context/retrio-context';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import FormField from '../../components/FormField/FormField';
// import Error from '../../components/Error/Error';
import './AddCard.css';

function AddCard(props) {
  const context = useContext(RetrioContext);
  const history = useHistory();
  const { boardId } = useParams();
  const [category, setCategory] = useState('');
  const [headline, setHeadline] = useState('');
  const [text, setText] = useState('');
  // const [error, setError] = useState(null);

  const handleAddCard = (e) => {
    e.preventDefault();

    context.addCard(boardId, {
      id: faker.datatype.uuid(),
      category: parseInt(category),
      headline,
      text,
      created_by: {
        id: context.loggedInUser.id,
        name: context.loggedInUser.name,
      },
      created_at: new Date(),
    });
    history.push(`/boards/${boardId}`);
  };

  const renderCategories = () => {
    const types = [];

    for (const [key, value] of Object.entries(context.cardCategories)) {
      types.push(
        <option key={key} value={`${key}`}>
          {value}
        </option>
      );
    }

    return types;
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
                <p>Add a card to the retrospective.</p>
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
                      {renderCategories()}
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
                    className='FormField__textarea'
                    onChange={(e) => setText(e.target.value)}
                    rows='8'
                    value={text}
                  ></textarea>
                </div>
                {/* {error ? <Error message={error} /> : null} */}
                <div className='Form__controls'>
                  <button
                    className='Form__button secondary'
                    type='button'
                    onClick={() => history.push(`/boards/${boardId}`)}
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
