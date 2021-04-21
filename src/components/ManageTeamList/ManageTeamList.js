import React from 'react';
import ManageTeamItem from '../ManageTeamItem/ManageTeamItem';
import './ManageTeamList.css';

function ManageTeamList(props) {
  const { members } = props;

  const renderTeamMembers = (members) => {
    if (members) {
      return members.map((member) => (
        <ManageTeamItem
          key={member.id}
          id={member.id}
          name={member.name}
          email={member.email}
          owner={member.owner}
        />
      ));
    }
  };

  return <ul className='ManageTeamList'>{renderTeamMembers(members)}</ul>;
}

export default ManageTeamList;
