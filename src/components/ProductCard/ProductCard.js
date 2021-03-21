import { Image, Badge, Tag } from 'antd'
import { StarFilled } from '@ant-design/icons'
import { MapRouteBreaks } from '../../common/utils'

const ProductCard = ({ product }) => {

  console.log('product: ', product)

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
        width='200px'
        src={largeImageURL}
        className='product-image'
      />
      <Tag color="orange" className='star-favorites'>
        <StarFilled
          style={{ color: 'orange' }}
        /> {favorites}
      </Tag>
      <div className='badge-container'>
        {
          proc_tags.map(tag => (
            <Badge
              key={tag}
              count={tag}
              style={{ backgroundColor: '#52c41a', fontSize: '8pt' }} />
          ))
        }
      </div>
    </div>
  )
}

export default ProductCard
