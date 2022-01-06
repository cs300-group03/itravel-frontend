import {Row, Col, Button, Tooltip} from 'antd';
import Icon from '@ant-design/icons';
import React from 'react';
import {
  toolbar,
  toolbarDate,
  appTitle,
  alignRight,
  spacify,
  weekButtons,
} from '../styles';
import moment from 'moment';
import { ArrowLeft, ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';

function WeekToolbar (props) {
  const formattedDate = moment (props.startDate).format ('MMM YYYY');
  return (
    <Row type="flex" gutter={4} style={toolbar}>
      <Col span={6} offset={3} style={appTitle}>
        <Icon type="calendar" style={spacify} />Schedule calendar
      </Col>
      <Col span={4} offset={4} style={alignRight}>
        <Tooltip placement="topLeft" title={moment ().format ('dddd, MMM D')}>
          <Button onClick={props.goToToday}>Today</Button>
        </Tooltip>
      </Col>

      <Col span={4} style={weekButtons}>
        <Row type="flex">
        <Button onClick={props.goToPreviousWeek} style={spacify}><ChevronLeftOutlined/></Button> 
        <Button onClick={props.goToNextWeek}><ChevronRightOutlined/></Button>
        </Row>
      </Col>

      <Col span={3} style={toolbarDate}>
        {formattedDate}
      </Col>

    </Row>
  );
}

export default WeekToolbar;
