import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Complete from "./complete";
import {
  container,
  left,
  right,
  inputForm,
  formSubmit,
  title,
} from "./form.module.scss";

function Form() {
  const [formComplete, setFormComplete] = useState(false);
  const [name, setName] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const url = "/api/telegram.php";

  const onSubmit = (data) =>
    axios
      .post(url, {
        user_name: data.name,
        user_phone: data.phone,
        user_about: data.about,
      })
      .then(function () {
        setFormComplete(!formComplete);
        setName(data.name);
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
          оф 312 (3 этаж)
          <br />
          остановка: Парижской Коммуны
          <br />
          <br />
          телефон:
          <br />
          +7(967) 612-73-39
          <br />
          +7(391) 271-22-01
        </p>
      </div>
      <div className={right}>
        {formComplete ? (
          <Complete name={name} />
        ) : (
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
                {...register("about", {
                  required: "Задайте интересующий Вас вопрос",
                })}
                placeholder="Расскажите или задайте вопрос"
                autoComplete="off"
              />
              {errors.phone && <span>{errors.about.message}</span>}
            </div>

            <div className={formSubmit}>
              <button type="submit">Отправить</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Form;
