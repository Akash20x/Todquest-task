/* eslint-disable react/prop-types */

const CategoryCard = ({ image, name, text, btnText }) => {
    return (
      <div className="bg-white rounded-10  m-2 py-4 w-52  flex flex-col justify-center items-center">
        <div className="px-4 py-2">
            <img src={image} className="w-20 h-6" alt="Card Image" />
        </div>
        <p className="text-blue-dark font-metropolis font-medium text-14 mb-8 leading-4 text-center">
            {name}
        </p>
        <p className="text-green-primary font-metropolis font-semibold text-xs leading-[12px] text-center tracking-wider">
            {text}
        </p>
        <button className="mt-4 bg-red-dark text-white rounded-lg  px-10 py-3 font-metropolis font-semibold text-xs leading-[12px] tracking-wider uppercase">
            {btnText}
        </button>
      </div>
    )
  }
  
  export default CategoryCard
  