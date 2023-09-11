import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../NavBar/NavBar';
import SearchPage from '../../pages/SearchPage/SearchPage';
import AuthPage from '../../pages/AuthPage/AuthPage';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <NavBar />
      { user ?
        <Routes>
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        :
        <AuthPage />
      }
    </div>
  );
}
