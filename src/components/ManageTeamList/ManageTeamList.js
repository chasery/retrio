import React from 'react';
import ManageTeamItem from '../ManageTeamItem/ManageTeamItem';
import './ManageTeamList.css';

function ManageTeamList(props) {
  const { members, canModify } = props;

  const renderTeamMembers = (members) => {
    if (members) {
      return members.map((member) => (
        <ManageTeamItem
          key={member.user_id}
          userId={member.user_id}
          firstName={member.first_name}
          lastName={member.last_name}
          email={member.email}
          owner={member.owner}
          canModify={canModify}
        />
      ));
    }
  };

  return <ul className='ManageTeamList'>{renderTeamMembers(members)}</ul>;
}

export default ManageTeamList;
