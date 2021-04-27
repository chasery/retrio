import React from 'react';
import BoardsItem from '../BoardsItem/BoardsItem';
import './BoardsList.css';

function BoardsList(props) {
  const { boards } = props;

  const renderBoards = (boards) => {
    if (boards) {
      return boards.map((board) => (
        <BoardsItem
          key={board.id}
          id={board.id}
          name={board.name}
          owner_id={board.owner_id}
          created_at={board.created_at}
          modified_at={board.modified_at}
        />
      ));
    }
  };

  return <ol className='BoardsList'>{renderBoards(boards)}</ol>;
}

export default BoardsList;
