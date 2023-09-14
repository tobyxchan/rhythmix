import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../components/NavBar/NavBar';
import SearchPage from '../SearchPage/SearchPage';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import AlbumDetailPage from '../AlbumDetailPage/AlbumDetailPage';
import LoginForm from '../../components/LoginForm/LoginForm';
import Recommendations from '../../components/Recommendations/Recommendations';

export default function App() {
  const [user, setUser] = useState(getUser());
  const recommendations = [];

  return (
    <div className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/albums/:albumName" element={<AlbumDetailPage recommendations={recommendations} />} />
            <Route path="/recommendations" element={<Recommendations recommendations={recommendations} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </div>
  );
}