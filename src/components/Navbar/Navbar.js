import { useContext, useState } from 'react'
import { Link } from 'react-router'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        <li className='nav__list-item'>
          <Link to='/about' onClick={toggleNavList} className='link link--nav'>
            À Propos
          </Link>
        </li>

        <li className='nav__list-item'>
          <Link to='/skills' onClick={toggleNavList} className='link link--nav'>
            Compétences
          </Link>
        </li>

          <li className='nav__list-item'>
          <Link to='/contact' onClick={toggleNavList} className='link link--nav'>
            Contact
          </Link>
          </li>
      </ul>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
