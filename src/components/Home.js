import React from 'react';

export default function Home() {
  const backgroundImage = 'url("images/background.jpg")';
  const backgroundStyle = {
    backgroundImage: backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh', // Set the height of the component to full viewport height
    position: 'relative', // Add position:relative to make absolute positioning work
  };
  const mainTextStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
    fontFamily: 'cursive',
    fontSize: '26px',
    fontWeight: 'bold',
    textAlign: 'left', // Align the text to the left
    // Add any other text styles you want
  };

  const logoStyle = {
    width: '60px', // Set the width of the logo image
    marginRight: '10px', // Adjust the value to set the space between the logo and text
    verticalAlign: 'middle', // Align the logo vertically with the text
    display: 'inline-block', // Allow the logo and text to be on the same line
  };

  const subTextStyle = {
    position: 'absolute',
    top: '50%', // Move the text to the center vertically
    left: '20px',
    transform: 'translateY(-50%)', // Move the text up by half of its own height
    color: 'white',
    fontFamily: 'cursive',
    fontSize: '20px',
    fontWeight: '20px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add a text shadow for the shiny effect
    textAlign: 'left', // Align the text to the left
    // Add any other text styles you want
  };

  const buttonStyle = {
    position: 'absolute',
    bottom: '20px', // Adjust the value to set the distance between the button and the bottom
    left: '120px',
    background: 'transparent',
    color: 'white',
    border: '2px solid white',
    borderRadius: '8px',
    padding: '10px 20px',
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    // Add any other button styles you want
  };

  return (
    <>
      <div className="container-fluid" style={backgroundStyle}>
        <div>
          <div style={{ ...mainTextStyle, top: '20px' }}>
            <img src="images/travel.png" alt="" style={logoStyle} />
            Explore with Usman
          </div>
          <div style={{ ...subTextStyle, top: '50%', fontSize: '26px', textShadow: 'none' }}>
            Travel Around the Globe with us!
          </div>
          <button style={buttonStyle}>Book Trip</button>
        </div>
      </div>
      
    </>
  );
}
