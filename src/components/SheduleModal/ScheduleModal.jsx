import { useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DatePicker, {registerLocale} from 'react-datepicker';
import uk from 'date-fns/locale/uk';
import 'react-datepicker/dist/react-datepicker.css';
import css from './ScheduleModal.module.css';

axios.defaults.baseURL = 'https://school-heroes-backend.onrender.com';
// axios.defaults.baseURL = 'http://localhost:3000/';

export const ScheduleModal = ({ closeModal }) => {
    registerLocale('uk', uk);
  const [dateInput, setDateInput] = useState(null);

  const handleDateInputChange = date => {
    setDateInput(date);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    // Конвертуємо дату в ISO-формат для передачі на сервер
    const isoDate = dateInput.toISOString();
    console.log('isoDate', isoDate);

    try {
      await axios.post("/api/help/telegram-task", {
        date: isoDate,
        zoomLink: 'https://us05web.zoom.us/j/88529686310?pwd=EmAzHZFt8fkcjvKy3oJfhIORKHhBcU.1'
      }); 
      } 
      catch (error) {
        alert(error.message);
        console.error(error.message);
      }
    
    closeModal();
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Form onSubmit={handleSave} className={css.form}>
        <Form.Group 
            controlId="formDate"
            className={css.groupInputDate} 
            >
            <Form.Label className={css.label}>
              Запланувати розсилку SH_bot
            </Form.Label>
            <DatePicker 
                className={css.inputDate}
                selected={dateInput}
                onChange={handleDateInputChange}
                minDate={new Date()}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="Pp"
                placeholderText="Виберіть дату та час"
                locale="uk" 
            />
        </Form.Group>
        <div className={css.wrapperBtn}>
          <Button 
            variant="primary"
            type="submit"
            disabled={!dateInput}
            className={css.primaryBtn}
          >
            Зберегти
          </Button>
          <Button
            onClick={closeModal} 
            className={css.cancelBtn}
          >
            Скасувати
          </Button>
        </div>        
      </Form>
    </div>
  );
};