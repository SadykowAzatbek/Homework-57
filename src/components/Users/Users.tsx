import React from 'react';
import UserItem from './UserItem';
import {UserProps} from '../../../UserProps';

interface Props {
  users: UserProps[];
}

const User: React.FC<Props> = ({users}) => {
  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default User;