import Image from "../assets/form-img.png"

const NewsLetter = () => {
  return (
    <div className="newsletter-container">
        <div className="flex w-[860px] mx-auto p-10">
            <img src={Image} width={420} height={420} alt="Newsletter Image" className="border-[10px]  border-white rounded-lg" />
            <div className="bg-white pl-3">
                <h2 className="font-metropolis font-semibold text-3xl leading-10 text-blue-dark pt-[4.25rem]">
                    Subscribe to our Newsletter!
                </h2>
                <p className="font-metropolis font-normal text-base leading-6  text-grey-secondary py-5 w-2/3">
                    Be the first to get exclusive offers ands the latest news
                </p>
                <input 
                    type="text"    
                    className='w-[20rem] text-grey-secondary py-2 outline-none font-montserrat font-normal text-14 leading-4'
                    placeholder="Enter your email address"
                 />
                <button className="mt-8 bg-red-dark text-white rounded-lg  px-10 py-2 font-metropolis font-semibold text-xs leading-[12px] tracking-wider uppercase">
                    Subscribe
                </button>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter
