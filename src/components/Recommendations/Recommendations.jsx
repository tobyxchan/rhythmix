import { Link } from 'react-router-dom';
import { Container, Row, Card } from 'react-bootstrap';
import './Recommendations.css';

export default function Recommendations({ recommendations }) {
  return (
    <Container className="album-container">
    <h2 className="top-text display-5 text-white text-center"><strong>Recommendations from Rhythmix Users</strong></h2>
    <Row className="text-center mx-2 row row-cols-3">
      {recommendations.map((album, index) => {
        return (
          <Card className="rec-album-card mx-auto shadow-lg">
            <Link to={`/albums/${album.name}`} state={album} className="album-link">
              <Card.Img src={album.images[0].url} />
            </Link>
            <Card.Body>
              <Card.Title>{album.name}</Card.Title>
              <Card.Text>{album.release_date.slice(0, 4)}</Card.Text>
            </Card.Body>
          </Card>
        )
      })}
    </Row>
  </Container>
  )
}