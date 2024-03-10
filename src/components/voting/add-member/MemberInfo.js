import React, { useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

const MemberInfo = ({ userStatus }) => {
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

  console.log(
    'Member Info ',
    userStatus,
    userStatus ? Object.keys(userStatus) : ''
  );

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
                  dateFormat="dd-MM-yyyy"
                  // customInput={
                  //   <CustomDateInput
                  //     formControlProps={{
                  //       ...register('dateOfBirth')
                  //     }}
                  //   />
                  // }
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
                {/*<Select*/}
                {/*  closeMenuOnSelect={true}*/}
                {/*  // options={getMemberStatusOptions()}*/}
                {/*  placeholder='Select...'*/}
                {/*  classNamePrefix="react-select"*/}
                {/*  value={selectedOption}*/}
                {/*  onChange={setSelectedOption}*/}
                {/*>*/}
                {/*  {userStatus && Object.keys(userStatus).map((key, index) =>*/}
                {/*    <option key={index} value={userStatus[key]}>*/}
                {/*      {userStatus[key]} 1*/}
                {/*    </option>*/}
                {/*  )}*/}
                {/*</Select>*/}

                <Form.Select
                  {...register(`memberStatus`)}
                  isInvalid={!!errors.memberStatus}
                >
                  {userStatus &&
                    Object.keys(userStatus).map((key, index) => (
                      <option key={index} value={key}>
                        {userStatus[key]}
                      </option>
                    ))}
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

MemberInfo.propTypes = {
  userStatus: PropTypes.object
};

export default MemberInfo;
