import React from 'react'

interface IPagination {
  onPrev: () => void
  onNext: () => void
}

const Pagination: React.FC<IPagination> = ({ onPrev, onNext }) => {
  return (
    <div className="pagination">
      <button type="button" className="pagination__button pagination__button--prev " onClick={onPrev}></button>
      <button type="button" className="pagination__button pagination__button--next " onClick={onNext}></button>
    </div>
  )
}

export default Pagination
