/** Механизм валидации вводимы данных */
import validator from 'validator';


export default function validate(value_type, value) {
  /** Валидатор
   * 
   * value_type (String) - название процедуры проверки
   * value - значение для проверки
   * 
   * return:
   *      state (Bolean) - состояние проверки
   *      message - текст ошибки
   */
  const validator = new Validation(value_type, value);
  validator.check();

  return {
    state: validator.state,
    message: validator.error_message,
  }
}

class Validation {
  /** Обьект с механизмами валидации */
  constructor(value_type, value){
    this.value_type = value_type;
    this.value = value;
    this.state = true;
    this.error_message = '';
  }

  check() {
    switch (this.value_type) {
      case 'number':
        this._number();
        break;
        
      case 'string':
        this._string();
        break;

      case 'phone':
        this._phone();
        break;
      
      case 'email':
        this._email();
        break;

      default:
        this.state = false;
        this.error_message = 'Неизвестный тип валидации'
        break;
    }        
  }

  _number() {
    if (isNaN(this.value)) { // /^(0|[1-9]\d)$/   /^(0|[1-9]\d*)(\.[0-9]{1,2})?$/
      this.state = false;
      this.error_message = 'Значение должно быть числовым';
    }
  }

  _string() {
    if (this.value.length > 60) {
      this.state = false;
      this.error_message = 'Максимально кол-во символов 60';
    } else if (this.value.length === 0 || this.value.length === '') {
      this.state = false;
      this.error_message = 'Поле не должно быть пустым'
    } else if (!validator.isAlpha(this.value, 'ru-RU') && !validator.isAlpha(this.value, 'en-US')) {
      this.state = false;
      this.error_message = 'Поле должно содержать только буквы одного алфавита'
    }
  }

  _bigString() {
    if (this.value.length > 500) {
      this.state = false;
      this.error_message = 'Максимально кол-во символов 300';
    } else if (this.value.length === 0 || this.value.length === '') {
      this.state = false;
      this.error_message = 'Поле не должно быть пустым'
    }
  }

  _phone() {
    if (!validator.isMobilePhone(this.value, ['ru-RU'])) {
      this.state = false;
      this.error_message = 'Некорректный номер телефона'
    }
  }

  _email() {
    if (!validator.isEmail(this.value)) {
      this.state = false;
      this.error_message = 'Некорректный адрес электронной почты'
    }
  }
}
