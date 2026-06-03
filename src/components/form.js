import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "gatsby";
import axios from "axios";
import { MdOutlineClose } from "react-icons/md";
import {
  inputForm,
  formSubmit,
  form,
  formContainer,
  closeBtn,
  formInput,
  politics,
} from "./form.module.scss";

function Form({ serviceselect, closeForm, orderDetail }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const telegramUrl = "/api/telegram.php";
  const mailUrl = "/api/mail.php";

  const onSubmit = (data) => {
    const telegramPayload = {
      telegram_message:
        "Заявка с сайта" +
        "%0A" +
        `${serviceselect}` +
        "%0A" +
        `${orderDetail}` +
        "%0A" +
        `${data.name}` +
        "%0A" +
        `${data.phone}` +
        "%0A" +
        `${data.message}`,
    };

    const mailPayload = {
      serviceselect,
      orderDetail,
      name: data.name,
      phone: data.phone,
      message: data.message,
    };

    // Отправляем одновременно в Telegram и на почту
    Promise.allSettled([
      // axios.post(telegramUrl, telegramPayload),
      axios.post(mailUrl, mailPayload),
    ]).then((results) => {
      const allFailed = results.every((r) => r.status === "rejected");

      if (allFailed) {
        alert(
          "Произошла ошибка при отправке заявки. Пожалуйста, свяжитесь с нами напрямую.",
        );
        return;
      }

      closeForm();
      alert("Спасибо за заявку! В ближайшее время мы свяжемся с Вами.");
    });
  };

  return (
    <div className={form}>
      <button className={closeBtn} onClick={closeForm}>
        <MdOutlineClose />
      </button>

      <h3>{serviceselect}</h3>
      <p>{orderDetail}</p>
      <form className={formContainer} onSubmit={handleSubmit(onSubmit)}>
        <div className={formInput}>
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
        </div>
        <p className={politics}>
          Оставляя заявку Вы соглашаетесь
          <br />с <Link to="/policy/">политикой конфиденциальности</Link>
        </p>
        <div className={formSubmit}>
          <button type="submit">Забронировать</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
