import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "gatsby";
import axios from "axios";
import {
  container,
  left,
  right,
  inputForm,
  formSubmit,
  title,
  politics,
} from "./form.module.scss";

function Form() {
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
          "Заявка / Вопрос с сайта" +
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
    <div className={container}>
      <div className={left}>
        <h3>Мы находимся</h3>
        <p>
          Красноярск,
          <br />
          Парижской Коммуны, 39а
          <br />
          оф 304 (3 этаж)
          <br />
          остановка: Парижской Коммуны
          <br />
          <br />
          телефон:
          <br />
          <a href="tel:+79631912128">+7 (963) 191-21-28</a>
          <br />
          <a href="tel:+73912712128">+7 (391) 271-21-28</a>
          <br />
          <a href="tel:+79676127339">+7 (967) 612-73-39</a>
        </p>
      </div>
      <div className={right}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className={title}>
            Если у вас остались вопросы, вы можете задать их здесь и мы
            обязательно с вами свяжемся в ближайшее время
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
            <p>3. Вопрос</p>
            <input
              {...register("message", {
                required: "Задайте интересующий Вас вопрос",
              })}
              placeholder="Расскажите или задайте вопрос"
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
    </div>
  );
}

export default Form;
