import React from 'react';


const Discover = () => {
    return ( 
<div >  


        <p className='Disc'>
            <h4>Discover the Latest Trends</h4>

 The tech industry moves at a lightning pace, with new advancements and trends emerging almost daily. Here,
  you'll find insightful articles on the latest developments in software engineering, artificial intelligence, cybersecurity, and more. From groundbreaking innovations to practical applications,
  I aim to keep you informed and inspired by what's happening at the cutting edge of technology.
</p>           
    </div>
  );
};

export default Discover;



const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

// Use these variables in your application
console.log(apiUrl, apiKey);
