import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dayjs from 'dayjs';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { BarChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { getColor, rgbaColor } from 'helpers/utils';
import FalconLink from 'components/common/FalconLink';
import Flex from 'components/common/Flex';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  LegendComponent
]);

const tooltipFormatter = params => `
    <div>
      <p class='mb-2 text-600'>
      ${
        dayjs(params[0].axisValue).isValid()
          ? dayjs(params[0].axisValue).format('MMMM YYYY')
          : params[0].axisValue
      }
      </p>
      ${params
        .map(
          ({ seriesName, value, borderColor }) =>
            `<div class="dot d-inline-block" style="background-color: ${borderColor}"></div>
            <span class='text-600'>
              ${seriesName} : <strong>${value}</strong>
            </span>`
        )
        .join('<br />')}
    </div>`;

const getOptions = ratingHistory => ({
  color: getColor('gray-100'),
  legend: {
    show: false
  },
  xAxis: {
    type: 'category',
    data: ratingHistory.dates,
    axisLine: {
      show: false
    },
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: getColor('gray-600'),
      formatter: value => {
        const date = new Date(value);
        return `${dayjs(date).format('MMM')}`;
      },
      interval: 2
    }
  },
  yAxis: {
    type: 'value',
    show: true,
    axisLabel: {
      formatter: value => value,
      color: getColor('gray-600')
    },
    axisLine: {
      show: false
    }
  },
  tooltip: {
    trigger: 'axis',
    padding: [7, 10],
    axisPointer: {
      type: 'none'
    },
    backgroundColor: getColor('gray-100'),
    borderColor: getColor('gray-300'),
    textStyle: { color: getColor('dark') },
    borderWidth: 1,
    transitionDuration: 0,
    formatter(params) {
      return tooltipFormatter(params);
    }
  },
  series: [
    {
      name: 'Positive',
      type: 'bar',
      barWidth: '50%',
      // z: -1,
      data: ratingHistory.positive,
      itemStyle: {
        color: rgbaColor(getColor('info'), 0.99),
        borderRadius: [5, 5, 0, 0],
        borderWidth: 1,
        borderColor: getColor('gray-300')
      },
      emphasis: {
        itemStyle: {
          color: rgbaColor(getColor('info'), 0.75),
          borderRadius: [5, 5, 0, 0],
          borderWidth: 1,
          borderColor: getColor('gray-300')
        }
      }
    },
    {
      name: 'Negative',
      type: 'bar',
      barWidth: '50%',
      barGap: '-30%',
      data: ratingHistory.negative,
      itemStyle: {
        borderRadius: [5, 5, 0, 0],
        color: rgbaColor(getColor('warning'), 0.75),
        borderWidth: 1,
        borderColor: rgbaColor(getColor('danger'), 0.15)
      }
    }
  ],
  grid: {
    right: '0px',
    left: '3%',
    bottom: '10%',
    top: '15%'
  }
});

const RatingHistory = ({ ratingHistory }) => {
  const chartRef = useRef(null);

  const handleLegendToggle = (event, name) => {
    chartRef.current.getEchartsInstance().dispatchAction({
      type: 'legendToggleSelect',
      name
    });
    event.target.closest('button').classList.toggle('opacity-50');
  };

  return (
    <Card className="mb-3">
      <Card.Header className="bg-light">
        <h6 className="mb-0">Rating History</h6>
      </Card.Header>
      <Card.Body>
        <ReactEChartsCore
          ref={chartRef}
          echarts={echarts}
          option={getOptions({ ratingHistory })}
          style={{ minHeight: '21.875rem', width: '100%' }}
        />
      </Card.Body>
      <Card.Footer className="bg-light py-2">
        <Row className="g-0 flex-between-center">
          <Col xs="auto">
            <Flex className="flex-wrap gap-md-2">
              <Button
                variant="text"
                size="sm"
                className="d-flex align-items-center p-0 shadow-none"
                onClick={event => handleLegendToggle(event, 'Positive')}
              >
                <FontAwesomeIcon
                  icon="circle"
                  className="text-info fs--2 me-1"
                  transform="shrink-3"
                />
                <small className="text-600">Positive</small>
              </Button>
              <Button
                variant="text"
                size="sm"
                className="d-flex align-items-center p-0 shadow-none ms-2"
                onClick={event => handleLegendToggle(event, 'Negative')}
              >
                <FontAwesomeIcon
                  icon="circle"
                  className="text-primary fs--2 me-1"
                  transform="shrink-3"
                />
                <small className="text-600">Negative</small>
              </Button>
            </Flex>
          </Col>
          <Col xs="auto">
            <FalconLink
              to="/e-learning/course/course-grid"
              title="All Rating"
              className="px-0 fw-medium disabled"
            />
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

// RatingHistory.propTypes = {
//   dates: PropTypes.array,
//   positive: PropTypes.array,
//   negative: PropTypes.array
// };

RatingHistory.propTypes = {
  ratingHistory: PropTypes.shape({
    dates: PropTypes.array,
    positive: PropTypes.array,
    negative: PropTypes.array
  })
};

export default RatingHistory;
