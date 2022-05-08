import React, { useEffect, useState } from 'react';
import MessageContainer from '../../components/MessageContainer/MessageContainer';
import TableContainer from '../../components/TableContainer/TableContainer';

const Home = () => {

  const [isAdmin, setIsAdmin] = useState(false);

  const [allUsers, setAllUsers] = useState(); 

  const user = JSON.parse(localStorage.getItem('profile'));
  useEffect(() => {
    setAllUsers(user.allUsers);
    if(user?.result.email === "admin@admin.com" && user?.result.mobile === "0000000000") {
      setIsAdmin(true);
    }else {
      setIsAdmin(false);
    }
  }, [user?.result?.email, user?.result?.mobile])

  return (
    <>
    {
      isAdmin ? <TableContainer allUsers={allUsers}/> : <MessageContainer />
    }
    </>
  )
}

export default Home;