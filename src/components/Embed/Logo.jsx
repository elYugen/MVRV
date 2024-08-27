import React from 'react';


function Logo() {
  const divStyle = {
    width: '150px',
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5px', // Ajoutez une marge si nécessaire
  };

  const imgStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    paddingBottom : '10px',
    paddingTop : '50px',
  };

  const pStyle = {
    fontSize: '8px', // Ajustez la taille de la police selon vos besoins
    textAlign: 'center',
    paddingBottom : '70px',
    margin: '2px 0 0 0',
  };


  return (
    <section>
    </section>
  );
}

export default Logo;