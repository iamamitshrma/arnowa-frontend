import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import Countdown from 'react-countdown';

const Navbar = () => {

  const [user, setUser] = useState(null);
  const [time, setTime] = useState(0);

  
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
    setTime(user?.result.loginAt);
  }, [time, user?.result.loginAt]);
  



  const navigate = useNavigate();
  
  const logoutHandler = () => {
    localStorage.removeItem('profile');
    navigate('/auth');
    window.location.reload();
  }

const renderer = ({ minutes, seconds, completed }) => {
  if (completed) {
    localStorage.removeItem('profile');
    navigate('/auth');
    window.location.reload();
  } else {
    return <span>{minutes}:{seconds}</span>;
  }
};

  return (
    <section className='navbarContainer'>
        {!user ? <span></span> : <h1>{user?.result.name}</h1>}
        {!user ? <h1>Arnowa Task</h1> : <Countdown date={(Date.parse(time)) + 600000} renderer={renderer}/>}
        {!user ? <span></span> : <button onClick={logoutHandler}>Logout</button>}
    </section>
  )
}

export default Navbar;