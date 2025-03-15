import '../index.css';
import tv from '../assets/tv.png';
import '../App.css';
import logo from '../assets/logo.png';



function AboutUs() {
  return (
    <div>
      <img src={logo} alt='logo' className='logo'></img>
      <div className='about-screen'>
        
        <img src={tv} alt="tv" className="tv-image" />
      
        <h1>About Us</h1>
        <p>We are a group of developers who love to code.</p>
      </div>
      
    </div>
  );
}
export default AboutUs;