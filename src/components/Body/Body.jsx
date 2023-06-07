import React from "react";
import "./Body.css";

const Body = ({ name, image, director, collection, rating, genre, release }) => {
  return (
    <>
      <div className="mainBody">
        <div className="card">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body ">
            <h4 className="card-title">{name}</h4>
            <h5 className="card-title">Director : {director}</h5>
            <h5 className="card-title">Box Office Collection : {collection}</h5>
            <h5 className="card-title">Rating : {rating}</h5>
            <h5 className="card-title">Genre : {genre}</h5>
            <h5 className="card-title">Year Of Release : {release}</h5>
            <button className="btn btn-warning btn-sm">Watch</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
