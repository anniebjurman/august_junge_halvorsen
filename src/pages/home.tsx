// import Slideshow from '../components/Slideshow';
import './home.css';
import { motion } from "framer-motion";

function Home() {

  function openMail() {
    console.log("Click mail");
    window.location.href = 'mailto:test@example.com?subject=Testing out mailto!&body=This is only a test!';
  }

  return (
    <motion.div
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .75 }}
    >

      <div id='header'>
        <div id='letters'>
          <h1>A</h1>
          <h1>J</h1>
          <h1>H</h1>
        </div>
      </div>

      <div id='body'>
        <div id='infoContainer'>
          <h2>arkitekt august junge halvorsen.</h2>
          <motion.div
            id='contactBox'
            whileHover={{
              scale: 1.04
            }}
            onClick={openMail}
          >
            <h2 id='contact'>
              kontakt
            </h2>
          </motion.div>
        </div>

        <div id='slideshowCont' style={{backgroundImage: `url(./images/img1.jpg)`}}>
          {/* <img src='./images/img1.jpg' alt='hej'/> */}
        </div>
        {/* <Slideshow/> */}

      </div>
    </motion.div>
  );
}

export default Home;
