import { useState } from 'react';
import { userContext } from './userContext';
const userContextProvider = () => {
const [currentUser, setCurrentUser] = useState({});
  return (
    <userContext.Provider value={{currentUser, setCurrentUser}}>userContextProvider</userContext.Provider>
  )
}

export default userContextProvider