import React, { useState, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AppContext } from '../context/appContext';
import { ModalForm } from '../ModalForm/ModalForm';
import { ReactComponent as Out } from './img/Out1.svg'
import s from "./styles.module.css"

export function EditContactForm({ name, address, email, number, image, setActive, id }) {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    });

    const { handleUpdateNewPhone } = useContext(AppContext);

    const [info, setinfo] = useState({
        name: ((name.first !== undefined ? name.first : "") + " " + (name.last !== undefined ? name.last : "")),
        number: number,
        address: address,
        email: email,
    })

    const [imageEdit, setImageEdit] = useState(image);
    const [fileUrl, setFileUrl] = useState(null);
    const [modalActive, setModalActive] = useState(false);

    useEffect(() => {
        setinfo({
            name: ((name.first !== undefined ? name.first : "") + " " + (name.last !== undefined ? name.last : "")),
            number: number,
            address: address,
            email: email,
        });
        setImageEdit(image);
    }, [name, address, email, number, image, id]);



    function onSubmit(data) {
        handleUpdateNewPhone(data, id, imageEdit)
    }

    function onSubmitImg(data) {
        setImageEdit(data)
    }

    function handleChange(event) {
        setinfo({ ...info, [event.target.name]: event.target.value })
    }

    function handleSubmity(event) {
        event.preventDefault();
        onSubmitImg(fileUrl)
    }

    function handleImageChange(event) {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];

        reader.onloadend = () => {
            setFileUrl(reader.result);
        }

        reader.readAsDataURL(file)
    }

    return (
        <>
            <ModalForm active={modalActive} setActive={setModalActive}>
                <div className={s.previewComponent}>
                    <form onSubmit={handleSubmity}>
                        <input className={s.button_com}
                            type="file"
                            onChange={handleImageChange} />
                        <button className={s.button_com}
                            type="submit"
                            onClick={handleSubmity}>Загрузить изображение</button>
                    </form>
                </div>
                <button className={s.button_com} onClick={() => { setModalActive(false) }}>Закрыть</button>
            </ModalForm>
            <h3>Редактировать пользователя</h3>
            <div onClick={() => { setModalActive(true) }}> {imageEdit ? <img src={imageEdit} className={s.imagee} alt="img" /> : <Out className={s.image} />}</div>
            <form className={s.form_title} onSubmit={handleSubmit(onSubmit)}>
                <input className={s.formd}
                    type="text"
                    {...register('name', {
                        required: 'Это поле обязательно'
                    })}
                    placeholder="Имя"
                    value={info.name}
                    onChange={handleChange}
                />
                <div>
                    {errors?.title && <p className={s.errorMessage}>{errors?.title?.message}</p>}
                </div>
                <input className={s.formd}
                    type="text"
                    {...register('number', {
                        required: 'Это поле обязательно'
                    })}
                    placeholder="Телефон"
                    value={info.number}
                    onChange={handleChange}
                />
                <div>
                    {errors?.text && <p className={s.errorMessage}>{errors?.text?.message}</p>}
                </div>
                <input className={s.formd}
                    type="text"
                    {...register('address', {

                    })}
                    placeholder="Адрес"
                    value={info.address}
                    onChange={handleChange}
                />
                <input className={s.formd}
                    type="text"
                    {...register('email', {

                    })}
                    placeholder="Электронный адрес"
                    value={info.email}
                    onChange={handleChange}
                />
                <button className={s.button_com} onClick={() => { setTimeout(() => setActive(false), 100); }}> Сохранить </button>
                <button type='reset' className={s.button_com} onClick={() => {
                    setActive(false), setinfo({
                        name: [name.first || name.last],
                        number: number,
                        address: address,
                        email: email,
                    });
                }}> Закрыть </button>
            </form>

        </>
    )
}