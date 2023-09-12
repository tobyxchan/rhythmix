import { Container, Row, Card } from 'react-bootstrap';
import './AlbumCard.css'

export default function AlbumCard({ albums }) {
  return (
    <Container className="album-container">
      <Row className="text-center mx-2 row row-cols-3">
        {albums.map((album, index) => {
          return (
            <Card className="album-card shadow-lg mx-auto">
              {/* Click card to go to album detail page */}
              <a href="" className="stretched-link">
                <Card.Img src={album.images[0].url} />
              </a>
              <Card.Body>
                <Card.Title>{album.name}</Card.Title>
                {/* Display just release year of Album */}
                <Card.Text>{album.release_date.slice(0, 4)}</Card.Text>
              </Card.Body>
            </Card>
          )
        })}
      </Row>
    </Container>
  )
};