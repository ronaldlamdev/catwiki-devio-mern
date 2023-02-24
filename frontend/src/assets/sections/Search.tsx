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
        <div className='search-text-div'>
          <div>
            <img src={Logo} className='search-text-div-white-logo' alt='logo'/>
            <h1 className='text-white text-sm min-[580px]:text-lg mt-4'>Get to know more about your breed</h1>
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
      <div>

      </div>
    </div>
  )
}

export default Search