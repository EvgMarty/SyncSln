import Button from '../../Ui/Button/Button';
import styles from './Form.module.scss';
import { useState } from 'react';

const Form = () => {
  const [selectOpen, setSelectOpen] = useState(false);

  const [data, setData] = useState({
    userName: '',
    userMail: '',
    userMessage: '',
    choice: 'Make',
    isChecked: false,
  });

  const handlerInputChang = (text, name) => {
    setData({ ...data, [name]: text });
  };

  const handlerForSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(data));

    // Очистите поля формы
    setData({
      userName: '',
      userMail: '',
      userMessage: '',
      choice: 'Make',
      isChecked: false,
    });
  };

  const handlerCheckboxChange = (isChecked) => {
    setData({ ...data, isChecked });
  };

  const togleSelectOpen = () => {
    setSelectOpen(!selectOpen);
  };

  return (
    <form className={styles.form} onSubmit={handlerForSubmit}>
      <div className={styles.formWrap}>
        <div className={styles.inputGroup}>
          <img
            className={styles.formImg}
            src="./img/form/name.svg"
            alt="name"
          />
          <input
            placeholder="Name"
            className={styles.formInput}
            value={data.userName}
            onChange={(e) => handlerInputChang(e.target.value, 'userName')}
            type="text"
          />
        </div>

        <div className={styles.inputGroup}>
          <img
            className={styles.formImg}
            src="./img/form/mail.svg"
            alt="name"
          />
          <input
            placeholder="E-mail"
            className={styles.formInput}
            value={data.userMail}
            onChange={(e) => handlerInputChang(e.target.value, 'userMail')}
            type="email"
          />
        </div>

        <div className={styles.inputGroup}>
          <img
            className={styles.formImg}
            src="./img/form/coin.svg"
            alt="name"
          />
          <img
            className={
              selectOpen ? `${styles.formImgR_open}` : `${styles.formImgR}`
            }
            src="./img/form/v.svg"
            alt="name"
          />
          <select
            onClick={() => togleSelectOpen()}
            className={styles.customSelect}
            id="choice"
            name="choice"
            value={data.choice}
            onChange={(e) => handlerInputChang(e.target.value, 'choice')}
          >
            <option value="General Make">◯ Make a choice</option>
            <option value="General">◯ General Inquiries</option>
            <option value="Project">◯ Project offer</option>
            <option value="Career">◯ Career opportunities</option>
          </select>
        </div>
      </div>

      <div className={styles.inputGroupText}>
        <img className={styles.formImg} src="./img/form/text.svg" alt="name" />
        <input
          placeholder="Text..."
          className={styles.formInputText}
          value={data.userMessage}
          onChange={(e) => handlerInputChang(e.target.value, 'userMessage')}
          type="text"
        />
      </div>

      <div className={styles.checbocksGroup}>
        <input
          type="checkbox"
          id="myCheckbox"
          name="myCheckbox"
          value="isChecked"
          checked={data.isChecked}
          onChange={(e) => handlerCheckboxChange(e.target.checked)}
        />
        <label htmlFor="myCheckbox">
          I consent to the processing of data in accordance with the data
          protection statement.
        </label>
      </div>

      <Button type="submit" title="Отправить">
        Submit
      </Button>
    </form>
  );
};

export default Form;
