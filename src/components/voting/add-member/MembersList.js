import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import AdvanceTableSearchBox from '../../common/advance-table/AdvanceTableSearchBox';
import AdvanceTable from '../../common/advance-table/AdvanceTable';
import AdvanceTableFooter from '../../common/advance-table/AdvanceTableFooter';
import AdvanceTableWrapper from '../../common/advance-table/AdvanceTableWrapper';
import ActionButton from '../../common/ActionButton';
import PropTypes from 'prop-types';

const MembersList = ({ members }) => {
  console.log('members ', members);
  // const data = []

  const data = members
    ? members.map(m => ({
        title: m.title,
        fullName: m.fullName,
        age: m.dateOfBirth
      }))
    : [];

  // Eg: EnrolledCourses
  const columns = [
    {
      accessor: 'title',
      Header: 'Title'
    },
    {
      accessor: 'fullName',
      Header: 'Name'
    },
    {
      accessor: 'age',
      // Cell: ({value}) => {
      //   console.log('Cell', new Date(value), (Date.now()-value)/1000/60/60/24/365.25);
      //   return Math.abs(Math.round((Date.now()-value)/1000/60/60/24/365.25));
      //   // return 48;
      // },
      Header: 'Age'
    },
    {
      accessor: 'none',
      Header: '',
      disableSortBy: true,
      cellProps: {
        className: 'text-end'
      },
      Cell: () => {
        return (
          <>
            <ActionButton
              icon="edit"
              title="Edit"
              variant="action"
              className="p-0 me-2"
            />
            <ActionButton
              icon="trash-alt"
              title="Delete"
              variant="action"
              className="p-0"
            />
          </>
        );
      }
    }
  ];

  // members.map(m => console.log('Member each', m));

  return (
    <Card className="mb-lg-0 mt-3">
      <Card.Header as="h6" className="bg-light">
        Members List
      </Card.Header>
      <Card.Body>
        <AdvanceTableWrapper
          columns={columns}
          data={data}
          sortable
          pagination
          perPage={5}
        >
          <Row className="flex-end-center mb-3">
            <Col xs="auto" sm={6} lg={4}>
              <AdvanceTableSearchBox table />
            </Col>
          </Row>
          <AdvanceTable
            table
            headerClassName="bg-200 text-900 text-nowrap align-middle"
            rowClassName="align-middle white-space-nowrap"
            tableProps={{
              bordered: true,
              striped: true,
              className: 'fs--1 mb-0 overflow-hidden'
            }}
          />
          <div className="mt-3">
            <AdvanceTableFooter
              rowCount={data.length}
              table
              rowInfo
              navButtons
              rowsPerPageSelection
            />
          </div>
        </AdvanceTableWrapper>
      </Card.Body>
    </Card>
  );
};

MembersList.propTypes = {
  members: PropTypes.array
};
export default MembersList;
