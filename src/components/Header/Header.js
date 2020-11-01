import React from "react";
import Logo from "../../img/Stratosafe.png";
import "./Header.module.css";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

function MyVerticallyCenteredModal(props) {
  console.log(props);

  const { speak } = useSpeechSynthesis();
  const { cancel } = useSpeechSynthesis();

  const [state, setCount] = useState('Attention passengers on NS Air flight 232 to Halifax. The departure gate has been changed. The flight will now be leaving from Gate 26.');
  // state = 'Attention passengers on NS Air flight 232 to Halifax. The departure gate has been changed. The flight will now be leaving from Gate 26.'

  const onClickButton1 = (language) => {
    switch(language){
      case 'Arabic':
        setCount("ركاب الانتباه على رحلة NS Air 232 إلى هاليفاكس. تم تغيير بوابة المغادرة. ستغادر الرحلة الآن من بوابة 26.");
        break;
      case 'Persian':
        setCount("توجه مسافران پرواز NS Air 232 به هالیفاکس. دروازه عزیمت تغییر کرده است. اکنون پرواز از دروازه 26 انجام می شود");
        break;
      case 'Italian':
        setCount("Attenzione ai passeggeri del volo NS Air 232 per Halifax. Il gate di partenza è stato modificato. Il volo partirà ora dal Gate 26.");
        break;
      case 'Swedish':
        setCount("Uppmärksamhet passagerare på NS Air flyg 232 till Halifax. Avgångsgrinden har ändrats. Flygningen avgår nu från Gate 26.");
        break;
      case 'Portuguese':
        setCount("Atenção aos passageiros do voo 232 da NS Air para Halifax. O portão de embarque foi alterado. O voo partirá agora do Portão 26.");
        break;
      case 'English':
        setCount("Attention passengers on NS Air flight 232 to Halifax. The departure gate has been changed. The flight will now be leaving from Gate 26.");
        break;
      case 'Spanish':
        setCount("Atención, pasajeros del vuelo 232 de NS Air a Halifax. Se ha cambiado la puerta de salida. El vuelo saldrá ahora de la puerta 26.")
        break;
      case 'French':
        setCount("Attention aux passagers du vol 232 de NS Air à destination de Halifax. La porte d'embarquement a été changée. Le vol partira désormais de la porte 26.");
        break;
      case 'Urdu':
        setCount("این ایس ایئر کی پرواز 232 میں ہیلی فیکس جانے والے مسافروں کو دھیان دیں۔ روانگی گیٹ تبدیل کر دیا گیا ہے۔ اب یہ پرواز گیٹ 26 سے روانہ ہوگی۔");
        break;
      case 'Hindi':
        setCount("यात्रियों को एनएस एयर की उड़ान 232 के हैलिफ़ैक्स पर ध्यान दें। प्रस्थान द्वार को बदल दिया गया है। फ्लाइट अब गेट 26 से रवाना होगी।");
        break;
      case 'German':
        setCount("Achtung Passagiere auf NS Air Flug 232 nach Halifax. Das Abfluggate wurde geändert. Der Flug startet nun am Gate 26.")
        break;
      case 'Chinese':
          setCount("NS Air 232航班飞往哈利法克斯的注意乘客。登机口已更改。航班现在将从26号登机口出发")
        break;
      default:
        break
    }
  }

  return (
    
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Announcements
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Flight Delay Announcement:</h4>
        <p>
        {state}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <DropdownButton id="dropdown-basic-button" title="Translate">
          <Dropdown.Item onClick={()=> onClickButton1("English")} href="#/action-1">English</Dropdown.Item>
          <Dropdown.Item onClick={()=> onClickButton1("French")} href="#/action-2">French</Dropdown.Item>
          <Dropdown.Item onClick={()=> onClickButton1("Persian")} href="#/action-2">Persian</Dropdown.Item>
          <Dropdown.Item onClick={()=> onClickButton1("Spanish")} href="#/action-2">Spanish</Dropdown.Item>
          <Dropdown.Item onClick={()=> onClickButton1("Portuguese")} href="#/action-2">Portuguese</Dropdown.Item>
          <Dropdown.Item onClick={()=> onClickButton1("Swedish")} href="#/action-2">Swedish</Dropdown.Item>
          <Dropdown.Item onClick={()=> onClickButton1("Italian")} href="#/action-2">Italian</Dropdown.Item>
          <Dropdown.Item onClick={()=> onClickButton1("German")}  href="#/action-3">German</Dropdown.Item>
          <Dropdown.Item onClick={()=> onClickButton1("Arabic")} href="#/action-1">Arabic</Dropdown.Item>
          <Dropdown.Item onClick={()=> onClickButton1("Urdu")}  href="#/action-3">Urdu</Dropdown.Item>
          <Dropdown.Item onClick={()=> onClickButton1("Hindi")}  href="#/action-3">Hindi</Dropdown.Item>
          <Dropdown.Item onClick={()=> onClickButton1("Chinese")}  href="#/action-3">Chinese</Dropdown.Item>
        </DropdownButton>
        <Button onClick={() => speak({ text: state })}>Listen to Speech</Button>
        <Button onClick={cancel}>Stop</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Header = () => {
  
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <header>
        <img src={Logo} alt="logo" />
        <div className="navigationbar">
          <ul>
            <li>
              {" "}
              <Button variant="primary" onClick={() => setModalShow(true)}>
                Announcements
             </Button>
             <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
      
            />
            </li>
            <li>
              {" "}
              <a href="#">Chatbot</a>
            </li>
          </ul>
          <div className="Title1">
            <h1>TRAVEL SAFE WITH STRATOSAFE-</h1>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
