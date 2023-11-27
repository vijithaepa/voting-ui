import React, { useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import CustomDateInput from '../../common/CustomDateInput';

const MemberInfo = () => {
  const {
    register,
    setValue,
    formState: { errors }
  } = useFormContext();

  const [formData, setFormData] = useState({
    dateOfBirth: null
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <Card className="mb-3">
      <Card.Header as="h6" className="bg-light">
        Basic information
      </Card.Header>
      <Card.Body>
        <Row className="gx-2 gy-3">
          <Col md="12">
            <Form.Group as={Row}>
              <Form.Label column xl="3" xxl="2">
                Title:
              </Form.Label>
              <Col xl="9" xxl="10">
                <Form.Select {...register(`title`)} isInvalid={!!errors.title}>
                  <option value="">Select</option>
                  <option value="mr">Mr</option>
                  <option value="mrs">Mrs</option>
                  <option value="other">Other</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.title?.message}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Col>
          <Col md="12">
            <Form.Group as={Row}>
              <Form.Label column xl="3" xxl="2">
                Full Name:
              </Form.Label>
              <Col xl="9" xxl="10">
                <Form.Control
                  type="text"
                  isInvalid={!!errors.fullName}
                  {...register('fullName')}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.fullName?.message}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Col>
          <Col md="12">
            <Form.Group as={Row}>
              <Form.Label column xl="3" xxl="2">
                Address:
              </Form.Label>
              <Col xl="9" xxl="10">
                <Form.Control
                  type="text"
                  isInvalid={!!errors.address}
                  {...register('address')}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.address?.message}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Col>
          <Col md="12">
            <Form.Group as={Row} controlId="dateOfBirth">
              <Form.Label column xl="3" xxl="2">
                Date of Birth:
              </Form.Label>
              <Col xl="9" xxl="10">
                <DatePicker
                  selected={formData.dateOfBirth}
                  onChange={newDate => {
                    handleChange('dateOfBirth', newDate);
                    setValue('dateOfBirth', newDate);
                  }}
                  customInput={
                    <CustomDateInput
                      formControlProps={{
                        ...register('dateOfBirth')
                      }}
                    />
                  }
                />
              </Col>
            </Form.Group>
          </Col>
          <Col md="12">
            <Form.Group as={Row}>
              <Form.Label column xl="3" xxl="2">
                Email:
              </Form.Label>
              <Col xl="9" xxl="10">
                <Form.Control
                  type="text"
                  isInvalid={!!errors.email}
                  {...register('email')}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email?.message}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Col>
          <Col md="12">
            <Form.Group as={Row}>
              <Form.Label column xl="3" xxl="2">
                Phone No:
              </Form.Label>
              <Col xl="9" xxl="10">
                <Form.Control
                  type="text"
                  isInvalid={!!errors.phoneNo}
                  {...register('phoneNo')}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phoneNo?.message}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Col>
          <Col md="12">
            <Form.Group as={Row}>
              <Form.Label column xl="3" xxl="2">
                Status:
              </Form.Label>
              <Col xl="9" xxl="10">
                <Form.Select
                  {...register(`memberStatus`)}
                  isInvalid={!!errors.memberStatus}
                >
                  <option value="">Select</option>
                  <option value="active">Active</option>
                  <option value="incative">Inactive</option>
                  <option value="draft">Draft</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.memberStatus?.message}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default MemberInfo;
