import "./home.css";
import { Carousel } from "react-responsive-carousel";
import pants2 from "../assets/Pants/pants-2.png";
import shirts4 from "../assets/Shirts/shirt-4.png";
import shirts1 from "../assets/Shirts/shirt-1.png";
import shoes1 from "../assets/Shoes/shoes-1.png";

export default function Home() {
  return (
    <div>
      <div id="store-title">
        <h1>Sequelizers Apparel
        </h1>
        <h3>Shop around  our latest <small>(data)</small>types of styles!</h3>
      </div>
      <div className="img-carousel">
        <Carousel
          animationHandler="fade"
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          interval={3000}
          stopOnHover={false}
          swipeable={false}
        >
          <div>
            <img src={pants2} alt="pants2" />
          </div>
          <div>
            <img src={shirts4} alt="shirts4" />
          </div>
          <div>
            <img src={shirts1} alt="shirts1" />
          </div>
          <div>
            <img src={shoes1} alt="shoes1" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
