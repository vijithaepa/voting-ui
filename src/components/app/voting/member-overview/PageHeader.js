import React, { useEffect, useState } from 'react';
import { Card, Nav } from 'react-bootstrap';
import IconButton from 'components/common/IconButton';
import { getUserGreeting } from '../../../../services/ContainerService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";

const PageHeader = () => {
  const [greeting, setGreeting] = useState('');
  useEffect(() => {
    // let ignore = false;
    setGreeting('');
    getUserGreeting().then(res => {
      // if (!ignore) {
      setGreeting(res);
      // }
    });
  }, []);

  return (
    <Card className="mb-3">
      <Card.Body className="d-flex gap-2 flex-wrap flex-between-center">
        <div>
          <h6 className="text-primary">Learner</h6>
          <h5 className="mb-0">Michael Giacchino {greeting}</h5>
        </div>
        <div>
          <IconButton
            variant="primary"
            size="md"
            icon="envelope"
            iconClassName="me-sm-1"
            className="me-2"
          >
            <span className="d-none d-sm-inline-block">Feedback</span>
          </IconButton>
        </div>
        <div>
          <IconButton
            iconClassName="me-sm-2"
            // size="sm"
            className="rounded-pill me-1 mb-1"
            icon='arrow-left'
            variant="falcon-default"
            iconAlign="left"
          >
            First
          </IconButton>
          <IconButton
            className="rounded-pill me-1 mb-1"
            variant="falcon-default"
            icon="angle-left"
            transform="shrink-2"
          >
            Prev
          </IconButton>
          <IconButton
            className="rounded-pill me-1 mb-1"
            variant="falcon-default"
            icon="angle-right"
            iconAlign="right"
            transform="shrink-3"
          >
            Next
          </IconButton>
          <IconButton
            className="rounded-pill me-1 mb-1"
            variant="falcon-default"
            icon="arrow-right"
            iconAlign="right"
            transform="shrink-3"
          >
            Last
          </IconButton>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PageHeader;
