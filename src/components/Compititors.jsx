import { useState } from "react";
import Card from "./Card";
import data from '../data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Competitors = () => {
  const [items, setItems] = useState(data);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 950,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="max-w-[80vw]">
      <h1 className="text-2xl p-2 mb-3">Competitors</h1>
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className="mt-10">
            <Card item_id={item.id} item_image={item.image}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Competitors;
