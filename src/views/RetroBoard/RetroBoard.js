import React from 'react';
import Header from '../../components/Header/Header';
import RetroBoardColumn from '../../components/RetroBoardColumn/RetroBoardColumn';
import './RetroBoard.css';

function RetroBoard(props) {
  // Response object I am expecting for a retro board
  const retroBoard = {
    id: 1,
    name: 'Team Name Pending Retrio Board',
    good: [
      {
        id: 1,
        headline: 'We created an API to add a card!',
        text:
          'It’s crazy, we actually made a restful API endpoint to add a note to the retro board. Thanks Bob for helping drive the discussions with our PO around the buisness logic for this. We couldn’t have done this with out you!',
        submitted_by: 'Ryan Chase',
      },
      {
        id: 2,
        headline: 'We created an API to add a card!',
        text:
          'It’s crazy, we actually made a restful API endpoint to add a note to the retro board. Thanks Bob for helping drive the discussions with our PO around the buisness logic for this. We couldn’t have done this with out you!',
        submitted_by: 'Ryan Chase',
      },
      {
        id: 3,
        headline: 'We created an API to add a card!',
        text:
          'It’s crazy, we actually made a restful API endpoint to add a note to the retro board. Thanks Bob for helping drive the discussions with our PO around the buisness logic for this. We couldn’t have done this with out you!',
        submitted_by: 'Ryan Chase',
      },
    ],
    bad: [
      {
        id: 4,
        headline: 'We created an API to add a card!',
        text:
          'It’s crazy, we actually made a restful API endpoint to add a note to the retro board. Thanks Bob for helping drive the discussions with our PO around the buisness logic for this. We couldn’t have done this with out you!',
        submitted_by: 'Ryan Chase',
      },
      {
        id: 5,
        headline: 'We created an API to add a card!',
        text:
          'It’s crazy, we actually made a restful API endpoint to add a note to the retro board. Thanks Bob for helping drive the discussions with our PO around the buisness logic for this. We couldn’t have done this with out you!',
        submitted_by: 'Ryan Chase',
      },
    ],
    to_try: [
      {
        id: 6,
        headline: 'We created an API to add a card!',
        text:
          'It’s crazy, we actually made a restful API endpoint to add a note to the retro board. Thanks Bob for helping drive the discussions with our PO around the buisness logic for this. We couldn’t have done this with out you!',
        submitted_by: 'Ryan Chase',
      },
    ],
    shout_outs: [
      {
        id: 7,
        headline: 'We created an API to add a card!',
        text:
          'It’s crazy, we actually made a restful API endpoint to add a note to the retro board. Thanks Bob for helping drive the discussions with our PO around the buisness logic for this. We couldn’t have done this with out you!',
        submitted_by: 'Ryan Chase',
      },
      {
        id: 8,
        headline: 'We created an API to add a card!',
        text:
          'It’s crazy, we actually made a restful API endpoint to add a note to the retro board. Thanks Bob for helping drive the discussions with our PO around the buisness logic for this. We couldn’t have done this with out you!',
        submitted_by: 'Ryan Chase',
      },
    ],
  };

  return (
    <>
      <Header fullWidth={true} />
      <main role='main'>
        <section className='RetroBoard'>
          <ul className='RetroBoard__board'>
            <RetroBoardColumn
              boardId={retroBoard.id}
              title={'What went well'}
              cards={retroBoard.good}
            />
            <RetroBoardColumn
              boardId={retroBoard.id}
              title={"What didn't go well"}
              cards={retroBoard.bad}
            />
            <RetroBoardColumn
              boardId={retroBoard.id}
              title={'To try'}
              cards={retroBoard.to_try}
            />
            <RetroBoardColumn
              boardId={retroBoard.id}
              title={'Shout outs'}
              cards={retroBoard.shout_outs}
            />
          </ul>
        </section>
      </main>
    </>
  );
}

export default RetroBoard;
