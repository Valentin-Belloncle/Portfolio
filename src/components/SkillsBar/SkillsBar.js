import './SkillsBar.css'

function SkillsBar({ skill, percent }) {
  return (
    <li className='container'>
      <p>{skill}</p>
      <div className={`${skill} bar`} style={{ width: percent }}>
        {percent}
      </div>
    </li>
  )
}

export default SkillsBar
