import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import AlbumCard from '../../components/AlbumCard/AlbumCard';

// Spotify API Details
const CLIENT_ID = 'fa43ddcc49f5429d9f1c8da9336cd96a';
const CLIENT_SECRET = '6d5166f4f0084e76932937cfebb38f8b';

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