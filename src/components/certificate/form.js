import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "gatsby";
import axios from "axios";
import { MdOutlineClose } from "react-icons/md";
import {
  background,
  closeBtn,
  inputForm,
  politics,
  formSubmit,
  memo,
} from "./form.module.scss";

function Form({ serviceInfo, price, redirectUrl, closeForm }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const url = "/api/pay.php";

  const onSubmit = (data) =>
    axios
      .post(url, {
        service_name:
          `${serviceInfo}, ` +
          `${data.name}, ` +
          `${data.surname}, ` +
          `${data.phone}, ` +
          `${data.message}. ` +
          `На сумму: ${price} руб.`,
        service_price: price,
        redirect_url: redirectUrl,
      })
      .then(function (e) {
        window.location.href = e.data;
      });

  return (
    <div className={background}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <button className={closeBtn} onClick={closeForm}>
          <MdOutlineClose />
        </button>
        <h2>{serviceInfo}</h2>
        <div className={inputForm}>
          <p>1. Фамилия</p>
          <input
            {...register("surname", {
              required: "Введите Вашу фамилию",
              maxLength: {
                value: 30,
                message: "Слишком длинная фамилия...",
              },
              pattern: {
                value: /^[А-Яа-яЁё\s]+$/i,
                message: "Только русский язык",
              },
            })}
            placeholder="Введите Вашу фамилию"
            autoComplete="off"
          />
          {errors.surname && <span>{errors.surname.message}</span>}
        </div>

        <div className={inputForm}>
          <p>2. Имя</p>
          <input
            {...register("name", {
              required: "Введите Ваше имя",
              maxLength: {
                value: 30,
                message: "Слишком длинное имя...",
              },
              pattern: {
                value: /^[А-Яа-яЁё\s]+$/i,
                message: "Только русский язык",
              },
            })}
            placeholder="Введите Ваше имя"
            autoComplete="off"
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div className={inputForm}>
          <p>3. Телефон</p>
          <input
            {...register("phone", {
              required: "Необходимо ввести номер телефона",
              maxLength: {
                value: 30,
                message: "Мы думали 30 символов должно хватить...",
              },
              pattern: {
                value: /^[0-9+()-\s]+$/i,
                message: "Введите телефон по типу +79008007060",
              },
            })}
            placeholder="Введите Ваш номер телефона (по типу +79008007060)"
            autoComplete="off"
          />
          {errors.phone && <span>{errors.phone.message}</span>}
        </div>

        <div className={inputForm}>
          <p>4. Комментарий</p>
          <input
            {...register("message")}
            placeholder="Оставьте комментарий к заказу"
            autoComplete="off"
          />
        </div>
        <p className={politics}>
          Оставляя заявку Вы соглашаетесь
          <br />с <Link to="/policy/">политикой конфиденциальности</Link>
        </p>
        <div className={formSubmit}>
          <button type="submit">Оплатить {price} руб.</button>
        </div>
        <div className={memo}>
          <p>
            Обязательно <span>укажите почту при оплате</span> для получения чека
            на сертификат. <br />
            <br /> По любым возникшим вопросам можно обращаться напрямую или
            оставить заявку.
          </p>
        </div>
      </form>
    </div>
  );
}

export default Form;
