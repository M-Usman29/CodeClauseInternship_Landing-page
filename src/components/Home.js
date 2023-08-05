import React from 'react';

export default function Home() {
  const backgroundImage = 'url("images/background.jpg")';
  const backgroundStyle = {
    backgroundImage: backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh', 
    position: 'relative',
  };
  const mainTextStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
    fontFamily: 'cursive',
    fontSize: '26px',
    fontWeight: 'bold',
    textAlign: 'left', 
  };

  const logoStyle = {
    width: '60px', 
    marginRight: '10px', 
    verticalAlign: 'middle', 
    display: 'inline-block', 
  };

  const subTextStyle = {
    position: 'absolute',
    top: '50%',
    left: '20px',
    transform: 'translateY(-50%)',
    color: 'white',
    fontFamily: 'cursive',
    fontSize: '20px',
    fontWeight: '20px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', 
    textAlign: 'left', 
    
  };

  const buttonStyle = {
    position: 'absolute',
    bottom: '100px',
    left: '120px',
    background: 'transparent',
    color: 'white',
    border: '2px solid white',
    borderRadius: '8px',
    padding: '10px 20px',
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    
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
          Travel around the globe with us <br/> and trust the best! We are proud recipients<br/>  of the 'Best Travel Agency' award <br/> for three consecutive years
          </div>
          <button style={buttonStyle}>Book Trip</button>
        </div>
      </div>
    
      
    </>
  );
}
