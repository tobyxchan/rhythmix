import { Container, Row, Card } from 'react-bootstrap';

export default function AlbumCard({ albums }) {
    return (
        <Container>
        <Row className="mx-2 row row-cols-4">
          {albums.map((album, index) => {
            return (
              <Card>
                <Card.Img src={album.images[0].url} />
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