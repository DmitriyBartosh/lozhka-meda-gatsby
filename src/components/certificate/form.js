import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "gatsby";
import axios from "axios";
import { MdOutlineClose } from "react-icons/md";
import {
  background,
  closeBtn,
  title,
  inputForm,
  politics,
  formSubmit,
} from "./form.module.scss";

function Form({ serviceInfo, closeForm }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const url = "/api/telegram.php";

  const onSubmit = (data) =>
    axios
      .post(url, {
        telegram_message:
          "Заявка с сайта" +
          "%0A" +
          `${serviceInfo}` +
          "%0A" +
          `${data.name}` +
          "%0A" +
          `${data.phone}` +
          "%0A" +
          `${data.message}`,
      })
      .then(function () {
        alert("Спасибо за заявку! В ближайшее время мы свяжемся с Вами.");
      });

  return (
    <div className={background}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <button className={closeBtn} onClick={closeForm}>
          <MdOutlineClose />
        </button>
        <h2>{serviceInfo}</h2>
        <p className={title}>
          {" "}
          Оставьте заявку и мы с Вами свяжемся, для уточнения заказа
        </p>

        <div className={inputForm}>
          <p>1. Имя</p>
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
          <p>2. Телефон или соц. сети</p>
          <input
            {...register("phone", {
              required:
                "Оставьте Ваши контакты для связи и мы обязательно ответим",
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
          <p>3. Комментарий</p>
          <input
            {...register("message", {
              required: "Комментарий к заказу",
            })}
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
          <button type="submit">Отправить</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
