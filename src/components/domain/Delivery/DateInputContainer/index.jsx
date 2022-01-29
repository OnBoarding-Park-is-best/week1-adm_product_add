import React, { Fragment } from 'react';
import { DateInput } from '@components/base';
import styled from 'styled-components';

const DATE_ID = ['orderStart', 'orderEnd', 'express', 'normal'];

const DateInputContainer = ({ date, minTime, onChange, disableDays }) => {
  return (
    <Fragment>
      <Item>
        <SubClass>주문 시간</SubClass>
        <DateInput
          withTime
          name={DATE_ID[0]}
          date={date[DATE_ID[0]]}
          onChange={onChange}
        />
        <span> ~ </span>
        <DateInput
          withTime
          minTime={minTime}
          name={DATE_ID[1]}
          date={date[DATE_ID[1]]}
          onChange={onChange}
        />
      </Item>
      <Item>
        <SubClass>새벽 배송</SubClass>
        <DateInputBox>
          <DateInput
            today
            name={DATE_ID[2]}
            date={date[DATE_ID[2]]}
            onChange={onChange}
            minTime={minTime}
          />
        </DateInputBox>
        <SubClass>일반 배송</SubClass>
        <DateInputBox>
          <DateInput
            today
            name={DATE_ID[3]}
            date={date[DATE_ID[3]]}
            onChange={onChange}
            minTime={minTime}
          />
        </DateInputBox>
      </Item>
    </Fragment>
  );
};

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SubClass = styled.h4`
  margin-right: 10px;
`;

const DateInputBox = styled.div`
  width: 150px;
  margin-right: 15px;
`;

export default DateInputContainer;
