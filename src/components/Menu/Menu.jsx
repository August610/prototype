import React, { useState, useContext } from "react";
import s from "./styles.module.css";
import cn from "classnames";
import { ModalMenu } from "../ModalMenu/ModalMenu";
import { ReactComponent as Add } from "./img/add.svg";
import { ReactComponent as Edit } from "./img/Edit.svg";
import { ReactComponent as Import } from "./img/Import.svg";
import { ReactComponent as Export } from "./img/Export.svg";
import { ReactComponent as Circle } from "./img/circle.svg";
import { CreateContactForm } from "../ContactForm/CreateContactForm";
import { ModalForm } from "../ModalForm/ModalForm";
import { AppContext } from "../context/appContext";

export const Menu = () => {
  const [modalActive, setModalActive] = useState(false);
  const [modalActiveForm, setModalActiveForm] = useState(false);

  const { sort, editMode, changeSort, changeMode } = useContext(AppContext);

  return (
    <div className={s.form}>
      <div className={s.formItem}>
        <div className={s.circleDiv}>
          <Circle className={s.circle} onClick={() => setModalActive(true)} />
        </div>
        <div
          className={cn(s.col, s.name)}
          onClick={() => (sort ? changeSort(false) : changeSort(true))}
        >
          ФИО
        </div>
        <div className={cn(s.col, s.phone)}>Телефон</div>
        <div className={cn(s.col, s.address)}>Адрес</div>
        <div className={cn(s.col, s.email)}>Электронная почта</div>
      </div>

      { modalActive == true ? <ModalMenu active={modalActive} setActive={setModalActive}>
        <div className={s.wrapper}>
          <div
            className={s.item}
            onClick={() => {
              setModalActiveForm(true);
              setModalActive(false);
            }}
          >
            <span>
              <Add className={s.icon} />
              <br />
              Добавить
              <br /> 
              пользователя
            </span>
          </div>
          <div className={s.item}>
            <span>
              <Export className={s.icon} />
              <br />
              Экспортировать
              <br />
              контакты
            </span>
          </div>
          <div className={s.item}>
            <span>
              <Import className={s.icon} />
              <br />
              Импортировать
              <br />
              контакты
            </span>
          </div>
          <div
            className={s.item}
            onClick={() => {
              editMode ? changeMode(false) : changeMode(true);
              setModalActive(false);
            }}
          >
            <span>
              <Edit className={s.icon} />
              <br />
              Редактировать
              <br />
              список
            </span>
          </div>
        </div>
      </ModalMenu> : null }
      
      { modalActiveForm == true? <ModalForm active={modalActiveForm} setActive={setModalActiveForm}>
        <CreateContactForm
          active={setModalActiveForm}
        ></CreateContactForm>
      </ModalForm> : null }
    </div>
  );
};
