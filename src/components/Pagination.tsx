import React from 'react'

interface IPagination {
  onPrev: () => void
  onNext: () => void
}

const Pagination: React.FC<IPagination> = ({ onPrev, onNext }) => {
  return (
    <div className="pagination">
      <button type="button" className="pagination__button pagination__button--prev " onClick={onPrev}>
        <svg width="9" height="8" viewBox="0 0 9 8" >
          <path d="M0.646446 3.64645C0.451184 3.84171 0.451184 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM9 3.5L1 3.5V4.5L9 4.5V3.5Z" fill="black" />
        </svg>

      </button>
      <button type="button" className="pagination__button pagination__button--next " onClick={onNext}>
        <svg width="9" height="8" viewBox="0 0 9 8" >
          <path d="M8.35355 4.35355C8.54882 4.15829 8.54882 3.84171 8.35355 3.64645L5.17157 0.464467C4.97631 0.269205 4.65973 0.269205 4.46447 0.464467C4.2692 0.659729 4.2692 0.976311 4.46447 1.17157L7.29289 4L4.46447 6.82843C4.2692 7.02369 4.2692 7.34027 4.46447 7.53553C4.65973 7.7308 4.97631 7.7308 5.17157 7.53553L8.35355 4.35355ZM-8.74228e-08 4.5L8 4.5L8 3.5L8.74228e-08 3.5L-8.74228e-08 4.5Z" fill="black" />
        </svg>

      </button>
    </div>
  )
}

export default Pagination
