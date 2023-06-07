import React from "react";
import "./Suggestions.css";

const Suggestions = () => {
  return (
    <div className="main">
      <div className="card-group">
        <div className="card">
          <img className="cardImage"
            src="https://www.justwatch.com/appassets/img/home/all_in_one_place-comp.png"
            alt=""
          />
          <h4>The complete streaming guide</h4>
          <p>
            Get personal recommendations for all your favorite streaming
            services. We’ll show you where to watch movies, TV shows & sports.
          </p>
        </div>
      </div>
      <div className="card-group">
        <div className="card">
          <img className="cardImage"
            src="https://www.justwatch.com/appassets/img/home/one_search-comp.png"
            alt=""
          />
          <h4>Every platform in one search</h4>
          <p>
          Never go back-and-forth between streaming services again to see if a movie or TV show is available. We’ve got you covered with one search.
          </p>
        </div>
      </div>
      <div className="card-group">
        <div className="card">
          <img className="cardImage"
            src="https://www.justwatch.com/appassets/img/home/one_watchlist-comp.png"
            alt=""
          />
          <h4>Combine all your watchlists</h4>
          <p>
          Create a single watchlist with every movie and TV show you want to watch – covering every streaming service in one list across all your devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
