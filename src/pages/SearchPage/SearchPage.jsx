import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import AlbumCard from '../../components/AlbumCard/AlbumCard';

// Spotify API Details
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export default function SearchPage() {
  const [accessToken, setAccessToken] = useState('');
  const [albums, setAlbums] = useState([]);

  // API Request Payload
  useEffect(() => {
    // API Access Token
    let authParameters = {
      method: 'POST',
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    // Fetch using above parameters
    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))
  // Run only when page is first loaded
  }, []);
  

  return (
    <div className="App">
      <SearchBar accessToken={accessToken} setAlbums={setAlbums} />
      {/* Display List of Albums */}
      <AlbumCard albums={albums} />
    </div>
  );
}