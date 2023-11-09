import React, {useState} from 'react';
import {UserProps} from "../../../UserProps";

interface Props {
  onSubmit: (users: UserProps) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    active: false,
    role: '',
  });

  const changeUser = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUser((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const checkUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.type === 'checkbox') {
      setUser((prev) => ({
        ...prev,
        [event.target.name]: event.target.checked,
      }));
    }
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      ...user,
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={user.name}
          onChange={changeUser}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          value={user.email}
          onChange={changeUser}
        />
      </div>
      <div className="form-group">
        <label htmlFor="active">Active</label>
        <input
          type="checkbox"
          name="active"
          id="active"
          className="mt-3 ms-2"
          onChange={checkUser}
        />
      </div>
      <div className="form-group">
        <select name="role" value={user.role} onChange={changeUser}>
          <option></option>
          <option>user</option>
          <option>editor</option>
          <option>admin</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary mt-2">Create</button>
    </form>
  );
};

export default UserForm;