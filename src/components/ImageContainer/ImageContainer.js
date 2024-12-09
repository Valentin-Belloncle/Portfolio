import images from '../../assets/images'
import './ImageContainer.css'

function ImageContainer({ projectId, imageType }) {
  const imagePath = images[imageType]?.[projectId]

  return (
    <div className='banner'>
      <img src={imagePath} alt='' className='banner_img' />
    </div>
  )
}

export default ImageContainer
