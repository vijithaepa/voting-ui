import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Dropdown, ProgressBar } from 'react-bootstrap';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import IconButton from 'components/common/IconButton';
import Flex from 'components/common/Flex';
import CardDropdown from 'components/common/CardDropdown';
import FalconCardFooterLink from 'components/common/FalconCardFooterLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const columns = [
  {
    accessor: 'title',
    Header: 'Case Title',
    cellProps: {
      className: 'white-space-nowrap',
      style: { maxWidth: '23rem' }
    },
    Cell: rowData => (
      <Flex alignItems="center" className="gap-3 position-relative">
        <Link
          className="text-truncate stretched-link"
          to="/member/member-details"
        >
          {rowData.row.original.title}
        </Link>
      </Flex>
    )
  },
  {
    accessor: 'incidentDate',
    Header: 'Incident Date',
    headerProps: {
      className: 'fw-medium'
    }
  },
  {
    accessor: 'publishedDate',
    Header: 'Published Date',
    headerProps: {
      className: 'fw-medium'
    }
  },
  {
    accessor: 'source',
    Header: 'Source',
    headerProps: {
      className: 'fw-medium'
    }
  },
  {
    accessor: 'credibility',
    Header: 'Credibility',
    headerProps: {
      className: 'fw-medium'
    },
    Cell: rowData => (
      <ProgressBar
        className="me-3 bg-200 rounded-pill"
        now={rowData.row.original.credibility}
        style={{ width: 80, height: 5 }}
      />
    )
  },
  {
    accessor: 'none',
    Header: '',
    disableSortBy: true,
    cellProps: {
      className: 'text-end'
    },
    Cell: () => {
      return <FontAwesomeIcon icon="download" className="ms-1" />;
    }
  }
];

const Convictions = ({ tableData, perPage = 6 }) => {
  return (
    <AdvanceTableWrapper
      columns={columns}
      data={tableData}
      sortable
      pagination
      perPage={perPage}
    >
      <Card className="h-100">
        <Card.Header className="d-flex flex-between-center">
          <h6 className="mb-0">Accusations/Convictions</h6>
          <div>
            <IconButton
              variant="falcon-default"
              size="sm"
              icon="filter"
              className="me-2"
            >
              <span className="d-none d-sm-inline-block">Filter</span>
            </IconButton>
            <IconButton
              variant="falcon-default"
              size="sm"
              icon="expand-arrows-alt"
            >
              <span className="d-none d-sm-inline-block">Expand</span>
            </IconButton>
          </div>
        </Card.Header>
        <Card.Body className="p-0">
          <AdvanceTable
            table
            headerClassName="bg-light text-900 fw-medium font-sans-serif white-space-nowrap"
            rowClassName="btn-reveal-trigger align-middle white-space-nowrap"
            tableProps={{
              className: 'fs--1 mb-0 overflow-hidden fw-semi-bold'
            }}
          />
        </Card.Body>
        <FalconCardFooterLink
          title="Show all enrollments"
          size="sm"
          className="disabled"
        />
      </Card>
    </AdvanceTableWrapper>
  );
};

Convictions.propTypes = {
  tableData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      trainer: PropTypes.string.isRequired,
      enrollmentDate: PropTypes.string.isRequired,
      worked: PropTypes.string.isRequired,
      progress: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired
    })
  ).isRequired,
  perPage: PropTypes.number
};

export default Convictions;
