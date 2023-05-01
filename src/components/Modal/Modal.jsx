import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from "prop-types";
import css from './Modal.module.css'

const modaleRoot = document.querySelector('#modal-root')

export const Modal = ({onClose, largeImageURL, tag}) => { 
    const handleKeydown = e => {
        if (e.code === 'Escape') {
          onClose(false);
        }
    };
    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
          onClose(false);
        }
    };
    useEffect(()=>{
        window.addEventListener('keydown', handleKeydown);
        return ()=>window.removeEventListener('keydown', handleKeydown);
    })

    return createPortal(
        <div onClick={handleBackdropClick} className={css.Overlay}>
            <div className={css.Modal}>
                <img src={largeImageURL} alt={tag} />
            </div>
        </div>,
        modaleRoot)
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired, 
    tag: PropTypes.string.isRequired,
}