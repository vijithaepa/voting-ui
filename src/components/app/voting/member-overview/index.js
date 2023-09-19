import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  assignmentScores,
  courseStatusData,
  payments,
  spendingsData,
  timeOnSiteData,
  recentActivities,
  enrolledCoursesData
} from 'data/elearning/studentOverview';
import PageHeader from './PageHeader';
import PositiveRatings from './PositiveRatings';
import MemberInfo from './MemberInfo';
import NegativeRatings from './NegativeRatings';
import PoliticalHistory from './PoliticalHistory';
import RatingHistory from './RatingHistory';
import Qualifications from './Qualifications';
import VotingHistory from './VotingHistory';
import CourseStatus from './CourseStatus';
import BillingAddress from './BillingAddress';
import RecentActivities from './RecentActivities';
import Convictions from './Convictions';

const MemberOverview = () => {
  return (
    <>
      <PageHeader />
      <Row className="g-3 mb-3">
        <Col xxl={6}>
          <Row className="g-3">
            <Col xs={12}>
              <MemberInfo />
            </Col>
            <Col md={6}>
              <PositiveRatings data={spendingsData} />
            </Col>
            <Col md={6}>
              <NegativeRatings data={timeOnSiteData} />
            </Col>
          </Row>
        </Col>
        <Col xxl={6}>
          <PoliticalHistory scoresData={assignmentScores} />
        </Col>
      </Row>

      <Row className="g-3 mb-3">
        <Col xxl={3} lg={5}>
          <Qualifications />
        </Col>
        <Col xxl={6} className="order-xxl-1 order-lg-2 order-1">
          <VotingHistory tableData={payments} />
        </Col>
        <Col md={6} lg={7} xxl={3} className="order-2 order-lg-1 order-xxl-2">
          <RecentActivities data={recentActivities} />
        </Col>
      </Row>

      <RatingHistory />

      <Convictions tableData={enrolledCoursesData} />
    </>
  );
};

export default MemberOverview;
