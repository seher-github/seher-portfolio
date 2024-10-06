import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Basic validation
    if (!name || !email || !message) {
      toast.error('Please fill in all fields');
      return;
    }

    // Store data in localStorage
    localStorage.setItem('contactData', JSON.stringify(formData));

    // Show success notification
    toast.success("Message sent successfully, I'll get back to you in a while!");

    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div id='contact' className='contact'>
      <ToastContainer />
      <Container>
        <Row className='row'>
          <Col className='col1'>
            <Card className='card' data-aos="fade-up" data-aos-duration="2000">
              <Card.Body>
                <Card.Title>
                  <FaMapMarkerAlt style={{ color: '#b575c6', fontSize: '30px' }} /> <br /> Address
                </Card.Title>
                <Card.Text>
                  Wah Cantt, Punjab, Pakistan
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='card' data-aos="fade-up" data-aos-duration="2000">
              <Card.Body>
                <Card.Title>
                  <FaPhoneAlt style={{ color: '#b575c6', fontSize: '30px' }} /> <br /> Phone
                </Card.Title>
                <Card.Text>
                  0300-********
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='card' data-aos="fade-up" data-aos-duration="2000">
              <Card.Body>
                <Card.Title>
                  <FaEnvelope style={{ color: '#b575c6', fontSize: '30px' }} /> <br /> Email
                </Card.Title>
                <Card.Text>
                  siddiqueseher39@gmail.com
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className='col2' xs={8}>
            <h2 data-aos="fade-up" data-aos-duration="2000">Send me a message</h2>
            <p data-aos="fade-up" data-aos-duration="2000">If you have any queries related to my work, you can reach out to me. It's my pleasure to help you.</p>
            <Form className='form' onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"  data-aos="fade-up" data-aos-duration="2000">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Good Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2"  data-aos="fade-up" data-aos-duration="2000">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1"  data-aos="fade-up" data-aos-duration="2000">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit"  data-aos="fade-up" data-aos-duration="2000">
                Send Now <ArrowForwardIcon />
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;