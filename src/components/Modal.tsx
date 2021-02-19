import React from 'react'

interface IModal {
  children?: string | JSX.Element | JSX.Element[]
  isOpen: boolean
  onClose: () => void
}

const Modal: React.FC<IModal> = ({ isOpen, children, onClose }) => {

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    if (!target.closest(".modal") && onClose) onClose()
  }

  return (
    isOpen ?
      <div className="overlay" onClick={handleClick} >
        <button className="button-close" onClick={handleClick} ></button>
        <div className="modal">
          {children}
        </div>
      </div>
      : <></>
  )
}

export default Modal
