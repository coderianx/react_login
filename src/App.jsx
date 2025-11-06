import './App.css';
import React from 'react';
import "@fortawesome/fontawesome-free"

function App() {
  return (
    <>
      <div className='navbar'>
        <a href="https://github.com/coderianx">
          <i className='fab fa-github'></i>
        </a>
        <a href="https://t.me/coderian">
          <i className='fab fa-telegram'></i>
        </a>
      </div>
      <div className='container'>
        <div className='register'>
          <h2>Register</h2>
          <label>Username</label>
          <input type="text" name='username' placeholder='Enter Username'/>
          <label>Password</label>
          <input type="password" name="password" placeholder='Enter Password' />
          <button>Register</button>
        </div>
        <div className="login">
        <h2>Login</h2>
          <label>Username</label>
          <input type="text" name='username' placeholder='Enter Username'/>
          <label>Password</label>
          <input type="password" name="password" placeholder='Enter Password' />
          <button>Login</button>
        </div>
      </div>
    </>
  )
}

export default App