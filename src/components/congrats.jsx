import './congrats.css';
import React, { useEffect } from 'react';

export default function MyComponent() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Redirect to the new route after 5 seconds
      window.location.href = "./home";
    }, 1500);
    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return <div>  <h1 className='congratsText' >Congratulations on your purchase!</h1>
  <h2 className='goingHome'>going back home...</h2>
  <h3 className='hireme'>Since you are here, why not consider hiring us?</h3>
  </div>;
}