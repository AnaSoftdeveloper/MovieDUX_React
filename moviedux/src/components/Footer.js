import React from 'react';
import '../styles.css';

export default function Footer(){
    const currentYear = new Date().getFullYear();
    return(
          <footer className='footer'>
            <p>
            &#169; {currentYear} Moviedux, all rights reserved.
            </p>
          </footer>
    );
}