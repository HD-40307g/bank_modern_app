import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='HooBank logo' className='w-[124px] h-[32px]'/>

{/* Desktop Navigation Links */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} ${active === nav.title ? 'text-white' : 'text-dimWhite'}`} onClick={() => setActive(nav.title)}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

{/* Mobile Menu Toggle */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={isMenuOpen ? close : menu} alt='menu toggle' className='w-[28px] h-[28px] object-contain' onClick={handleToggleMenu} aria-label='Toggle navigation menu' />
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-start flex-1'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} ${active === nav.title ? 'text-white' : 'text-dimWhite'}`}>
              <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
