import SearchIcon from '../images/icons8-search.svg';
import {BsArrowRight} from 'react-icons/bs';
import Logo from '../images/CatwikiLogo.svg';
import HeroCatSm from '../images/HeroImagesm.png';
import HeroCatMd from '../images/HeroImagemd.png';
import HeroCatLg from '../images/HeroImagelg.png';
import Placeholder1 from '../images/Placeholder1.jpg';
import Placeholder2 from '../images/Placeholder2.jpg';
import Placeholder3 from '../images/Placeholder3.jpg';
import Placeholder4 from '../images/Placeholder4.jpg';

const Search = () => {
  return (
    <div className='px-[1.125rem] mt-8'>

      {/* Cat image and search */}
      <div className='w-full relative h-fit'>
        <picture>
          <source srcSet={HeroCatLg} media='(min-width: 1024px)'/>
          <source srcSet={HeroCatMd} media='(min-width: 660px)'/>
          <img src={HeroCatSm} className='rounded-t-3xl' alt='Cat'/>
        </picture>
        <div className='search-text-div'>
          <div>
            <img src={Logo} className='search-text-div-white-logo' alt='logo'/>
            <h1 className='text-white text-sm min-[580px]:text-lg lg:text-3xl mt-4'>Get to know more about your breed</h1>
          </div>
          <div className='flex'>
            <input type='text' placeholder='Search' className='search-text-div-input'/>
            <div className='search-icon-div'>
              <img src={SearchIcon} alt='search icon' className='cursor-pointer'/>
            </div>
          </div>
        </div>
      </div>

      {/* Discover breeds */}
      <div className='bg-[#E3E1DC] rounded-b-3xl px-7 pt-3 pb-14 flex flex-col gap-6'>

        {/* Text */}
        <div className='flex flex-col gap-4'>
          <div>
            <h2 className='text-[#291507] font-medium text-sm'>Most Searched Breeds</h2>
            <div className='bg-[#4D270C] w-10 h-1'/>
          </div>
          <div className='flex justify-between items-center'>
            <h1 className='text-[#291507] font-bold text-lg'>66+ Breeds For you to discover</h1>
            <span className='hidden min-[580px]:flex items-center text-[#29150799] font-bold text-lg gap-2'>SEE MORE <BsArrowRight /></span>
          </div>
        </div>

        {/* Breeds images */}
        <div className='grid grid-cols-2 gap-3'>
          {/* First grid item */}
          <div className='flex flex-col gap-3'>
            <div className='w-[135px] h-[135px]'>
              <img className='w-full h-full rounded-xl' src={Placeholder1}/>
            </div>
            <h2 className='text-[#291507] font-semibold text-sm'>Cat 1</h2>
          </div>
          {/* Second grid item */}
          <div className='flex flex-col gap-3'>
            <div className='w-[135px] h-[135px]'>
              <img className='w-full h-full rounded-xl' src={Placeholder2}/>
            </div>
            <h2 className='text-[#291507] font-semibold text-sm'>Cat 2</h2>
          </div>
          {/* Third grid item */}
          <div className='flex flex-col gap-3'>
            <div className='w-[135px] h-[135px]'>
              <img className='w-full h-full rounded-xl' src={Placeholder3}/>
            </div>
            <h2 className='text-[#291507] font-semibold text-sm'>Cat 3</h2>
          </div>
          {/* Fourth grid item */}
          <div className='flex flex-col gap-3'>
            <div className='w-[135px] h-[135px]'>
              <img className='w-full h-full rounded-xl' src={Placeholder4}/>
            </div>
            <h2 className='text-[#291507] font-semibold text-sm'>Cat 4</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search