import { useState } from 'react';
import { DATE_NAME, PERIOD_NAME } from '@utils/constants';
import { ContentContainer, ContentItem } from '@components/base';
import { DateInput } from '@components/base';
import RadioList from './RadioList/index';
import styled from 'styled-components';

const Period = () => {
  const [exposureBtn, setExposureBtn] = useState({
    list: PERIOD_NAME,
    selected: PERIOD_NAME[0],
  });

  const handleExposureChange = (e) => {
    setExposureBtn({
      ...exposureBtn,
      selected: e.target.value,
    });
  };
  const [salesBtn, setSalesBtn] = useState({
    list: PERIOD_NAME,
    selected: PERIOD_NAME[0],
  });

  const handleSalesChange = (e) => {
    setSalesBtn({
      ...salesBtn,
      selected: e.target.value,
    });
  };

  const DATE_ID = ['orderStart', 'orderEnd', 'express', 'normal'];
  const [date, setDate] = useState(DATE_NAME);
  const [minTime, setMinTime] = useState(null);

  const handleDateChange = (name, date) => {
    setDate((prev) => ({
      ...prev,
      [name]: date,
    }));
    if (name === DATE_ID[0] || name === DATE_ID[2]) {
      setMinTime(date);
      return;
    }
    if (name === DATE_ID[1] && date < new Date()) {
      setMinTime(name);
      return;
    }
    if (name === DATE_ID[3] && date < new Date()) {
      setMinTime(name);
      return;
    }
  };

  return (
    <ContentContainer title="노출 및 판매 기간 설정">
      <ContentItem title="상품 노출 기한">
        <StyledRadio>
          <RadioList
            name="exposure"
            select={exposureBtn}
            onChange={handleExposureChange}
          />
          <DateContainer>
            <DateInput
              withTime
              date={date[DATE_ID[0]]}
              name={DATE_ID[0]}
              onChange={handleDateChange}
            />
            <span> ~ </span>
            <DateInput
              name={DATE_ID[1]}
              minTime={minTime}
              date={date[DATE_ID[1]]}
              withTime
              onChange={handleDateChange}
            />
          </DateContainer>
        </StyledRadio>
      </ContentItem>
      <ContentItem title="상품 판매 기한">
        <StyledRadio>
          <RadioList
            name="sales"
            select={salesBtn}
            onChange={handleSalesChange}
          />
          <DateContainer>
            <DateInput
              withTime
              date={date[DATE_ID[2]]}
              name={DATE_ID[2]}
              onChange={handleDateChange}
            />
            <span> ~ </span>
            <DateInput
              withTime
              date={date[DATE_ID[3]]}
              name={DATE_ID[3]}
              minTime={minTime}
              onChange={handleDateChange}
            />
          </DateContainer>
        </StyledRadio>
      </ContentItem>
    </ContentContainer>
  );
};

const StyledRadio = styled.div`
  padding: 16px 20px;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
`;

export default Period;
