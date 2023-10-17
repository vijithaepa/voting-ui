import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import { getColor, rgbaColor } from 'helpers/utils';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';

import {
  GridComponent,
  TooltipComponent,
  TitleComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import BasicECharts from 'components/common/BasicEChart';
import SoftBadge from 'components/common/SoftBadge';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer
]);

const getOptions = data => ({
  tooltip: {
    trigger: 'axis',
    formatter: '<strong>{b0}</strong> : {c0}'
  },
  xAxis: {
    data: [
      'Day 1',
      'Day 2',
      'Day 3',
      'Day 4',
      'Day 5',
      'Day 6',
      'Day 7',
      'Day 8'
    ]
  },
  series: [
    {
      type: 'line',
      data,
      smooth: true,
      lineStyle: {
        width: 2
      },

      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: rgbaColor(getColor('primary'), 0.25)
            },
            {
              offset: 1,
              color: rgbaColor(getColor('primary'), 0)
            }
          ]
        }
      }
    }
  ],
  grid: {
    bottom: '2%',
    top: '2%',
    right: '0px',
    left: '10px'
  }
});

const NegativeRatings = ({ data }) => {
  const { votes, rate, total, diff } = data;
  return (
    <Card className="font-sans-serif">
      <Card.Header className="pb-0">
        <h6 className="mb-0">Negative Ratings</h6>
      </Card.Header>

      <Card.Body
        as={Flex}
        alignItems="end"
        justifyContent="between"
        className="pt-0"
      >
        <div>
          <h5 className="text-700 lh-1 mb-1">
            {rate} / {total} voters
          </h5>
          <SoftBadge
            bg={diff > 0 ? 'danger' : 'success'}
            pill
            className="fs--2"
          >
            <FontAwesomeIcon
              icon={diff > 0 ? 'caret-up' : 'caret-down'}
              className="me-1"
            />
            {Math.abs(diff)}% last month
          </SoftBadge>
        </div>
        <div className="ps-0">
          <BasicECharts
            echarts={echarts}
            options={getOptions(votes)}
            style={{ width: '7.5rem', height: 60 }}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

NegativeRatings.propTypes = {
  data: {
    votes: PropTypes.array.isRequired,
    total: PropTypes.number,
    rate: PropTypes.number,
    diff: PropTypes.number
  }
};

export default NegativeRatings;
