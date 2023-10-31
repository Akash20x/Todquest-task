import Banner from "../assets/banner.png"
import SliderContainer from "./SliderContainer";

const bannerList = [
    { image: Banner },
    { image: Banner },
    { image: Banner },
  ]

const Hero = () => {

  return (
    <div className="mb-16">
        <SliderContainer>
            {bannerList.map((item, index) => (
                <div className="px-3 my-2 !flex justify-center w-full outline-none" key={index}>
                    <img
                        src={item.image}
                        height={400}
                        width={800}
                        alt="Banner Image"
                        className="rounded-32"
                    />
                </div>
            ))}
        </SliderContainer>
  </div>
  )
}

export default Hero
