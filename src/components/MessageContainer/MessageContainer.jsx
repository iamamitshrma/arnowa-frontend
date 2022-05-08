import React, { useState } from 'react';
import './MessageContainer.css'
import axios from 'axios';

const MessageContainer = () => {

  const user = JSON.parse(localStorage.getItem('profile'));

  const [item, setItem] = useState({
    message: "",
    userId: ""
  });

  const [message, setMessage] = useState(null);

  const handleMessage = (e) => {
    setItem({
      message: e.target.value,
      userId: String(user.result._id)
    });
  }

  const sendMessage = async(e) => {
    e.preventDefault();
    console.log(item);
    const response = await axios.post("http://localhost:5000/postMessage", item);
    setMessage(response);
    console.log(response);
  }

  return (
      <section className='container'>
        {!message ? <span></span> : <span style={{color: "green"}}>Successfully Stored</span>}
        <form onSubmit={sendMessage} className="textContainer">
            <textarea onChange={handleMessage} name="message" id="message" cols="40" rows="20" placeholder='Enter your message'></textarea>
            <button className='btn' type="submit">Message</button>
        </form>
      </section>
  )
}

export default MessageContainer;