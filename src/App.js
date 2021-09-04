import logo from './logo.svg';
import Navbar from './components/navbar/Navbar.js';
import Hero from './components/hero/Hero.js';
import About from './components/about/About.js';
import Gallery from './components/gallery/Gallery.js'
import Contact from './components/contact/Contact.js';
import Footer from './components/footer/Footer.js';
function App() {
  return (
    <div className="App">
      <>
      <Navbar/>
      <Hero/>
      <About/>
      <Gallery/>
      <Contact/>
      <Footer/>
      </>
    </div>
  );
}

export default App;
