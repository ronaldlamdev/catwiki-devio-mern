import SearchIcon from '../images/icons8-search.svg';
import Logo from '../images/CatwikiLogo.svg';
import HeroCatSm from '../images/HeroImagesm.png';
import HeroCatMd from '../images/HeroImagemd.png';
import HeroCatLg from '../images/HeroImagelg.png';

const Search = () => {
  return (
    <div className='px-[1.125rem] mt-8'>

      {/* Cat image and search */}
      <div className='w-full relative'>
        <picture>
          <source srcSet={HeroCatLg} media='(min-width: 1024px)'/>
          <source srcSet={HeroCatMd} media='(min-width: 768px)'/>
          <img src={HeroCatSm} className='w-full rounded-t-3xl' alt='Cat'/>
        </picture>
        <div className='flex flex-col justify-center h-full items-start absolute top-3 left-7 w-[135px] min-[465px]:w-[160px] min-[550px]:w-[200px]'>
          <div>
            <img src={Logo} className='invert contrast-[150%]' alt='logo'/>
            <h1 className='text-white text-sm min-[465px]:text-base'>Get to know more about your breed</h1>
          </div>
          <div className='flex'>
            <input type='text' placeholder='Search' className='pl-4 text-sm rounded-l-3xl w-[90px] min-[465px]:w-[120px] min-[550px]:w-[150px] min-[465px]:text-base'/>
            <div className='bg-white flex justify-center rounded-r-3xl border-l-slate-200 border-l w-10'>
              <img src={SearchIcon} alt='search icon'/>
            </div>
          </div>
        </div>
      </div>

      {/* Discover breeds */}
      <div>

      </div>
    </div>
  )
}

export default Search