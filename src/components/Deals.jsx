import Amazon from "../assets/amazon.svg"
import Card from "./Card";
import SliderContainer from "./SliderContainer";


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



const Deals = () => {
  return (
    <div className="my-28">
        <h1 className="text-blue-dark font-metropolis tracking-wider font-semibold text-3xl leading-6 text-center">
        Deals Of The Day
        </h1>
        <div className="h-1 w-[5.5rem] cursor-pointer rounded-3xl bg-red-dark mx-auto my-4"></div>

        <SliderContainer>
            {Array(3).fill().map((_, slideIndex) => (
                <div key={slideIndex} className="px-3 my-2 !flex justify-center w-full outline-none">
                    <div className="flex flex-wrap justify-center mt-8 gap-4 mx-10" key={slideIndex}>
                        {cards.map((card, cardIndex) => (
                            <Card key={cardIndex} {...card} />
                        ))}
                    </div>
                </div>
            ))}
        </SliderContainer>
    </div>
  )
}

export default Deals
