import React, { useState, useContext } from "react";
import s from "./styles.module.css";
import cn from "classnames";
import { EditContactForm } from "../ContactForm/EditContactForm";
import { ModalForm } from "../ModalForm/ModalForm";
import { ReactComponent as Out } from "./img/Out.svg";
import { AppContext } from "../context/appContext";

export const Contact = ({ name, email, address, number, image, id }) => {
  const [modalActive, setModalActive] = useState(false);
  const [modalActiveInfo, setmodalActiveInfo] = useState(false);
  const { handleDeletePhone, editMode, cards } = useContext(AppContext);

  function deleteCard() {
    const confirmm = confirm("Удалить контакт?");
    if (confirmm == true) {
      handleDeletePhone(id);
    }
  }

  return (
    <>
      { modalActiveInfo == true ? <ModalForm active={modalActiveInfo} setActive={setmodalActiveInfo}>
        <div className={s.info}>
          {image ? (
            <img src={image} className={s.image_info} alt="img" />
          ) : (
            <Out className={s.image_info} />
          )}
          <div className={s.info}>
            Имя: {name.last} {name.first}{" "}
          </div>
          <div className={s.info}>Телефон: {number}</div>
          <div className={s.info}>Адрес: {address}</div>
          <div className={s.info}>E-mail: {email}</div>
          <button
            onClick={() => {
              setmodalActiveInfo(false);
            }}
          >
            Закрыть
          </button>
        </div>
      </ModalForm> : null }
    { modalActive == true ? <ModalForm active={modalActive} setActive={setModalActive}>
      <EditContactForm
        name={name}
        number={number}
        address={address}
        email={email}
        image={image}
        id={id}
        cards={cards}
        setActive={setModalActive}
      />
    </ModalForm> : null}
      <div
        className={s.card}
        onClick={() => {
          setmodalActiveInfo(true);
        }}
      >
        <div className={s.card__desc}>
          {image ? (
            <img src={image} className={s.card__image} alt="img" />
          ) : (
            <Out className={s.card__image} />
          )}
          <div className={s.card__name}>
            {name.last} {name.first && name.first}{" "}
          </div>
          <div className={s.card__name}>{number}</div>
          <div className={s.card__name}>{address}</div>
          <div className={s.card__name}>{email}</div>
          <button
            className={cn(editMode ? [s.btn] : [s.btn_del])}
            onClick={(e) => e.stopPropagation(setModalActive(true))}
          >
            редактировать
          </button>
          <button
            className={cn(editMode ? [s.btn_del_ac] : [s.btn_del])}
            onClick={(e) => e.stopPropagation(deleteCard())}
          >
            удалить
          </button>
        </div>
      </div>
    </>
  );
};
