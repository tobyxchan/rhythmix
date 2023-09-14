import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=fa43ddcc49f5429d9f1c8da9336cd96a&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Please Try Again');
    }
  }

  return (
    <div>
      <div className="row align-items-center">
        <div className="mx-auto col-10 col-md-8 col-lg-4">
          <h1 className="text-center mb-5">Log In</h1>
          <div className="form-container">
            <form autoComplete="off" onSubmit={handleSubmit}>
              <label className="form-label">Email</label>
              <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
              <label className="form-label">Password</label>
              <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
              <button type="submit">LOG IN</button>
            </form>
          </div>
          <p className="error-message">&nbsp;{error}</p>
        </div>
      </div>
      <a href={AUTH_URL} className="btn btn-success d-flex justify-content-center spotify-login">Log In with Spotify</a>
    </div>
  )
}