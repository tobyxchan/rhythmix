import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../NavBar/NavBar';
import SearchPage from '../../pages/SearchPage/SearchPage';
import AuthPage from '../../pages/AuthPage/AuthPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className="App">
      { user ?
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/" element={<SearchPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </div>
  );
}
