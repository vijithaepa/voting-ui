import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import AdvanceTableFooter from 'components/common/advance-table/AdvanceTableFooter';
import IconButton from 'components/common/IconButton';

const columns = [
  {
    accessor: 'qualification',
    Header: 'Qualification'
  },
  {
    accessor: 'institute',
    Header: 'Institution',
    headerProps: {
      className: 'fw-medium'
    },
    cellProps: {
      className: 'pe-6 py-3'
    }
  },
  {
    accessor: 'date',
    Header: 'Start Date',
    headerProps: {
      className: 'text-end fw-medium'
    },
    cellProps: {
      className: 'text-end py-3'
    }
  },
  {
    accessor: 'status',
    Header: 'Status',
    headerProps: {
      className: 'text-end fw-medium'
    },
    cellProps: {
      className: 'text-end py-3 font-sans-serif fw-medium'
    },
    Cell: rowData => (
      <span className={`text-${rowData.row.original.color}`}>
        {rowData.row.original.status}
      </span>
    )
  }
];

const EducationHistory = ({ tableData, perPage = 5 }) => {
  console.log('Education history ', tableData);
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
          <h5 className="mb-0 text-nowrap py-2 py-xl-0">Education History</h5>
          <div>
            <IconButton
              variant="falcon-default"
              size="sm"
              icon="filter"
              iconClassName="me-sm-1"
              className="me-2"
            >
              <span className="d-none d-sm-inline-block">Filter</span>
            </IconButton>
            <IconButton
              variant="falcon-default"
              size="sm"
              icon="external-link-alt"
              iconClassName="me-sm-1"
            >
              <span className="d-none d-sm-inline-block">Export</span>
            </IconButton>
          </div>
        </Card.Header>
        <Card.Body className="p-0">
          <AdvanceTable
            table
            headerClassName="bg-light text-900 fw-medium font-sans-serif"
            rowClassName="align-middle white-space-nowrap"
            tableProps={{
              className: 'fs--1 mb-0 overflow-hidden fw-semi-bold'
            }}
          />
        </Card.Body>
        <Card.Footer className="bg-light d-flex align-items-center justify-content-end py-2">
          <AdvanceTableFooter
            rowCount={tableData.length}
            table
            rowInfo
            perPage={perPage}
            viewAllBtn
          />
        </Card.Footer>
      </Card>
    </AdvanceTableWrapper>
  );
};

EducationHistory.propTypes = {
  tableData: PropTypes.arrayOf(
    PropTypes.shape({
      qualification: PropTypes.string.isRequired,
      institute: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    })
  ).isRequired,
  perPage: PropTypes.number
};

export default EducationHistory;
