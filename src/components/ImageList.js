import React from "react";

const ImageList = ({ images }) => {
  return (
    <div>
      {images.map(({id,description,urls}) => {
        return <img alt={description} key={id} src={urls.regular} />;
      })}
    </div>
  );
};

export default ImageList;
