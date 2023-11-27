import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormContext, useFieldArray } from 'react-hook-form';
import Flex from 'components/common/Flex';
import DatePicker from 'react-datepicker';

const Activities = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'activities'
  });

  const [activity, setActivity] = useState({
    date: null,
    description: '',
    role: '',
    category: ''
  });

  return (
    <Card className="mb-lg-0 mt-3">
      <Card.Header as="h6" className="bg-light">
        Activities
      </Card.Header>
      <Card.Body>
        <Row className="gy-3 gx-2">
          <Col sm={2}>
            <Form.Control
              type="text"
              size="sm"
              name="roleLabel"
              placeholder="Role"
              value={activity.role}
              onChange={e => setActivity({ ...activity, role: e.target.value })}
            />
          </Col>
          <Col sm={4}>
            <Form.Control
              type="text"
              size="sm"
              name="descriptionLabel"
              placeholder="Description"
              value={activity.description}
              onChange={e =>
                setActivity({ ...activity, description: e.target.value })
              }
            />
          </Col>
          <Col sm={3} xl={2} xxl={2}>
            <DatePicker
              selected={activity.date}
              onChange={date => {
                setActivity({ ...activity, date: date });
              }}
              formatWeekDay={day => day.slice(0, 3)}
              className="form-control"
              placeholderText="Select Date"
            />
          </Col>
          <Col sm={3} xl={4} xxl={4}>
            <Flex
              justifyContent="between"
              alignItems="center"
              className="gap-2"
            >
              <Form.Select
                size="sm"
                onChange={e => {
                  setActivity({ ...activity, category: e.target.value });
                }}
              >
                <option value="">Category</option>
                <option value="political">Political</option>
                <option value="nonprofit">Non Profit</option>
                <option value="ngo">NGO</option>
                <option value="voluntary">Voluntary</option>
              </Form.Select>
              <Button
                variant="falcon-default"
                size="sm"
                className="me-2"
                type="button"
                disabled={activity.date === '' || activity.role === ''}
                onClick={() => {
                  append({
                    date: activity.date,
                    description: activity.description,
                    role: activity.role,
                    category: activity.category
                  });
                  setActivity({
                    date: null,
                    description: '',
                    role: '',
                    category: ''
                  });
                }}
              >
                Add
              </Button>
            </Flex>
          </Col>
        </Row>

        {fields.map((activity, index) => (
          <Row key={index} className="gx-2 flex-between-center mt-3">
            <Col sm={2}>
              <h6 className="mb-0 text-600">{activity.role}</h6>
            </Col>
            <Col sm={4}>
              <h6 className="mb-0 text-600">{activity.description}</h6>
            </Col>
            <Col sm={3}>
              <h6 className="mb-0 text-600">
                {activity.date.toLocaleDateString('en-AU')}
              </h6>
            </Col>
            <Col sm={3}>
              <Flex justifyContent="between" alignItems="center">
                <h6 className="mb-0 text-700">{activity.category}</h6>
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

export default Activities;
