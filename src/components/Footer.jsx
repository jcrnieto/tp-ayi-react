import React from 'react';
import './style.css'


export default function Footer() {
  const thisYear = new Date().getFullYear();

  return (
    <footer  className="footer">© Copyright {thisYear} | <strong>Juan Cruz Nieto</strong> | Programming with ❤</footer>
  )
}