import React, { useState } from 'react';
import '../css/login.css';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
      }

  return(
    <div className="content">
    <div className="form-box-login">
      <h3>Tervetuloa tutkimaan Hennan Harkka-Dashboardia!</h3>
      <br></br>
      <h2>Ole hyvä ja rekisteröidy ensin</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Käyttäjätunnus</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Salasana</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button className="nextBtn-login" type="submit">Lähetä</button>
        </div>
      </form>
    </div>
    </div>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }