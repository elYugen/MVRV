import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Loading from '../Loading/Loading'
import styles from './Register.module.css';

function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [created, setCreated] = useState(false)
  const navigate = useNavigate();

  const handleSaveNewUser = () => {
    const data = {
      username, email, password 
    }
    setCreated(true)
    axios.post('http://localhost:5555/users', data)
    .then(() => {
      navigate('/')
    })
    .catch((error) => {
      console.log(error);  
    })
  }



  return (
    <>  
    <div className={styles.registerPage}>
          {created ? (
            <Loading />
          ) : (
            <div className={styles.wrapper}>
            <h2>Créer un compte</h2>

            <div className={styles.inputField}>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              <label>Nom d'utilisateur</label>
            </div>
            <div className={styles.inputField}>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <label>Adresse mail</label>
            </div>
            <div className={styles.inputField}>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <label>Mot de passe</label>
            </div>
            <button onClick={handleSaveNewUser}>Créer un compte</button>
            <div className={styles.register}>
                <p>Tu as déjà un compte ? <a href="login">Connecte toi</a></p>
            </div>
            </div>
          )}
    </div>
        
    </>
  )
}

export default Register