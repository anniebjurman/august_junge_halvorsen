import './Home.css';
import Carousel from '../components/Carousel';

function Home() {

  return (
    <div className="home">

      <div className="header_desktop">
        <div className='h_part h_start'>
            <h1>August</h1>
        </div>
        <div className='h_part h_middle'>
            <h1>Junge</h1>
        </div>
        <div className='h_part h_end'>
            <h1>Halvorsen</h1>
        </div>
      </div>

      <div className='header_mobile'>
        <h1>August</h1>
        <h1>Junge</h1>
        <h1>Halvorsen</h1>
      </div>

      <div className='body'>
        <Carousel />
      </div>

      <footer>
        <h2>Kontakt</h2>
      </footer>
    </div>
  );
}

export default Home;
