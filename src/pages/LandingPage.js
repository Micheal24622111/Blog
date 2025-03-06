import React from 'react';
import GridTable from './GridTable';
import Discover from './Discover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Latest from './Latest';

const handleClick = () => { window.location.href = "https://www.github.com"; };
const LandingPage = () => {
  return (
    
    <div className='overall'>
      
    <div className="masthead">
        
      
{/* Wellcome section Content */}



        <div className="container">
     

      <h1>Welcome to X-Tech Blog!
          </h1>
          
          <div className='Well'>
            
          <div className='land'> Your Premier Destination for Tech Solutions </div>
            
          </div>
          
           {/* <button > Explore My Work</button> */}
          <div> <button type="button" onClick={handleClick}> Explore My Work</button> </div>
        </div>

        <Discover/>
         
        
{/* Wellcome section Content */}
        
{/* About Section Content */}
       
      </div>
      <div className='About'>

        <GridTable />
        
        <Latest />
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
      
      <footer class="site-footer">
  <p>&copy; 2025 Micheal Kiishi. All rights reserved.</p>
</footer>

          

    </div>

    

  );
};

export default LandingPage;


// const apiUrl = process.env.REACT_APP_API_URL;
// const apiKey = process.env.REACT_APP_API_KEY;

// console.log(apiUrl, apiKey); // Outputs the values of the environment variables
