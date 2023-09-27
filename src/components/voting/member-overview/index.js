import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  enrolledCoursesData,
  payments,
  recentActivities
} from 'data/elearning/studentOverview';
import PageHeader from './PageHeader';
import PositiveRatings from './PositiveRatings';
import MemberInfo from './MemberInfo';
import NegativeRatings from './NegativeRatings';
import PoliticalHistory from './PoliticalHistory';
import RatingHistory from './RatingHistory';
import Qualifications from './Qualifications';
import RecentActivities from './RecentActivities';
import Convictions from './Convictions';
import { memberOverview } from 'data/voting/member/memberOverview';
import VotingHistory from './VotingHistory';

const MemberOverview = () => {
  const { info, voting, ratingHistory, convictions, politicalHistory } =
    memberOverview;

  return (
    <>
      <PageHeader info={info} />
      <Row className="g-3 mb-3">
        <Col xxl={6}>
          <Row className="g-3">
            <Col xs={12}>
              <MemberInfo info={info} />
            </Col>
            <Col md={6}>
              <PositiveRatings data={voting.positive} />
            </Col>
            <Col md={6}>
              <NegativeRatings data={voting.negative} />
            </Col>
          </Row>
        </Col>
        <Col xxl={6}>
          <PoliticalHistory history={politicalHistory} />
        </Col>
      </Row>

      {/*<Row className="g-3 mb-3">*/}
      {/*  <Col xxl={3} lg={5}>*/}
      {/*    <Qualifications/>*/}
      {/*  </Col>*/}
      {/*  <Col xxl={6} className="order-xxl-1 order-lg-2 order-1">*/}
      {/*    <VotingHistory tableData={payments}/>*/}
      {/*  </Col>*/}
      {/*  <Col md={6} lg={7} xxl={3} className="order-2 order-lg-1 order-xxl-2">*/}
      {/*    <RecentActivities data={recentActivities}/>*/}
      {/*  </Col>*/}
      {/*</Row>*/}

      <RatingHistory ratingHistory={ratingHistory} />

      <Convictions tableData={convictions} />
    </>
  );
};

export default MemberOverview;
