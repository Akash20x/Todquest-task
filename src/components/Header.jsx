import Logo from '../assets/logo.svg'
import Search from '../assets/search.svg'
import NavBar from './NavBar'


const Header = () => {
  return (
    <header>
        <div className="w-full flex justify-evenly p-4">
            {/* Logo */}
            <div>
                <img src={Logo} className="w-[120px] h-12" />
            </div>

            {/* SearchBar */}
            <div className='flex items-center relative'>
                <img src={Search} className="w-[14px] h-[14px] absolute left-5" />
                <input 
                    type="search" 
                    placeholder='Search For brand, category, coupon'
                    className='w-[22rem] py-2 outline-none font-metropolis font-normal text-base leading-4'
                />
            </div>  

            <button className='bg-red-dark text-white uppercase rounded-lg tracking-wide py-3 px-4 font-metropolis font-semibold text-14 leading-[14px]'>
                Login / Sign Up
            </button>

        </div>
        <NavBar/>
    </header>
  )
}

export default Header
