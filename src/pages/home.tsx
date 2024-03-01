import './Home.css'
import { motion } from "framer-motion";

function Home() {

  function openMail() {
    console.log("Click mail");
    window.location.href = 'mailto:test@example.com?subject=Testing out mailto!&body=This is only a test!';
  }

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .75 }}
    >

      <div className='header'>
        <h1>A<br />J<br />H</h1>
      </div>

      <div className='body'>
        <motion.div
          className='contactBox'
          whileHover={{
            scale: 1.1
          }}
          onClick={openMail}
        >
          <h2 className='contact'>
            kontakt.
          </h2>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;
