import { Link } from 'react-router'
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <Link to={`/project/${project.id}`} className='project'>
    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    <p className='project__difficulty'>
      {project.difficulty}
      <p>{project.solution}</p>
    </p>

    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}
  </Link>
)

export default ProjectContainer
