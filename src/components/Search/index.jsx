import React, { useRef, useState, useEffect } from "react";
import s from "./styles.module.css";
import { ReactComponent as SearchIcon } from "./img/ic-search.svg";
import { ReactComponent as CloseIcon } from "./img/ic-close-input.svg";

export const Search = ({searchText = "", handleInputChange, handleFormSubmit, clearSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(()=> {
    setSearchQuery(searchText)
  }, [searchText])

  const inputRef = useRef(null);
  const handleForm = (e) => {
    e.preventDefault();
    handleFormSubmit && handleFormSubmit(inputRef.current?.value);
  };

  return (
    <form className={s.search} onSubmit={handleForm}>
      <input
        ref={inputRef}
        onInput={function (e) {
          handleInputChange && handleInputChange(e.target.value);
        }}
        value={searchQuery}
        type="text"
        placeholder="Поиск"
        className={s.input}
      />
      <button className={s.btn}>
        {searchQuery === "" ? <SearchIcon/> : <CloseIcon onClick={clearSearch}/>}
      </button>
    </form>
  );
};