import Working1 from "../assets/working1.svg"
import Working2 from "../assets/working2.svg"
import Working3 from "../assets/working3.svg"
import BannerImg from "../assets/banner3.png"
import BannerImg2 from "../assets/banner4.png"
import ArrowCirleDown from "../assets/arrow-cirle-down.svg"
import ArrowCirleUp from "../assets/arrow-circle-up.svg"

const data = [
    ["Flight", "Bus", "Entertainment", "Jewellery"],
    ["Medicines", "Hosting", "Flowers", "Beauty"],
    ["OTT", "Bills", "Kids", "Travel"],
    ["Food", "Eyewear", "Lifestyle", "Kitchen"],
    ["Recharge", "Electronics", "Hotel", "Footwear"],
    ["Lab", "Education", "Services", "Furniture"],
    ["Fashion", "Pizza", "Bike", "Novelties"],
];

const Working = () => {
  return (
    <div className='my-10'>
        <h1 className="text-blue-dark font-metropolis tracking-wider font-semibold text-3xl leading-6 text-center">
        How It Works?
        </h1>
        <div className="h-1 w-[5.5rem] cursor-pointer rounded-3xl bg-red-dark mx-auto my-4"></div>

        <div className="flex gap-6 justify-center items-center pt-7 relative">
       
            <div className="border rounded-lg flex flex-col items-center justify-center p-4 w-[18rem]">
                <img src={Working1} className="w-14 h-14" alt="Signup Icon" />
                <h3 className="font-metropolis font-semibold text-lg leading-7 text-center tracking-wider mt-4">
                    Signup
                </h3>
                <p className="font-manrope font-medium text-base leading-6 text-center py-4">
                    If you are going to use a passage of Lorem Ipsum, you need to be sure there
                </p>
            </div>

            <img src={ArrowCirleDown} className="w-[180px] h-[39px] absolute left-[24rem] top-[5rem]" alt="Arrow Circle Down" />

            <div className="border rounded-lg flex flex-col items-center justify-center p-4 w-[18rem]">
                <img src={Working2} className="w-14 h-14" alt="Choose Coupon Icon" />
                <h3 className="font-metropolis font-semibold text-lg leading-7 text-center tracking-wider mt-4">
                    Choose Coupon
                </h3>
                <p className="font-manrope font-medium text-base leading-6 text-center py-4">
                    If you are going to use a passage of Lorem Ipsum, you need to be sure there
                </p>
            </div>


            <img src={ArrowCirleUp} className="w-[180px] h-[39px] absolute right-[24rem] top-[3.5rem]" alt="Arrow Circle Up" />

            <div className="border rounded-lg flex flex-col items-center justify-center p-4 w-[18rem]">
                <img src={Working3} className="w-14 h-14" alt="Grab Coupon Icon" />
                <h3 className="font-metropolis font-semibold text-lg leading-7 text-center tracking-wider mt-4">
                    Grab Coupon
                </h3>
                <p className="font-manrope font-medium text-base leading-6 text-center py-4">
                    If you are going to use a passage of Lorem Ipsum, you need to be sure there
                </p>
            </div>

        </div>


        <img src={BannerImg} width={860} height={400} className="mx-auto py-8" alt="Banner Image"/>

        <div className="flex justify-center border rounded-lg w-fit mx-auto outline-none">
            <img src={BannerImg2} width={273} height={392} alt="Popular Categories Banner"/>
            <div className="flex flex-col p-4">
                <h3 className="font-metropolis font-semibold text-2xl leading-6 text-blue-dark">
                    Popular Categories
                </h3>
                <div className="h-1 w-[5.5rem] cursor-pointer rounded-3xl bg-red-dark my-4"></div>
                <table>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className="border px-6 py-3 text-center">{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Working
