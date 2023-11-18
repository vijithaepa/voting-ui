import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormContext, useFieldArray } from 'react-hook-form';
import Flex from 'components/common/Flex';
import DatePicker from 'react-datepicker';

const PoliticalHistory = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'specifications'
  });

  const [history, setHistory] = useState({
    start: null,
    noOfYears: '',
    role: '',
    org: ''
  });

  return (
    <Card className="mb-lg-0 mt-3">
      <Card.Header as="h6" className="bg-light">
        Political History
      </Card.Header>
      <Card.Body>
        {fields.map((history, index) => (
          <Row key={index} className="gx-2 flex-between-center mb-3">
            <Col sm={3}>
              <h6 className="mb-0 text-600">
                {history.start.toLocaleDateString('en-AU')}
              </h6>
            </Col>
            <Col sm={3}>
              <h6 className="mb-0 text-600">{history.noOfYears}</h6>
            </Col>
            <Col sm={3}>
              <h6 className="mb-0 text-600">{history.role}</h6>
            </Col>
            <Col sm={3}>
              <Flex justifyContent="between" alignItems="center">
                <h6 className="mb-0 text-700">{history.org}</h6>
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

        <Row className="gy-3 gx-2">
          <Col sm={3} xl={2} xxl={2}>
            <DatePicker
              selected={history.start}
              onChange={date => {
                // console.log(
                //   'Selected Date ',
                //   date,
                //   date.toLocaleDateString('en-AU')
                // );
                setHistory({ ...history, start: date });
              }}
              formatWeekDay={day => day.slice(0, 3)}
              className="form-control"
              placeholderText="Select Date"
            />
          </Col>
          <Col sm={3}>
            <Form.Control
              type="text"
              size="sm"
              name="specificationLabel"
              placeholder="No Of Years"
              value={history.noOfYears}
              onChange={e =>
                setHistory({ ...history, noOfYears: e.target.value })
              }
            />
          </Col>
          <Col sm={3}>
            <Form.Control
              type="text"
              size="sm"
              name="specificationLabel"
              placeholder="Role"
              value={history.role}
              onChange={e => setHistory({ ...history, role: e.target.value })}
            />
          </Col>

          <Col sm={3} xl={4} xxl={4}>
            <Flex
              justifyContent="between"
              alignItems="center"
              className="gap-2"
            >
              {/*<Form.Control*/}
              {/*  type="text"*/}
              {/*  size="sm"*/}
              {/*  name="specificationProperty"*/}
              {/*  placeholder="Property"*/}
              {/*  value={history.property}*/}
              {/*  onChange={e =>*/}
              {/*    setHistory({*/}
              {/*      ...history,*/}
              {/*      property: e.target.value*/}
              {/*    })*/}
              {/*  }*/}
              {/*/>*/}
              <Form.Select
                onChange={e => {
                  console.log('Selected ', e, e.target.value);
                  setHistory({ ...history, org: e.target.value });
                }}
              >
                <option value="">Organisation</option>
                <option value="active">Active</option>
                <option value="incative">Inactive</option>
                <option value="draft">Draft</option>
              </Form.Select>
              <Button
                variant="falcon-default"
                size="sm"
                className="me-2"
                type="button"
                disabled={history.start === '' || history.noOfYears === ''}
                onClick={() => {
                  append({
                    start: history.start,
                    noOfYears: history.noOfYears,
                    role: history.role,
                    org: history.org
                  });
                  setHistory({
                    start: null,
                    noOfYears: '',
                    role: '',
                    org: ''
                  });
                }}
              >
                Add
              </Button>
            </Flex>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default PoliticalHistory;
