import uniqid from 'uniqid'
import SkillsBar from '../SkillsBar/SkillsBar'
import { skills } from '../../portfolio'
import './Skills.css'

function Skills () {

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Compétences</h2>
      <ul className='skills__list'>
        {skills.map((item) => (
          <SkillsBar key={uniqid()} skill={item.skill} percent={item.percent} className='skills__list-item btn btn--plain'/>
        ))}
      </ul>
    </section>
  )
}

export default Skills
