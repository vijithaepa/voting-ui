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
            <Form.Group>
              <Form.Label>Title:</Form.Label>
              <Form.Control
                type="text"
                isInvalid={!!errors.title}
                {...register('title')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.title?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md="12">
            <Form.Group>
              <Form.Label>Full Name:</Form.Label>
              <Form.Control
                type="text"
                isInvalid={!!errors.fullName}
                {...register('fullName')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.fullName?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md="12">
            <Form.Group>
              <Form.Label>Address:</Form.Label>
              <Form.Control
                type="text"
                isInvalid={!!errors.address}
                {...register('address')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.address?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md="12">
            <Form.Group controlId="dateOfBirth">
              <Form.Label>Date of Birth:</Form.Label>
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
            </Form.Group>
          </Col>
          <Col md="12">
            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="text"
                isInvalid={!!errors.email}
                {...register('email')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md="12">
            <Form.Group>
              <Form.Label>Phone No:</Form.Label>
              <Form.Control
                type="text"
                isInvalid={!!errors.phoneNo}
                {...register('phoneNo')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phoneNo?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md="12">
            <Form.Group>
              <Form.Label>Status:</Form.Label>
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
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default MemberInfo;
