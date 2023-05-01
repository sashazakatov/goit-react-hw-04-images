import { useState } from 'react';
import css from './App.module.css'
import {Searchbar} from 'components/Searchbar'
import {ImageGallery} from 'components/ImageGallery'
import { Loader } from 'components/Loader';
import { Button } from 'components/Button';
import { Modal } from 'components/Modal';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export const App = () => {
  const [value, setValue] = useState('');
  const [page, setPage] = useState(0);
  const [modal, setModal] = useState({largeImageURL:'', tags: '',});
  const [pending, setPending] = useState(false);
  const [visual, setVisual] = useState(false);
  const [showModal, setShowModal] = useState(false); 


  const hendelSubmit = (value) => {
    if(value === ''){
      return Notify.warning('The field "Search image and photo" is not filled');;
    }
    setPending(true);
    setValue(value);
    setPage(1);
  }
  const hendelOnClick = () => {
    setPending(true);
    setPage((prevPage) => prevPage += 1);
  }
  const handelOpenModal = ({largeImageURL, tags}) => {
    setModal({largeImageURL, tags});
    setShowModal(true)
  }

  return (
    <div className={css.App}>
      <Searchbar onSubmit={hendelSubmit}></Searchbar>
      <ImageGallery 
        value={value} 
        page={page} 
        setPending={setPending} 
        setVisual={setVisual}
        openModal={handelOpenModal}
      />
      {pending && <Loader/>} 
      {visual && <Button onClick={hendelOnClick}/>}
      {showModal && <Modal 
        largeImageURL={modal.largeImageURL}
        tag={modal.tags}
        onClose={setShowModal}
      />}
    </div>
  );
};