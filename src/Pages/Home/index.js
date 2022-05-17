import React from "react";
import Header from "../../Components/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// Import picture
import createPlantPicture from "../../assets/img/demo/CréationCarrePlant.png";
import createSemis from "../../assets/img/demo/creationsemis.png";
import listPotager from "../../assets/img/demo/potagerList.png";

import "./home.scss";

function Home() {
  return (
    <>
      <Header />
      <section className="home">
        <h2>Démonstration des fonctionalitées de Little Garden</h2>
        <Carousel
          className="main_slide"
          showThumbs={false}
          showIndicators={true}
          showStatus={false}
          showArrows={false}
        >
          <div className="carousel_box">
            <img src={createPlantPicture} />
          </div>
          <div className="carousel_box">
            <img src={createSemis} />
          </div>
          <div className="carousel_box">
            <img src={listPotager} />
          </div>
        </Carousel>
      </section>
    </>
  );
}

export default Home;
