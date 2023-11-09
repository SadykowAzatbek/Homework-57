import React from 'react';
import {UserProps} from '../../../UserProps';

interface Props {
  user: UserProps;
}

const UserItem: React.FC<Props> = ({user}) => {
  return (
    <div className="card mb-2">
      <div className="col-sm-8">
        <div className="card-body">
          <span className="fs-6">Активен: {user.active}</span>
          <h5 className="card-title">Name: {user.name}</h5>
          <p className="card-text small">Email: {user.email}</p>
          <p className="card-text">Role: {user.role}</p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;