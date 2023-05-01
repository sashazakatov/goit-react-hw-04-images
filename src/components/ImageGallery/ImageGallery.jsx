import { useState, useEffect } from 'react'
import PropTypes from "prop-types";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './ImageGallery.module.css'
import {ImageGalleryItem} from 'components/ImageGalleryItem'
import {makeFatch} from 'components/Api/Api'

export const ImageGallery = ({value, page, setPending, setVisual, openModal}) => {
    const [images, setImages] = useState([]);

    useEffect(()=>{
        if(value !== '' && page !== 0){
            makeFatch(value, page)
            .then(response => setImages((prevImages)=>([...prevImages, ...response.hits])))
            .catch(error => Notify.failure(error.message))
            .finally(() => {
                setPending(false);
                setVisual(true);
            })
        }
    }, [ value, page, setPending ,setVisual])

    return(
        <ul className={css.ImageGallery}>
            {images.map(
                ({id, webformatURL, tags, largeImageURL}) => 
                <ImageGalleryItem
                openModal={openModal}
                key={id} 
                webformatURL={webformatURL} 
                tags={tags}
                largeImageURL={largeImageURL}
                />)
            }
        </ul>
    )
}

ImageGallery.propTypes = {
    value: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    setPending: PropTypes.func.isRequired,
    setVisual: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
}