import React from "react";

const Img = () => {
  const imagePath = process.env.PUBLIC_URL + '/assets/profile.gif';

  return (
    <img src={imagePath} alt="loading..." />
  );  
};

export default Img;