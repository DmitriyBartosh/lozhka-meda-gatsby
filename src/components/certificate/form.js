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
} from "./form.module.scss";

function Form({ serviceInfo, price, closeForm }) {
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
          <p>3. Телефон или соц. сети</p>
          <input
            {...register("phone", {
              required: "Оставьте Ваши контакты для связи",
              maxLength: {
                value: 30,
                message:
                  "Мы думали 30 символов должно хватить... может есть другая ссылка?",
              },
            })}
            placeholder="Телефон или ссылку на соц сети"
            autoComplete="off"
          />
          {errors.phone && <span>{errors.phone.message}</span>}
        </div>

        <div className={inputForm}>
          <p>4. Комментарий</p>
          <input
            placeholder="Оставьте комментарий к заказу"
            autoComplete="off"
          />
          {errors.message && <span>{errors.message.message}</span>}
        </div>
        <p className={politics}>
          Оставляя заявку Вы соглашаетесь
          <br />с <Link to="/policy/">политикой конфиденциальности</Link>
        </p>
        <div className={formSubmit}>
          <button type="submit">Оплатить {price} руб.</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
