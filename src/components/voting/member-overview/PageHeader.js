import React, { useEffect, useState } from 'react';
import { Card, Pagination } from 'react-bootstrap';
import IconButton from 'components/common/IconButton';
import { getUserGreeting } from '../../../services/ContainerService';

const PageHeader = ({ info }) => {
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
          <h6 className="text-primary">{info.title}</h6>
          <h5 className="mb-0">
            {info.name} {greeting}
          </h5>
        </div>
        <Pagination className="pt-3">
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>1</Pagination.Item>
          <Pagination.Item active>2</Pagination.Item>
          <Pagination.Item>3</Pagination.Item>
          <Pagination.Item>4</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>10</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
        <div>
          <IconButton
            variant="primary"
            size="sm"
            icon="envelope"
            iconClassName="me-sm-1"
            className="me-2"
          >
            <span className="d-none d-sm-inline-block">Feedback</span>
          </IconButton>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PageHeader;
