import SearchIcon from '../images/icons8-search.svg';
import Logo from '../images/CatwikiLogo.svg';
import HeroCatSm from '../images/HeroImagesm.png';
import HeroCatMd from '../images/HeroImagemd.png';
import HeroCatLg from '../images/HeroImagelg.png';

const Search = () => {
  return (
    <div className='px-[1.125rem] mt-8'>
      <div className='w-full relative'>
        <picture>
          <source srcSet={HeroCatLg} media='(width > 1024px)'/>
          <source srcSet={HeroCatMd} media='(768px <= width < 1023px)'/>
          <img src={HeroCatSm} className='w-full rounded-t-3xl' alt='Cat'/>
        </picture>
        <div className='absolute top-3 left-7'>
          <img src={Logo} className='invert contrast-[150%]' alt='logo'/>
          <h1 className='text-white'>Get to know more about your breed</h1>
          <div className='flex'>
            <input type='text' placeholder='Search' className='pl-4 rounded-l-3xl'/>
            <div className='bg-white flex justify-center rounded-r-3xl border-l-slate-200 border-l w-10'>
              <img src={SearchIcon} alt='search icon'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search