/* eslint-disable react/prop-types */

const CouponCard = ({ title, image, text, btnText }) => {
    return (
      <div className="bg-white rounded-10 p-4 m-2 h-[16rem] w-52 border border-gray-300 flex flex-col justify-center items-center">
        <h2 className="text-green-primary font-metropolis font-semibold tracking-wide text-lg leading-[20px] text-center">
          {title}
        </h2>
        <div className="px-4 pt-6 pb-4">
          <img src={image} className="w-20 h-6" alt="Card Image" />
        </div>
        <p className="text-grey-primary font-metropolis font-medium text-xs leading-[14px] text-center tracking-wider">
          {text}
        </p>
        <button className="mt-8 bg-red-dark text-white rounded-lg  px-10 py-3 font-metropolis font-semibold text-xs leading-[12px] tracking-wider uppercase">
          {btnText}
        </button>
      </div>
    );
  };

  export default CouponCard;
