import React from 'react';

export default function Footer() {
  const footerStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)', /* Gradient colors */
    color: 'white',
    padding: '10px 0',
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center', // Center the text horizontally
  };

  return (
    <footer style={footerStyle}>
      Avail Discount: 30% Off Bookings from July to August
    </footer>
  );
}
