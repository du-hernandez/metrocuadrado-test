import { Image, Badge } from 'antd'
import { MapRouteBreaks } from '../../common/utils'

const ProductCard = ({ product }) => {

  const {
    comments,
    downloads,
    favorites,
    id,
    imageHeight,
    imageSize,
    imageWidth,
    largeImageURL,
    likes,
    pageURL,
    previewHeight,
    previewURL,
    previewWidth,
    tags,
    type,
    user,
    userImageURL,
    user_id,
    views,
    webformatHeight,
    webformatURL,
    webformatWidth,
  } = product

  const proc_tags = MapRouteBreaks(tags, ', ')

  return (
    <div className='container-product'>
      <Image
        width='100%'
        src={largeImageURL}
        className='product-image'
      />
      <div className='badge-container'>
        {
          proc_tags.map(tag => (
            <Badge
            key={tag}
            count={tag}
            style={{ backgroundColor: '#52c41a' }} />
          ))
        }
      </div>
    </div>
  )
}

export default ProductCard
