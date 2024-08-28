import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import "./ContactSection.css";
import { HiOutlineMail } from "react-icons/hi";

function ContactSection() {
  return (
    <div className="contact-shell">
      <div className="contact-container text-center">
        <h2 className="contact-title">
          Şirketiniz için Teknoloji yeteneği mi arıyorsunuz?
        </h2>
        <div className="contact-text">
          Birlikte etkinlik düzenlemek ve size ulaşmamız için şirket e-mail
          adresinizi girin! 🚀
        </div>
        <Form className="d-flex mx-auto navbar-search input-container">
          <InputGroup className="email-input">
            <InputGroup.Text id="basic-addon1">
              <HiOutlineMail />
            </InputGroup.Text>
            <FormControl
              placeholder="Şirket E-Mail Adresiniz"
              aria-label="Email"
              aria-describedby="basic-addon1"
            />
            <Button variant="success" id="button-addon2">
              Gönder
            </Button>
          </InputGroup>
        </Form>
        <p className="contact-suggest-text">Tüm Soru ve Önerileriniz için;</p>
        <div className="contacts">
          <a href="mailto:hello@techcareer.net">hello@techcareer.net</a>
          <span style={{ color: "#fff" }}>|</span>
          <p>0216 468 76 00</p>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
