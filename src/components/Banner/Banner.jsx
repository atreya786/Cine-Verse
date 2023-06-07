import React from "react";
import "./Banner.css";

const Banner = (props) => {
  const list = [
    {
      image: "https://images.justwatch.com/icon/207360008/s100/icon.webp",
    },
    {
      image: "https://images.justwatch.com/icon/52449539/s100/icon.webp",
    },
    {
      image: "https://images.justwatch.com/icon/52449539/s100/icon.webp",
    },
    {
      image: "https://images.justwatch.com/icon/52449539/s100/icon.webp",
    },
    {
      image: "https://images.justwatch.com/icon/207360008/s100/icon.webp",
    },
    {
      image: "https://images.justwatch.com/icon/207360008/s100/icon.webp",
    },
    {
      image: "https://images.justwatch.com/icon/207360008/s100/icon.webp",
    },
    {
      image: "https://images.justwatch.com/icon/207360008/s100/icon.webp",
    },
    {
      image: "https://images.justwatch.com/icon/207360008/s100/icon.webp",
    },
    {
      image: "https://images.justwatch.com/icon/207360008/s100/icon.webp",
    },
  ];

  return (
    <div className="banner">
      <h1 className="my-2">
        Your streaming guide for{" "}
        <span>
          <br />
        </span>{" "}
        movies, TV shows & sports
      </h1>
      <p className="my-2">
        Find where to stream new, popular & upcoming entertainment with
        CineVerse.
      </p>
      <div>
        <button className="btn btn-warning btn-lg me-1 my-3">
          Watch Movies & Shows
        </button>
        <button className="btn btn-dark btn-lg ms-1 my-3" onClick={props.onClick}>See more</button>
      </div>
      <h4>Streaming services on JustWatch</h4>
      <div className="platforms">
        {/* {list.map((el) => {
          <img src={el.image} />;
        })} */}
        {/* <img src="https://images.justwatch.com/icon/207360008/s100/icon.webp" alt="" /> */}
      </div>
    </div>
  );
};

export default Banner;
