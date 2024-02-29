import './Home.css';
import ImageLoop from '../components/ImageLoop';
import { motion } from "framer-motion";

function Home() {

  function openMail() {
    console.log("Click mail");
    window.location.href = 'mailto:test@example.com?subject=Testing out mailto!&body=This is only a test!';
  }

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
        <ImageLoop/>
      </div>

      <footer>
        <motion.h2
          whileHover={{
            scale: 1.2
          }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
          onClick={openMail}
        >
          Kontakt
        </motion.h2>
      </footer>
    </div>
  );
}

export default Home;
