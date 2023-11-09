import React from 'react';
import {UserProps} from '../../../UserProps';

interface Props {
  user: UserProps;
}

const UserItem: React.FC<Props> = ({user}) => {
  if (user.active === true) {
    return (
      <div className="card mb-2">
        <div className="col-sm-8">
          <div className="card-body">
            <h5 className="card-title">Name: {user.name}</h5>
            <p className="card-text small">Email: {user.email}</p>
            <p className="card-text">Role: {user.role}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default UserItem;