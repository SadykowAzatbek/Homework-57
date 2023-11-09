import UserForm from './components/UserForm/UserForm';
import {useState} from 'react';
import {UserProps} from '../UserProps';
import Users from './components/Users/Users';

function App() {
  const [user, setUser] = useState<UserProps[]>([]);

  const createUser = (users: UserProps) => {
    setUser((prev) => [...prev, users]);
  }

  return (
    <>
      <main className='container-fluid'>
        <div className='row mt-2'>
          <div className='col-6'>
            <UserForm onSubmit={createUser}/>
          </div>
          <div className='col-6'>
            <Users users={user}></Users>
          </div>
        </div>
      </main>
    </>
  )
}

export default App;
