import React from 'react';
import GridTable from './GridTable';
import Discover from './Discover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const LandingPage = () => {
  return (
    
    <div>
      
    <div className="masthead">
        
      
{/* Wellcome section Content */}
        
        <div className="container">
     
      <h1>Welcome to X-Tech Blog!
          </h1>
          
        <div className='Well'>
        <h2>
        In a world that's constantly evolving, the landscape of technology and software development stands at the forefront of innovation and transformation. Hello, and welcome to my tech blog! My name is Mr X. , and I'm thrilled to have you join me on this digital adventure. Technology is more than just a career or a hobby; it's a passion that drives me to explore, learn, and share my knowledge with others. Whether you're a seasoned developer, a tech enthusiast, or a curious newcomer, this blog is your gateway to the fascinating world of coding, software development, and beyond.


            </h2>     

            
      {/* <img src={`${process.env.PUBLIC_URL}/images/blog.jpg`} alt="Blog" /> */}
     
          </div>
          
          <Discover/>
          <button > Explore My Work</button>

          
        </div>
        
{/* Wellcome section Content */}
        
{/* About Section Content */}
       
      </div>
      <div className='About'>

      <GridTable />
      </div>

      <footer>
        <div className='foot'>
        <div>
      <h5>Follow Us</h5>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://X.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </div> 
          <div className="support-contact">
        <h4>Support Contact</h4>
        <p>Email: M-techworld@Outlook.com</p>
            <p>Phone: (234) 456-7890</p>
            
           
    </div>
   
   
    <div className="feedback-form">
        <h4>Feedback</h4>
        <form action="/submit-feedback" method="post">
            
            
          
            
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            
            <button type="submit">Submit Feedback</button>
  
        </form>
          </div>
          </div>

          </footer>
          

    </div>

    

  );
};

export default LandingPage;