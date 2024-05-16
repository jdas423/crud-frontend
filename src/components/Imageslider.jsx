import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../assets/images/img1.svg"
import Img2 from "../assets/images/img2.svg"
import Img3 from "../assets/images/img3.svg"
import Img4 from "../assets/images/img4.svg"
import Img5 from "../assets/images/img5.svg"


export default function Imageslider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay:true,
    arrows:false,
    autoplaySpeed:2000,
    pauseOnHover:true,
    
  };

  return (
    <div className="image-slider">
      <Slider {...settings}>
        <div className="w-full h-full"> 
          <img src={Img1} className="w-full h-[550px]  max-sm:h-[300px]" alt="img1" />
        </div>
        <div className="w-full h-full">
        <img src={Img2} className="w-full h-[550px] max-sm:h-[300px]" alt="img2" />
        </div>
        <div className="w-full h-full">
        <img src={Img3} className="w-full h-[550px] max-sm:h-[300px]" alt="img3" />
        </div>
        <div className="w-full h-full">
        <img src={Img4} className="w-full h-[550px] max-sm:h-[300px]" alt="img4" />
        </div>
        <div className="w-full h-full">
        <img src={Img5} className="w-full h-[550px] max-sm:h-[300px]" alt="img4" />
        </div>
      </Slider>
    </div>
  );
}
