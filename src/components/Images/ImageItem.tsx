import React from 'react'

interface IImageItem {
  src: string,
  name: string
  onClick?: () => void
}

const ImageItem: React.FC<IImageItem> = ({ src, name, onClick }) => {
  return (
    <div className="image-item" onClick={onClick}>
      <img src={src} alt={name} />
    </div>
  )
}

export default ImageItem
