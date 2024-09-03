import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import styles from './Login.module.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5555/auth/login', { username, password }, { withCredentials: true });
      console.log(response.data);
      login(response.data);
      navigate('/');
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || 'Erreur de connexion');
      } else {
        setError('Erreur de connexion');
      }
      console.error('Error logging in:', error.message);
      console.error(error);
    }
  };

  return (
    <>  
      <div className={styles.registerPage}>
        <div className={styles.wrapper}>
          <h2>Connexion</h2>
          <form onSubmit={handleLogin}>
            <div className={styles.inputField}>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
              <label>Nom d'utilisateur</label>
            </div>
            <div className={styles.inputField}>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <label>Mot de passe</label>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            {loading ? (
              <Loading />
            ) : (
              <button type="submit">Connexion</button>
            )}
            <div className={styles.register}>
              <p>Tu n'as pas un compte ? <a href="register">Créer un compte</a></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
