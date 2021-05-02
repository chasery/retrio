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
          owner={board.owner}
          teamId={board.team_id}
          createdAt={board.created_at}
          updatedAt={board.updated_at}
        />
      ));
    }
  };

  return <ol className='BoardsList'>{renderBoards(boards)}</ol>;
}

export default BoardsList;
