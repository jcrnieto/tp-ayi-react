import React from 'react';
import './footer.css'


export default function Footer() {
  const thisYear = new Date().getFullYear();

  return (
    <footer  className="footer">© Copyright {thisYear} | <strong>Juan Cruz Nieto</strong> | Programming with ❤</footer>
  )
}