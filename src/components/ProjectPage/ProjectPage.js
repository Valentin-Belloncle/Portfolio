import { useParams } from 'react-router'
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import { projects } from '../../portfolio'
import ImageContainer from '../ImageContainer/ImageContainer'

import './ProjectPage.css'

const ProjectPage = () => {
  const { id } = useParams()

  const project = projects.find((obj) => obj.id.toString() === id)

  return (
    <section id='projectPage' className='section projects'>
      <h2 className='section__title'>
        {' '}
        {project.name}
        <a
          href={project.sourceCode}
          aria-label='source code'
          className='link link--icon'
        >
          <GitHubIcon />
        </a>
      </h2>
      <ImageContainer projectId={id} imageType='main' />
      <div className='context'>
        <div className='context_data'>
          <div className='context_data_info'>
            <h3 className='descriptionProject'>{project.description}</h3>
            <p className='infoProject'>
              <span className='infoTitle'>Date : </span>
              {project.date}
            </p>
            <p className='infoProject'>
              <span className='infoTitle'>Rôle : </span>
              {project.role}
            </p>
          </div>
        </div>
        <div className='context_column'>
          <div className='context_column-content'>
            <h3>Objectifs</h3>
            <ul className='objective'>
              {project.objective.map((item) => (
                <li key={uniqid()} className='objective-item'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className='context_column-content'>
            <h3>Difficulté</h3>
            <li>{project.difficulty}</li>
            <h3>Solution</h3>
            <li>{project.solution}</li>
          </div>
        </div>
      </div>
      <ImageContainer projectId={id} imageType='secondary' />
      <ImageContainer projectId={id} imageType='tertiary' />
    </section>
  )
}

export default ProjectPage
