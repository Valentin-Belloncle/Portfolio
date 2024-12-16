import { about } from '../../portfolio'
import images from '../../assets/images'
import Projects from '../Projects/Projects'
import './About.css'

const About = () => {
  const { name, role, description, resume } = about

  return (
    <div className='about center'>
      <h1>
        Hello, je suis <span className='about__name'>{name}</span>
      </h1>

      <h2 className='about__role'> {role}</h2>
      <div className='about__profile'>
        <img src={images.picture} alt='Portrait' />
        <p className='about__desc'>{description}</p>
      </div>

      <div className='about__contact center'>
        <a href={resume}>
          <span type='button' className='btn btn--outline'>
            Lien CV
          </span>
        </a>
      </div>
      <Projects />
    </div>
  )
}

export default About
