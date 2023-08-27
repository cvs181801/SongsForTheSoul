import NavBar from './components/navBar/NavBar'
import Hero from './components/hero/Hero'
import Schedule from './components/schedule/Schedule';
import Listen from './components/listen/Listen'
import AboutMe from './components/aboutMe/AboutMe'
import Youtube from './components/youtube/Youtube'
import Instagram from './components/instagram/Instagram';
import Footer from './components/footer/Footer'
import ContactForm from './components/contactForm/ContactForm';
import ContactButton from './components/contactButton/ContactButton';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Hero/>
        <ContactButton/>
        <ContactForm/>
          <div
            className="flowContainer"
          >
            <Schedule/>
            <AboutMe/>
          </div>
        <Listen/>
        <Youtube/>
        <Instagram/>
        <Footer/>
    </div>
  );
}

export default App;


//make modal bogger on larger screen sizes?
//why isn't netlify forms emailing her the messages?
//how to use material ui//backgroundbaackdrop for modal and make it 70% screen width or something 
//make the text on the book now button bigger on larger scrn size 
//make the quote bigger on larger screen size 