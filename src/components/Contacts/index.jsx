import React from "react";
import s from "./styles.module.css";
import { Contact } from "../Contact";

export const Contacts = ({ cards }) => {

  return (
    <>

      <div className={s.cards}>
        {cards?.map((dataItem, index) => {
          return (<Contact key={`${index}`} {...dataItem} cards={cards} />)
        })}
      </div>
    </>
  );
};

