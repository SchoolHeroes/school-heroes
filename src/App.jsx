import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ScheduleModal } from './components/SheduleModal/ScheduleModal';
import { Modal } from './components/Modal/Modal';

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = (prev) => setIsOpenModal(!prev);

  const handleCloseModal = () => {
      toggleModal(isOpenModal);
  };

  return (
   
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Додаток в процесі розробки.
        </p>
        <a
          className="App-link"
          href="https://sites.google.com/view/shkolageroev/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          Школа Героїв
        </a>
      
      <button 
          type="button"
          onClick={() => toggleModal(isOpenModal)} 
          className="button"
      >
          Запланувати розсилку
      </button>
      {isOpenModal && 
          <Modal
            isOpenModal={isOpenModal}
            closeModal={handleCloseModal}
          >
              <ScheduleModal
                  closeModal={handleCloseModal}
              />
          </Modal>
        }  
        </header>
    </div>
  );
}

export default App;
