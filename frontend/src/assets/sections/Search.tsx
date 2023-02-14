import SearchIcon from '../images/icons8-search.svg';
import Logo from '../images/CatwikiLogo.svg';

const Search = () => {
  return (
    <div className='w-[340px] mx-[1.125rem] mt-[3.063rem] rounded-[2.625rem] search-bg h-[400px]'>
      <div className='pl-[1.453rem]'>
        <img src={Logo} className='invert contrast-150  pt-[1.313rem]' alt='logo'/>
        <h2 className='text-white w-[135px] mt-3'>Get to know more about your cat breed</h2>
        {/* Search function */}
        <div className='h-9 w-fit flex mt-4'>
          <input type='text' placeholder='Search' className='rounded-l-[3.688rem] pl-3 bg-white h-full'/>
          <div className='h-full bg-white flex items-center rounded-r-[3.688rem]'>
            <img src={SearchIcon} alt='Search icon' className='mr-1'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search