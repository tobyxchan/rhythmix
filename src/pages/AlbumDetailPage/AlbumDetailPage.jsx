import { useLocation } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import './AlbumDetailPage.css';

export default function AlbumDetailPage() {
  // Initialize Album
  const location = useLocation();
  const album = location.state;
  
  // Make Date Readable
  function formatReleaseDate() {
    const releaseDate = album.release_date;
    return releaseDate.slice(0,10).split('-').reverse().join('/')
  }
  const albumReleaseDate=formatReleaseDate();

  // Spotify Link for Album
  function getSpotifyAlbumLink() {
    const internalAlbumLink = album.external_urls.spotify;
    console.log(`Spotify API returns album url: ${internalAlbumLink}`);
    return internalAlbumLink;
  }
  const albumLink = getSpotifyAlbumLink();

  // Spotify Link for Artist
  function getSpotifyArtistLink() {
    const internalArtistLink = album.artists[0].external_urls.spotify;
    console.log(`Spotify API returns artist url: ${internalArtistLink}`);
    return internalArtistLink;
  }
  const artistLink = getSpotifyArtistLink();

  return (
    <div className="main">
      <Card className="album-detail-card container shadow-lg mx-auto">
        <div className="row">
          <div className="col">
            <Card.Img src={album.images[0].url} className="detail-image"/>
          </div>
          <div className="col">
            <Card.Body className="detail-text">
              <span></span>
              <Card.Title><strong>{album.name}</strong></Card.Title>
              <Card.Text>By {album.artists[0].name}</Card.Text>
              <Card.Text>Released: {albumReleaseDate}</Card.Text>
              <Card.Text>Tracks: {album.total_tracks} Songs</Card.Text>
              <a href={albumLink} target="_blank" className="btn btn-success spotify-btn">View Album on Spotify</a>
              <a href={artistLink} target="_blank" className="btn btn-success spotify-btn">View Artist on Spotify</a>
            </Card.Body>
          </div>
        </div>
      </Card>
    <a href="/search" className="btn btn-primary back-btn">Back to Search</a>
    </div>
  )
}