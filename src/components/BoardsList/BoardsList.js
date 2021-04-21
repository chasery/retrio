import React from 'react';
import Board from '../Board/Board';
import './BoardsList.css';

function BoardsList(props) {
  const { boards } = props;

  const renderBoards = (boards) => {
    if (boards) {
      return boards.map((board) => (
        <Board
          key={board.id}
          id={board.id}
          name={board.name}
          created_at={board.created_at}
          modified_at={board.modified_at}
        />
      ));
    }
  };

  return <ol className='BoardsList'>{renderBoards(boards)}</ol>;
}

export default BoardsList;
