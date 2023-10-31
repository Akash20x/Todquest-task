/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Trophy from "../assets/trophy.svg"
import Timer from "../assets/timer.svg"
import Latest from "../assets/latest.svg"
import CouponCard from "./CouponCard";
import Amazon from "../assets/amazon.svg"
import Slider from "react-slick";
import '../slick.css'

const cards = [

    { 
        title: 'Upto 60% off on Appliances',
        image: Amazon,
        text: 'Upto 60% off on summer Appliances',
        btnText: 'Grab now',
    },
    { 
        title: 'Upto 60% off on Appliances',
        image: Amazon,
        text: 'Upto 60% off on summer Appliances',
        btnText: 'Grab now',
    },
    { 
        title: 'Upto 60% off on Appliances',
        image: Amazon,
        text: 'Upto 60% off on summer Appliances',
        btnText: 'Grab now',
    },
    { 
        title: 'Upto 60% off on Appliances',
        image: Amazon,
        text: 'Upto 60% off on summer Appliances',
        btnText: 'Grab now',
    },
    { 
        title: 'Upto 60% off on Appliances',
        image: Amazon,
        text: 'Upto 60% off on summer Appliances',
        btnText: 'Grab now',
    },
    { 
        title: 'Upto 60% off on Appliances',
        image: Amazon,
        text: 'Upto 60% off on summer Appliances',
        btnText: 'Grab now',
    },
    { 
        title: 'Upto 60% off on Appliances',
        image: Amazon,
        text: 'Upto 60% off on summer Appliances',
        btnText: 'Grab now',
    },
    { 
        title: 'Upto 60% off on Appliances',
        image: Amazon,
        text: 'Upto 60% off on summer Appliances',
        btnText: 'Grab now',
    },
  ];

  

const Coupon = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
      };

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
        afterChange: (current) => {
          setCurrentSlide(current);
          setActiveTab(current+1)
        },
      };


  
  return (
    <div className=" bg-gray-50 pt-4">
        {/* Coupons Categories  */}
        <div className="flex justify-center gap-8">
            <div 
                className={`group flex items-center gap-3 hover:bg-white p-3 rounded-lg hover:shadow-tabs cursor-pointer ${activeTab===1 ? 'bg-white' : null} `} 
                onClick={() => handleTabClick(1)}
            >
                <img src={Trophy} className="h-4 w-4" alt="Trophy Icon" />
                <span className={`text-black-primary font-metropolis font-medium text-base leading-[12px] group-hover:text-red-dark  ${activeTab===1 ? 'text-red-dark ' : null}`}>
                Popular Coupons
                </span>
            </div>

            <div 
                className={`group flex items-center gap-3 hover:bg-white p-3 rounded-lg hover:shadow-tabs cursor-pointer ${activeTab===2 ? 'bg-white' : null}`} 
                onClick={() => handleTabClick(2)}
            >
                <img src={Timer} className="h-4 w-4" alt="Timer Icon" />
                <span className={`text-black-primary font-metropolis font-medium text-base leading-[12px] group-hover:text-red-dark ${activeTab===2 ? 'text-red-dark ' : null}`}>
                Ending Soon
                </span>
            </div>

            <div 
                className={`group flex items-center gap-3 hover:bg-white p-3 rounded-lg hover:shadow-tabs cursor-pointer ${activeTab===3 ? 'bg-white' : null}`} 
                onClick={() => handleTabClick(3)}
            >
                <img src={Latest} className="h-4 w-4" alt="" />
                <span className={`text-black-primary font-metropolis font-medium text-base leading-[12px] group-hover:text-red-dark ${activeTab===3 ? 'text-red-dark ' : null}`}>
                Latest Coupons
                </span>
            </div>

        </div>

        <Slider
        {...settings}
        arrows={false}
        className="flex items-stretch justify-items-stretch mt-4"
        >
            {Array(3).fill().map((_, slideIndex) => (
                <div key={slideIndex} className="px-3 my-2 !flex justify-center w-full outline-none">
                    <div className="flex flex-wrap justify-center mt-8 gap-4 mx-10" key={slideIndex}>
                        {cards.map((card, cardIndex) => (
                            <CouponCard key={cardIndex} {...card} />
                        ))}
                    </div>
                </div>
            ))}
        </Slider>
    </div>
  )
}

export default Coupon
