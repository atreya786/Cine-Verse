import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Suggestions from "./components/Suggestions/Suggestions";
import Trending from "./components/Trending/Trending";
import CarouselBS from "./components/Carousel/CarouselBS";
import Body from "./components/Body/Body";
import arr from "./data";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(true);
  };

  return (
    <div className="App">
      <Navbar />
      {show === false ? (
        <>
          <Banner onClick={handleClick} />
          <Suggestions />
          {/* <Trending /> */}
          <CarouselBS />
        </>
      ) : (
        <div className="cards">
          {arr.map((el) => (
            <Body
              name={el.name}
              image={el.image}
              director={el.director}
              genre={el.genre}
              collection={el.box_office_collection}
              rating={el.rating}
              release={el.year_of_release}
            />
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
