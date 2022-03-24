import React, { useEffect } from 'react';
import { useAction } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const UsersList: React.FC = () => {
  const {users, loading, error} = useTypedSelector(state => state.user);
  const {fetchUsers} = useAction();

  useEffect(() => {
    fetchUsers()
  }, [])

  if(loading) {
      return <h1>Идёт загрузка...</h1>
  }
  if(error) {
      return <h2>{error}</h2>
  }

  return (
    <div>
        {users.map( (user) => (
            <div>{user.name}</div>
        ))}
    </div>
  )
}

export default UsersList