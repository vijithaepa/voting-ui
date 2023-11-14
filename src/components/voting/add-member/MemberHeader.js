import React from 'react';
import { Card, Col, Button, Row } from 'react-bootstrap';

const MemberHeader = () => {
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

export default MemberHeader;
