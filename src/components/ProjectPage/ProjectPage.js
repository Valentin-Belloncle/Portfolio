import { useParams } from 'react-router'
import { projects } from '../../portfolio'
import ImageContainer from '../ImageContainer/ImageContainer'
import './ProjectPage.css'

const ProjectPage = () => {
  const { id } = useParams()

  const project = projects.find((obj) => obj.id.toString() === id)

  return (
    <section id='projectPage' className='section projects'>
      <h2 className='section__title'> {project.name} </h2>
      <ImageContainer projectId={id} imageType="main"/>
      <ImageContainer projectId={id} imageType="secondary"/>
      <ImageContainer projectId={id} imageType="tertiary"/>
    </section>
  )
}

export default ProjectPage
