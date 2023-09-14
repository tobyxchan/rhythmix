import { useLocation } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import './AlbumDetailPage.css';

export default function AlbumDetailPage() {
  // Initialize Album
  const location = useLocation();
  const album = location.state;
  const detail = album.href;
  
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

  function log() {
    console.log(detail);
  }

  // Create Embed Link for Album Player
  const embedLink = 'https://open.spotify.com/embed/album/' + album.id + '?utm_source=generator';

  return (
    <div className="main">
      <Card className="album-detail-card container shadow-lg mx-auto">
        <div className="row">
          <div className="col">
            <iframe 
              className="embed"
              src={embedLink}
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="col">
            <Card.Body className="detail-text">
              <span></span>
              <Card.Title className="display-5"><strong>'{album.name}'</strong></Card.Title>
              <Card.Text>By {album.artists[0].name}</Card.Text><br></br>
              <span></span>
              <Card.Text>This album was released on {albumReleaseDate} with a total of {album.total_tracks} songs. Use the player to have a listen and open it on Spotify using the buttons below to view the artist or add it to your library!</Card.Text>
              <button target="_blank" className="btn btn-primary spotify-btn">Add To Liked Albums</button>
              <a href={albumLink} target="_blank" className="btn btn-success spotify-btn">Open Album on Spotify</a>
              <a href={artistLink} target="_blank" className="btn btn-success spotify-btn">View Artist on Spotify</a>
            </Card.Body>
          </div>
        </div>
      </Card>
    <a href="/search" className="btn btn-secondary back-btn">Back to Search</a>
    </div>
  )
}