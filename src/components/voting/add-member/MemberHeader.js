import React from 'react';
import { Card, Col, Button, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import MemberInfo from './MemberInfo';

const MemberHeader = ({ onCancel }) => {
  return (
    <Card>
      <Card.Body>
        <Row className="flex-between-center">
          <Col md>
            <h5 className="mb-2 mb-md-0">Add a Member</h5>
          </Col>
          <Col xs="auto">
            <Button
              variant="link"
              className="text-secondary fw-medium p-0 me-3"
              type="button"
              onClick={onCancel}
            >
              Discard
            </Button>
            <Button variant="primary" type="submit">
              Add Member
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

MemberHeader.propTypes = {
  onCancel: PropTypes.func
};

export default MemberHeader;
