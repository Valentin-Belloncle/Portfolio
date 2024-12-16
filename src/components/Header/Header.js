import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

function Header() {
  return (
    <header className='header center'>
      <h3>
        <a
          href={about.social.github}
          aria-label='github'
          className='link link--icon'
        >
          <GitHubIcon />
        </a>
        <a
          href={about.social.linkedin}
          aria-label='linkedin'
          className='link link--icon'
        >
          <LinkedInIcon />
        </a>
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
