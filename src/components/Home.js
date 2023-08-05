import React from 'react';

export default function Home() {
  const backgroundImage = 'url("images/background.jpg")';
  const backgroundStyle = {
    backgroundImage: backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '500px', // Set the height of the component to full viewport height
    position: 'relative', // Add position:relative to make the absolute positioning work
  };
  const textStyle = {
    position: 'absolute',
    top: '2px',
    left: '20px',
    color: 'white',
    fontFamily: "'cursive'",
    fontSize: '26px',
    fontWeight: 'bold',
    display: 'flex', // Display the logo and text in a flex container
    alignItems: 'center', // Center the content vertically
    // Add any other text styles you want
  };

  const logoStyle = {
    width: '60px', // Set the width of the logo image
    marginRight: '10px', // Adjust the value to set the space between the logo and text
  };

  return (
    <>
      <div className="container-fluid" style={backgroundStyle}>
        <div className="row">
          <div className="col-md-12">
            <img src="images/travel.png" alt="" style={{ display: 'none' }} />
            <div style={textStyle}>
              <img src="images/travel.png" alt="" style={logoStyle} />
              Explore with Usman
            </div>
            {/* Your content here */}
          </div>
        </div>
      </div>
    </>
  );
}
