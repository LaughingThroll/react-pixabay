import React from 'react'

import ImageItem from './ImageItem'
import { IImagePixAbay } from '../../types'


interface IImages {
  isLoading: boolean,
  images: IImagePixAbay[],
  onClick?: (src: string, tags: string) => void
}


const Images: React.FC<IImages> = ({ isLoading, images, onClick }) => {
  return (
    <section className="images">
      <div className="container images__container">
        {
          isLoading ? <div> Загрузка... </div> : !images.length ? <div>Ничего не найдено :(</div> :
            images.map(({ id, previewURL, largeImageURL, tags }: IImagePixAbay) => {
              return <ImageItem key={id} onClick={ onClick?.bind(null, largeImageURL, tags) } src={previewURL} name={tags} />
            })
        }
      </div>
    </section>
  )
}

export default Images
