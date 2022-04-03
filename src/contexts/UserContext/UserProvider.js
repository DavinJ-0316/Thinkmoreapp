import React, { useEffect, useState } from 'react';
import getUser from '../../apis/getUser';
import UserContext from './UserContext';

const UserProvider = ({
  children,
}) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUser();
        setUser(user);
      } catch(error) {

      }

      setLoading(false);
    }

    const authToken = sessionStorage.getItem('TMA_AUTH_TOKEN')

    if (!authToken) {
      setLoading(false);
      return;
    }

    fetchData();
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;
