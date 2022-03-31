import React,{useRef} from "react";
import "./contact.css";
import { FaMailBulk, FaFacebookMessenger } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import emailjs from 'emailjs-com'


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n20tk99', 'template_a5gp2zm', form.current, 'GDkmJd51zl1KIN2R6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FaMailBulk className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Panjikurniawan@gmail.com</h5>
            <a target="_blank" href="mailto:panjisetyokurniawan@gmail.com">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>@panjie.s.kurniawan</h5>
            <a target="_blank" href="https://m.me/panjie.s.kurniawan/">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiWhatsappFill className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+6281 575 969 200</h5>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=+6281575969200"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your FullName"
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea name="message" id="" cols="30" rows="10"></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
