import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import InputField from '../InputField';
import Flex from '../../common/Flex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFieldArray, useFormContext } from 'react-hook-form';
import MemberInfo from './MemberInfo';
import PropTypes from 'prop-types';

const Education = ({ status }) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'education'
  });

  const [formData, setFormData] = useState({
    institution: '',
    qualification: '',
    from: null,
    to: null,
    status: 'active'
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  console.log('Education status', status);

  return (
    <Card className="mb-lg-0 mt-3">
      <Card.Header as="h6" className="bg-light">
        Education Qualifications
      </Card.Header>
      <Card.Body>
        {/*<Form onSubmit={handleSubmit}>*/}
        <InputField
          value={formData.institution}
          label="Institution"
          name="institution"
          handleChange={handleChange}
        />
        <InputField
          value={formData.qualification}
          label="Qualification"
          name="qualification"
          handleChange={handleChange}
        />
        {/*<InputField*/}
        {/*  value={formData.field}*/}
        {/*  label="Field"*/}
        {/*  name="field"*/}
        {/*  handleChange={handleChange}*/}
        {/*/>*/}

        <InputField
          type="date"
          selected={formData.from}
          label="From"
          name="from"
          onChange={value => {
            setFormData({ ...formData, from: value });
          }}
        />

        <InputField
          type="date"
          selected={formData.to}
          label="To"
          name="to"
          onChange={value => {
            setFormData({ ...formData, to: value });
          }}
        />

        <Form.Group as={Row} className="mb-3" controlId="status">
          <Form.Label column sm={3} className="text-lg-end">
            Status
          </Form.Label>
          <Col sm={9} md={7}>
            <Form.Select
              onChange={e =>
                setFormData({ ...formData, status: e.target.value })
              }
              value={formData.status}
            >
              {status &&
                Object.keys(status).map((key, index) => (
                  <option key={index} value={key}>
                    {status[key]}
                  </option>
                ))}
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 3 }}>
            <Button
              variant="falcon-default"
              size="sm"
              className="me-2"
              type="button"
              disabled={
                !formData.institution ||
                !formData.qualification ||
                !formData.from ||
                !formData.to
              }
              onClick={() => {
                append({
                  institution: formData.institution,
                  qualification: formData.qualification,
                  from: formData.from,
                  to: formData.to,
                  status: formData.status
                });
                setFormData({
                  institution: '',
                  qualification: '',
                  from: '',
                  to: '',
                  status: 'active'
                });
              }}
            >
              Add
            </Button>
          </Col>
        </Form.Group>
        {/*</Form>*/}
        {fields.map((education, index) => (
          <Row key={index} className="gx-2 flex-between-center mb-3">
            <Col sm={3}>
              <h6 className="mb-0 text-600">{education.institution}</h6>
            </Col>
            <Col sm={3}>
              <h6 className="mb-0 text-600">{education.qualification}</h6>
            </Col>
            <Col sm={2}>
              <h6 className="mb-0 text-600">
                {education.from.toLocaleDateString('en-AU')}
              </h6>
            </Col>
            <Col sm={2}>
              <h6 className="mb-0 text-600">
                {education.to.toLocaleDateString('en-AU')}
              </h6>
            </Col>
            <Col sm={2}>
              <Flex justifyContent="between" alignItems="center">
                <h6 className="mb-0 text-700">{education.status}</h6>
                <Button
                  variant="link"
                  to="#!"
                  type="button"
                  className="text-danger"
                  size="sm"
                  onClick={() => remove(index)}
                >
                  <FontAwesomeIcon className="fs--1" icon="trash-alt" />
                </Button>
              </Flex>
            </Col>
          </Row>
        ))}
      </Card.Body>
    </Card>
  );
};

Education.propTypes = {
  categories: PropTypes.object
};

export default Education;
