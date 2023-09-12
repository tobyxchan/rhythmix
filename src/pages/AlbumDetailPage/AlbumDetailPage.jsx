import { Container, Card } from 'react-bootstrap';
import './AlbumDetailPage.css';

export default function AlbumDetailPage({ albums }) {

  return (
    <>
      <div className="home-page container text-center">
        <Card className="album-detail-card shadow-lg">
          <Card.Body>
          <Card.Title>Album Name</Card.Title>
          <Card.Text>Album Information</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <a href="/search" className="btn btn-primary back-btn">Back to Search</a>
    </>
  )
}