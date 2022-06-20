import React from "react";
import s from "./styles.module.css";

export const Header = ({children}) => {
  return (
      <header className={s.header}>
        <div>
            {children}
        </div>
      </header>
  );
};
