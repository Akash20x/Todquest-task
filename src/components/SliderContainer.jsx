/* eslint-disable react/prop-types */
import Slider from "react-slick";
import '../slick.css'


const SliderContainer = ({ children }) => {


    const settings = {
        dots: true,
        customPaging: function () {
          return (
            <a className="">
              <span className="mx-2 rounded-l-full  rounded-r-full h-[14px] w-7 block cursor-pointer transition-all "></span>
            </a>
          );
        },
        dotsClass: "slick-dots w-max absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };


  return (
    <>
    <Slider
      {...settings}
      arrows={false}
      className="flex items-stretch justify-items-stretch mt-4"
    >
        { children }
    </Slider>
  </>
  )
}

export default SliderContainer
