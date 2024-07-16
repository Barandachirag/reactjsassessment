import React from 'react';
import useForm from './useForm';
import validateInfo from './validateInfo';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component/styles.css';

const RegistrationForm = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(validateInfo);

  return (
    <Container className="container">
      <h1> User Registration </h1>
      <Form onSubmit={handleSubmit} noValidate>
        {/* Username */}
        <Form.Group as={Row} controlId="formUsername" className="form-group">
          <Form.Label column sm={3} className="form-label">
            Username <span style={{ color: 'red', fontSize: '20px' }}>*</span>
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
              isInvalid={!!errors.username}
              className="form-control"
            />
            <Form.Control.Feedback type="invalid">
              {errors.username}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        {/* Email */}
        <Form.Group as={Row} controlId="formEmail" className="form-group">
          <Form.Label column sm={3} className="form-label">
            Email <span style={{ color: 'red', fontSize: '20px' }}>*</span>
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
              className="form-control"
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        {/* Password */}
        <Form.Group as={Row} controlId="formPassword" className="form-group">
          <Form.Label column sm={3} className="form-label">
            Password <span style={{ color: 'red', fontSize: '20px' }}>*</span>
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              isInvalid={!!errors.password}
              className="form-control"
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        {/* Confirm Password */}
        <Form.Group as={Row} controlId="formConfirmPassword" className="form-group">
          <Form.Label column sm={3} className="form-label">
            Confirm Password <span style={{ color: 'red', fontSize: '20px' }}>*</span>
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              isInvalid={!!errors.confirmPassword}
              className="form-control"
            />
            <Form.Control.Feedback type="invalid">
              {errors.confirmPassword}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        {/* First Name */}
        <Form.Group as={Row} controlId="formFirstName" className="form-group">
          <Form.Label column sm={3} className="form-label">
            First Name <span style={{ color: 'red', fontSize: '20px' }}>*</span>
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              isInvalid={!!errors.firstName}
              className="form-control"
            />
            <Form.Control.Feedback type="invalid">
              {errors.firstName}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        {/* Last Name */}
        <Form.Group as={Row} controlId="formLastName" className="form-group">
          <Form.Label column sm={3} className="form-label">
            Last Name <span style={{ color: 'red', fontSize: '20px' }}>*</span>
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              isInvalid={!!errors.lastName}
              className="form-control"
            />
            <Form.Control.Feedback type="invalid">
              {errors.lastName}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        {/* Phone Number */}
        <Form.Group as={Row} controlId="formPhoneNumber" className="form-group">
          <Form.Label column sm={3} className="form-label">
            Phone Number <span style={{ color: 'red', fontSize: '20px' }}>*</span>
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              isInvalid={!!errors.phoneNumber}
              className="form-control"
            />
            <Form.Control.Feedback type="invalid">
              {errors.phoneNumber}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        {/* Address */}
        <Form.Group as={Row} controlId="formAddress" className="form-group">
          <Form.Label column sm={3} className="form-label">
            Address <span style={{ color: 'red', fontSize: '20px' }}>*</span>
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="address"
              value={values.address}
              onChange={handleChange}
              isInvalid={!!errors.address}
              className="form-control"
            />
            <Form.Control.Feedback type="invalid">
              {errors.address}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        {/* Town */}
        <Form.Group as={Row} controlId="formTown" className="form-group">
          <Form.Label column sm={3} className="form-label">
            Town 
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="town"
              value={values.town}
              onChange={handleChange}
              isInvalid={!!errors.town}
              className="form-control"
            />
            <Form.Control.Feedback type="invalid">
              {errors.town}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        {/* Region */}
        <Form.Group as={Row} controlId="formRegion" className="form-group">
          <Form.Label column sm={3} className="form-label">
            Region <span style={{ color: 'red', fontSize: '20px' }}>*</span>
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="region"
              value={values.region}
              onChange={handleChange}
              isInvalid={!!errors.region}
              className="form-control"
            />
            <Form.Control.Feedback type="invalid">
              {errors.region}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        {/* Postcode/Zip */}
        <Form.Group as={Row} controlId="formPostcode" className="form-group">
          <Form.Label column sm={3} className="form-label">
            Postcode/Zip <span style={{ color: 'red', fontSize: '20px' }}>*</span>
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="postcode"
              value={values.postcode}
              onChange={handleChange}
              isInvalid={!!errors.postcode}
              className="form-control"
            />
            <Form.Control.Feedback type="invalid">
              {errors.postcode}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        {/* Country */}
        <Form.Group as={Row} controlId="formCountry" className="form-group">
          <Form.Label column sm={3} className="form-label">
            Country <span style={{ color: 'red', fontSize: '20px' }}>*</span>
          </Form.Label>
          <Col sm={9}>
            <Form.Select style={{ borderRadius : '15px'}}
              name="country"
              value={values.country}
              onChange={handleChange}
              isInvalid={!!errors.country}
              className="form-control"
            >
              <option value="">Select Country</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              {/* Add more options as needed */}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.country}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        {/* Register Button */}
        <Form.Group as={Row} className="form-group">
          <Col sm={{ span: 9, offset: 3 }}>
            <Button
              type="submit"
              className="mt-3"
              style={{ backgroundColor: 'green', color: 'white', width: '30%' }}
            >
              Register
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default RegistrationForm;


