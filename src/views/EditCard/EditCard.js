import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RetrioContext from '../../context/retrio-context';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import FormField from '../../components/FormField/FormField';
// import Error from '../../components/Error/Error';
import './EditCard.css';

function EditCard(props) {
  const context = useContext(RetrioContext);
  const history = useHistory();
  const { boardId, cardId } = useParams();

  const board = context.boards.filter((board) => board.id === boardId);
  const team = context.teams.filter((team) => team.id === board[0].team_id);
  const editCard = board[0].cards.filter((card) => card.id === cardId);

  const [category, setCategory] = useState(editCard[0].category);
  const [headline, setHeadline] = useState(editCard[0].headline);
  const [text, setText] = useState(editCard[0].text);
  // const [error, setError] = useState(null);

  const handleEditCard = (e) => {
    e.preventDefault();

    context.editCard(boardId, cardId, {
      category: parseInt(category),
      headline,
      text,
      modified_at: new Date(),
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
        <section className='EditCard'>
          <div className='EditCard__wrapper'>
            <Form id='EditCard' onSubmit={(e) => handleEditCard(e)}>
              <div className='Form__header'>
                <h2>Edit Card</h2>
              </div>
              <div className='Form__body'>
                <p>
                  Edit the following card in the <strong>{team[0].name}</strong>{' '}
                  retrospective.
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
