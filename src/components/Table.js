import React from "react";

const Table = ({ images }) => {
  return (
    <div className="table">
      {images.map((img, index) => (
        <img
          key={index}
          className={`item ${img.a}`}
          src={img.illustration}
          alt=""
        />
      ))}
    </div>
  );
};

export default Table;
