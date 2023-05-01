import { useState } from "react";
import PropTypes from "prop-types";
import css from './Searchbar.module.css';


export const Searchbar = ({onSubmit}) => {
  const [value, setValue] = useState('');
  const hendelFormSubmit = (e) => {
      e.preventDefault();
      onSubmit(value);
      setValue('');
  }
      return(
      <header className={css.Searchbar}>
      <form className={css.Form} onSubmit={hendelFormSubmit}>
        <button className={css.SearchbarButton} type="submit">
          <span>Search</span>
        </button>
    
        <input
          className={css.SearchbarInput}
          type="text"
          placeholder="Search images and photos"
          name='value'
          value={value}
          onChange={(e)=>setValue(e.currentTarget.value)}
        />
      </form>
    </header>)
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}