import React from 'react';
import ReactLoading from 'react-loading'; // Assuming you're using react-loading package

const ReactLoding = ({ type, color }) => {
  return <ReactLoading type={type} color={color} height={100} width={100} />;
};

export default ReactLoding;