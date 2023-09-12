import image from './desktop-wallpaper-dark-blue-navy-blue.jpg';

export default function HomePage() {
  return (
    <div className="home-page container text-center">
      <div class="card home-card bg-dark text-white">
        <img src={image} className="home-card-img card-img" alt="image"/>
        <div className="card-img-overlay">
          <h5 className="card-title">RHYTHMIX</h5>
          <p className="card-text">This is your ultimate destination for exploring the complete discographies of your favorite music artists. 
            Whether you're a dedicated music enthusiast or just looking to discover new sounds, our platform offers 
            a comprehensive and user-friendly experience to satisfy your musical curiosity.<br></br><br></br>
            Whether you're a die-hard music connoisseur or just dipping your toes into the world of an artist, Rhythmix 
            is your go-to platform for discovering, exploring, and connecting with your favorite artists and their music. 
            Sign up today and embark on a musical journey like never before.</p><a href="/search" className="btn btn-primary">Start Here</a>
        </div>
      </div>
    </div>
  )
}