import Logo from '../images/CatwikiLogo.svg';

const Header = () => {
  return (
    <header className='flex justify-start pl-[1.125rem] pt-[1.464rem]'>
      <a href='/'>
        <img src={Logo} alt='logo' />
      </a>
    </header>
  )
}

export default Header