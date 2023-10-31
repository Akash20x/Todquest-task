/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Amazon from "../assets/amazon.svg"
import Fashion from "../assets/fashion.svg"
import Food from "../assets/food.svg"
import BeautyCare from "../assets/beauty-care.svg"
import Toys from "../assets/toys.svg"
import Cloud from "../assets/hosting.svg"
import Gaming from "../assets/gaming.svg"
import Phones from "../assets/mobile.svg"
import Travel from "../assets/travel.svg"
import Movies from "../assets/movies.svg"
import CategoryCard from './CategoryCard';
import Slider from "react-slick";
import '../slick.css'

const cards = [
    { 
     image: Amazon,
     name: 'Amazon',
     text: 'Flat 30% Off',
     btnText: 'Grab Now',
    },
    { 
     image: Amazon,
     name: 'Amazon',
     text: 'Flat 30% Off',
     btnText: 'Grab Now',
    },
    { 
     image: Amazon,
     name: 'Amazon',
     text: 'Flat 30% Off',
     btnText: 'Grab Now',
    },
    { 
     image: Amazon,
     name: 'Amazon',
     text: 'Flat 30% Off',
     btnText: 'Grab Now',
    },
  ];




const Category = () => {

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
    <div className='category-container py-6'>
        <h1 className="text-blue-dark font-metropolis tracking-wider font-semibold text-3xl leading-6 text-center">
            Coupon By Categories
        </h1>
        <div className="h-1 w-[5.5rem] mb-10 cursor-pointer rounded-3xl bg-red-dark mx-auto my-4"></div>
   
        <div className='pb-10 bg-white w-[44rem] mx-auto'>
            <div className="flex justify-center gap-1 category-container">
                {/* Categories Tabs  */}
                <div 
                    className={`flex flex-col justify-center items-center gap-3 py-2  hover:bg-white px-3 rounded-lg  hover:shadow-tabs cursor-pointer bg-white rounded-bl-none rounded-br-none ${activeTab===1 ? ' border-b-4 border-red-dark' : null} `} 
                    onClick={() => handleTabClick(1)}>
                    <img src={Fashion} className="h-9 w-9" alt="Fashion Icon" />
                    <span className={`text-black-primary font-metropolis font-medium text-base leading-[12px]`}>
                        Fashion
                    </span>
                </div>

                <div 
                    className={`flex flex-col justify-center items-center gap-3 py-2  hover:bg-white px-3 rounded-lg  hover:shadow-tabs cursor-pointer bg-white rounded-bl-none rounded-br-none ${activeTab===2 ? ' border-b-4 border-red-dark' : null} `} 
                    onClick={() => handleTabClick(2)}>
                        <img src={Food} className="h-9 w-9" alt="Food Icon" />
                        <span className={`text-black-primary font-metropolis font-medium text-base leading-[12px] px-2`}>
                            Food
                        </span>
                </div>

                <div 
                    className={`flex flex-col justify-center items-center gap-3 py-2  hover:bg-white px-3 rounded-lg  hover:shadow-tabs cursor-pointer bg-white rounded-bl-none rounded-br-none ${activeTab===3 ? ' border-b-4 border-red-dark' : null} `} 
                    onClick={() => handleTabClick(3)}>
                        <img src={BeautyCare} className="h-9 w-9" alt="Beauty Care Icon" />
                        <span className={`text-black-primary font-metropolis font-medium text-base leading-[12px]`}>
                            Beauty
                        </span>
                </div>

                <div 
                    className={`flex flex-col justify-center items-center gap-3 py-2  hover:bg-white px-3 rounded-lg  hover:shadow-tabs cursor-pointer bg-white rounded-bl-none rounded-br-none ${activeTab===4 ? 'border-b-4 border-red-dark' : null} `} 
                    onClick={() => handleTabClick(4)}>
                        <img src={Toys} className="h-9 w-9" alt="Toys Icon" />
                        <span className={`text-black-primary font-metropolis font-medium text-base leading-[12px] px-2 `}>
                            Toys
                        </span>
                </div>


                <div 
                    className={`flex flex-col justify-center items-center gap-3 py-2  hover:bg-white px-3 rounded-lg  hover:shadow-tabs cursor-pointer bg-white rounded-bl-none rounded-br-none ${activeTab===5 ? 'border-b-4 border-red-dark' : null} `} 
                    onClick={() => handleTabClick(5)}>
                        <img src={Cloud} className="h-9 w-9" alt="Cloud Icon" />
                        <span className={`text-black-primary font-metropolis font-medium text-base leading-[12px] px-[3px]`}>
                            Cloud
                        </span>
                </div>

                <div 
                    className={`flex flex-col justify-center items-center gap-3 py-2  hover:bg-white px-3 rounded-lg  hover:shadow-tabs cursor-pointer bg-white rounded-bl-none rounded-br-none ${activeTab===6 ? ' border-b-4 border-red-dark' : null} `} 
                    onClick={() => handleTabClick(6)}>
                        <img src={Gaming} className="h-9 w-9" alt="Gaming Icon" />
                        <span className={`text-black-primary font-metropolis font-medium text-base leading-[12px]`}>
                            Gaming
                        </span>
                </div>

                <div 
                    className={`flex flex-col justify-center items-center gap-3 py-2  hover:bg-white px-3 rounded-lg  hover:shadow-tabs cursor-pointer bg-white rounded-bl-none rounded-br-none ${activeTab===7 ? ' border-b-4 border-red-dark' : null} `} 
                    onClick={() => handleTabClick(7)}>
                        <img src={Phones} className="h-9 w-9" alt="Phones Icon" />
                        <span className={`text-black-primary font-metropolis font-medium text-base leading-[12px]  px-2`}>
                            Phones
                        </span>
                </div>

                <div 
                    className={`flex flex-col justify-center items-center gap-3 py-2  hover:bg-white px-3 rounded-lg  hover:shadow-tabs cursor-pointer bg-white rounded-bl-none rounded-br-none ${activeTab===8 ? ' border-b-4 border-red-dark' : null} `} 
                    onClick={() => handleTabClick(8)}>
                        <img src={Travel} className="h-9 w-9" alt="Travel Icon" />
                        <span className={`text-black-primary font-metropolis font-medium text-base leading-[12px] px-2`}>
                            Travel
                        </span>
                </div>

                <div 
                    className={`flex flex-col justify-center items-center gap-3 py-2  hover:bg-white px-3 rounded-lg  hover:shadow-tabs cursor-pointer bg-white rounded-bl-none rounded-br-none ${activeTab===9 ? 'border-b-4 border-red-dark' : null} `} 
                    onClick={() => handleTabClick(9)}>
                        <img src={Movies} className="h-9 w-9" alt="Movies Icon" />
                        <span className={`text-black-primary font-metropolis font-medium text-base leading-[12px]`}>
                            Movies
                        </span>
                </div>

            </div>

            <Slider
                {...settings}
                arrows={false}
                className="flex items-stretch justify-items-stretch mt-4"
                >
                    {Array(3).fill().map((_, slideIndex) => (
                        <div key={slideIndex} className="px-3 !flex justify-center w-full outline-none">
                            <div className="flex w-[44rem] mx-auto justify-center mt-[-1px] bg-white" key={slideIndex}>
                                {cards.map((card, cardIndex) => (
                                    <CategoryCard key={cardIndex} {...card} />
                                ))}
                            </div>
                        </div>
                    ))}
            </Slider>

        </div>

    </div>
  )
}

export default Category
