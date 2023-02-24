import SearchIcon from '../images/icons8-search.svg';
import Logo from '../images/CatwikiLogo.svg';
import HeroCatSm from '../images/HeroImagesm.png';
import HeroCatMd from '../images/HeroImagemd.png';
import HeroCatLg from '../images/HeroImagelg.png';

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
        <div className='flex justify-center flex-col gap-3 h-full absolute top-0 left-7 max-w-[371px] w-[135px] min-[580px]:w-[220px] min-[768px]:w-[300px]'>
          <div>
            <img src={Logo} className='invert contrast-[150%] min-[580px]:w-full max-w-[310px]' alt='logo'/>
            <h1 className='text-white text-sm min-[580px]:text-base mt-4 max-w-[371px]'>Get to know more about your breed</h1>
          </div>
          <div className='flex'>
            <input type='text' placeholder='Search' className='pl-4 text-sm min-[580px]:text-base rounded-l-3xl max-w-[394px] w-[90px] min-[580px]:w-[180px] min-[768px]:w-[240px]'/>
            <div className='bg-white flex justify-center rounded-r-3xl border-l-slate-200 border-l w-10'>
              <img src={SearchIcon} alt='search icon' className='cursor-pointer'/>
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