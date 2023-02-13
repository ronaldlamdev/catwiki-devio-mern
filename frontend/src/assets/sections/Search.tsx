import {AiOutlineSearch} from 'react-icons/ai'
import Logo from '../images/CatwikiLogo.svg'

const Search = () => {
  return (
    <div className='min-w-[340px] mx-[1.125rem] rounded-[2.625rem] search-bg h-[400px]'>
      <img src={Logo} className='invert contrast-150 pl-[1.453rem] pt-[1.313rem]' alt='logo'/>
      <h2 className='text-white w-[135px]: pl-[1.453rem]'>Get to know more about your cat breed</h2>
      <input type='text' placeholder='Search'/>
    </div>
  )
}

export default Search