import React, { useRef, useState } from 'react';
import Layout from '../../components/Layout';
import mapImg from '../../assets/contact/map_bg2.jpg';
import ContactImg from '../../assets/contact/contact2.png';
import { Container, Row, Col, Card, CardBody, Button, Form } from 'reactstrap';
import './contact.scss';
import emailjs from '@emailjs/browser';
import { IconName } from 'react-icons/io5';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_8cy1c5j',
        'template_u7hikal',
        form.current,
        'ikkYsG-wz2octZ4FS'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setMessage(true);
  }
  return (
    <>
      <Layout>
        <section id="contact">
          <div className="contact-box">
            <div className="contact-links">
              <h2>CONTACT</h2>
              <div className="links">
                <div className="link">
                  <a
                    href="https://www.linkedin.com/in/masud-rana-8a2174245/"
                    target="_blank"
                  >
                    <LinkedInIcon />
                  </a>
                </div>
                <div className="link">
                  <a
                    href="https://web.facebook.com/profile.php?id=100076589265865"
                    target="_blank"
                  >
                    <FacebookIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-item">
                  <input
                    type="text"
                    placeholder="Name"
                    name="from_name"
                    required
                  />
                </div>
                <div className="form-item">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter you email"
                  />
                </div>
                <div className="form-item">
                  <input
                    type="text"
                    placeholder="How do you find me"
                    name="source"
                  />
                </div>
                <div className="form-item">
                  <textarea
                    className=""
                    placeholder="Please enter your message details"
                    name="message"
                  ></textarea>
                </div>
                <button className="submit-btn">Send</button>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
