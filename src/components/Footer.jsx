import Logo from "../assets/footer-logo.svg"
import AppleIcon from "../assets/apple-icon.svg"
import PlayStoreIcon from "../assets/play-store-icon.svg"
import Arrow from "../assets/arrow.svg"

const Footer = () => {
  return (
    <footer className="bg-blue-dark py-16 text-white">
        <div className="w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-4 sm:grid-cols-12 gap-4">
            <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
                <img src={Logo} alt="logo" className="h-14 w-[120px] mb-2"/>
                <p className="mb-4 font-metropolis font-normal text-base leading-6 tracking-widest w-[18rem]">
                Lorem Ipsum is simply dummy of the printing and type setting.
                </p>
                <div className="flex flex-col w-full gap-4 ">
                    <div className="flex social-icon gap-1 px-4 py-2 w-fit rounded-lg items-center cursor-pointer">
                        <img src={AppleIcon} className="w-8 h-8" alt="Apple Icon" /> 
                        <div className="p-2">
                            <p className="font-metropolis font-medium text-xs tracking-wider text-grey-light leading-[8px]">
                                Download From
                            </p>
                            <p className="font-metropolis font-semibold text-lg leading-[12px] text-blue-dark py-2 uppercase">
                                App Store
                            </p>
                        </div>
                    </div>

                    <div className="flex social-icon gap-1 px-4 py-2 w-fit rounded-lg items-center cursor-pointer">
                        <img src={PlayStoreIcon} className="w-8 h-8" alt="Play Store Icon" /> 
                        <div className="p-2">
                            <p className="font-metropolis font-medium text-xs tracking-wider text-grey-light leading-[8px]">
                                Download From
                            </p>
                            <p className="font-metropolis font-semibold text-lg leading-[12px] text-blue-dark py-2 uppercase">
                                App Store
                            </p>
                        </div>

                    </div>
                </div>
            </div>


            <div className=" row-span-2 sm:col-span-2 sm:col-start-5 sm:col-end-7 flex flex-col">
                <p className="text-red-dark mb-4 font-semibold text-lg font-metropolis uppercase tracking-wider">
                    Company
                </p>
                <ul>
                    <li className="my-2 cursor-pointer  flex items-center gap-1 tracking-wide font-medium font-metropolis">
                        <img src={Arrow} className="w-3 h-3" alt="Arrow Icon" />
                        About Us
                    </li>
                    <li className="my-2 cursor-pointer flex items-center gap-1 tracking-wide font-medium font-metropolis">
                        <img src={Arrow} className="w-3 h-3" alt="Arrow Icon" />
                        Privacy Policy
                    </li>
                    <li className="my-2 cursor-pointer flex items-center gap-1 tracking-wide font-medium font-metropolis">
                        <img src={Arrow} className="w-3 h-3" alt="Arrow Icon" />
                        Terms
                    </li>
                    <li className="my-2 cursor-pointer flex items-center gap-1 tracking-wide font-medium font-metropolis">
                        <img src={Arrow} className="w-3 h-3" alt="Arrow Icon" />
                        Blogs
                    </li>
                    <li className="my-2 cursor-pointer flex items-center gap-1 tracking-wide font-medium font-metropolis">
                        <img src={Arrow} className="w-3 h-3" alt="Arrow Icon" />
                        Branding
                    </li>
                    <li className="my-2 cursor-pointer flex items-center gap-1 tracking-wide font-medium font-metropolis">
                        <img src={Arrow} className="w-3 h-3" alt="Arrow Icon" />
                        Career{" "}
                    </li>

                </ul>
            </div>

            <div className="row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
                <p className="text-red-dark mb-4 font-semibold text-lg font-metropolis uppercase tracking-wider">
                    General
                </p>
                <ul>
                    <li className="my-2 cursor-pointer flex items-center gap-1 tracking-wider font-medium font-metropolis">
                        <img src={Arrow} className="w-3 h-3" alt="Arrow Icon" />
                        Partner With us
                    </li>

                    <li className="my-2 cursor-pointer flex items-center gap-1 tracking-wider font-medium font-metropolis">
                        <img src={Arrow} className="w-3 h-3" alt="Arrow Icon" />
                        Write to us
                    </li>
            

                    <li className="my-2 cursor-pointer flex items-center gap-1 tracking-wider font-medium font-metropolis">
                        <img src={Arrow} className="w-3 h-3" alt="Arrow Icon" />
                        Mobile App
                    </li>
            
                    <li className="my-2 cursor-pointer flex items-center gap-1 tracking-wider font-medium font-metropolis">
                        <img src={Arrow} className="w-3 h-3" alt="Arrow Icon" />
                        Site map
                    </li>
            
            
                </ul>
            </div>

    
            <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
                <p className="text-red-dark mb-4 font-semibold text-lg font-metropolis uppercase tracking-wider">
                    Pages
                </p>
                <ul>
                    <li className="my-2 cursor-pointer flex items-center gap-1 tracking-wider font-medium font-metropolis">
                        <img src={Arrow} className="w-3 h-3" alt="Arrow Icon" />
                        Amazon Offer
                    </li>

                    <li className="my-2 cursor-pointer flex items-center gap-1 tracking-wider font-medium font-metropolis">
                        <img src={Arrow} className="w-3 h-3" alt="Arrow Icon" />
                        Google Pay Offers
                    </li>

                    <li className="my-2 cursor-pointer flex items-center gap-1 tracking-wider font-medium font-metropolis">
                        <img src={Arrow} className="w-3 h-3" alt="Arrow Icon" />
                        PayPal Offers
                    </li>

                    <li className="my-2 cursor-pointer flex items-center gap-1 tracking-wider font-medium font-metropolis">
                        <img src={Arrow} className="w-3 h-3" alt="Arrow Icon"/>
                        PhonePe Offers
                    </li>

                    <li className="my-2 cursor-pointer flex items-center gap-1 tracking-wider font-medium font-metropolis">
                        <img src={Arrow} className="w-3 h-3" alt="Arrow Icon" />
                        Festival Offers
                    </li>

                    <li className="my-2 cursor-pointer flex items-center gap-1 tracking-wider font-medium font-metropolis">
                        <img src={Arrow} className="w-3 h-3" alt="Arrow Icon" />
                        Bank Offers
                    </li>
                </ul>
            </div>


            <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
                <p className="text-red-dark mb-4 font-semibold text-lg font-metropolis uppercase tracking-wider">
                    More
                </p>
                <ul>
                    <li className="my-2 cursor-pointer flex items-center gap-1 tracking-wider font-medium font-metropolis">
                        <img src={Arrow} className="w-3 h-3" alt="Arrow Icon" />
                        City Offers
                    </li>

                    <li className="my-2 cursor-pointer flex items-center gap-1 tracking-wider font-medium font-metropolis">
                        <img src={Arrow} className="w-3 h-3" alt="Arrow Icon" />
                        Brand Offers
                    </li>

                    <li className="my-2 cursor-pointer flex items-center gap-1 tracking-wider font-medium font-metropolis">
                        <img src={Arrow} className="w-3 h-3" alt="Arrow Icon" />
                        Product Deals
                    </li>

                    <li className="my-2 cursor-pointer flex items-center gap-1 tracking-wider font-medium font-metropolis">
                        <img src={Arrow} className="w-3 h-3" alt="Arrow Icon" />
                        Gift Cards
                    </li>
                </ul>
            </div>


        </div>
  </footer>
  )
}

export default Footer
