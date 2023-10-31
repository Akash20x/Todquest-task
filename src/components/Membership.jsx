import SunglassesBanner from "../assets/banner2.png"
import Membership1 from "../assets/membership1.png"
import Membership2 from "../assets/membership2.png"
import Membership3 from "../assets/membership3.png"
import Membership4 from "../assets/membership4.png"
import SliderContainer from "./SliderContainer";


const Membership = () => {
  return (
    <div>
        <img src={SunglassesBanner} width={860} height={212} alt="Sunglasses Banner" className="rounded-2xl p-4 mx-auto" />
        <div className="my-8">
            <h1 className="text-blue-dark font-metropolis tracking-wider font-semibold text-3xl leading-6 text-center">
                Popular Membership
            </h1>
            <div className="h-1 w-[5.5rem] cursor-pointer rounded-3xl bg-red-dark mx-auto my-4"></div>

            <SliderContainer>
                {Array(3).fill().map((_, slideIndex) => (
                    <div key={slideIndex} className="px-3 my-2 !flex justify-center w-full outline-none">
                        <div className="flex flex-wrap justify-center mt-8 gap-4 mx-10" key={slideIndex}>
                            <img src={Membership1} width={420} height={420} alt="Membership Image 1" />
                            <img src={Membership2} width={420} height={420} alt="Membership Image 2" />
                            <img src={Membership3} width={420} height={420} alt="Membership Image 3" />
                            <img src={Membership4} width={420} height={420} alt="Membership Image 4" />
                        </div>
                    </div>
                ))}
            </SliderContainer>
        </div>
    </div>
  )
}

export default Membership
