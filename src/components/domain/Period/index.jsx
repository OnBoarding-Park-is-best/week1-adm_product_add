import { PERIOD_NAME } from '@utils/constants';
import { ContentContainer, ContentItem } from '@components/base';
import { DateInput } from '@components/base';
import RadioList from './RadioList/index';
import styled from 'styled-components';
import { useState } from 'react';

const Period = () => {
  // 라디오용
  const [exposureSelect, setExposureSelect] = useState({
    list: PERIOD_NAME,
    selected: PERIOD_NAME[0],
  });

  const [saleSelect, setSaleSelect] = useState({
    list: PERIOD_NAME,
    selected: PERIOD_NAME[0],
  });

  const handleExposureChange = (e) => {
    setExposureSelect({
      ...exposureSelect,
      selected: e.target.value,
    });
  };

  const handleSaleChange = (e) => {
    setSaleSelect({
      ...saleSelect,
      selected: e.target.value,
    });
  };

  // 날짜용
  const [exposureStartDate, setExposureStartDate] = useState(null);
  const [exposureEndDate, setExposureEndDate] = useState(null);
  const [saleStartDate, setSaleStartDate] = useState(null);
  const [saleEndDate, setSaleEndDate] = useState(null);

  const handleExposureStartDateChange = (newDate) => {
    setExposureStartDate(newDate);
  };
  const handleExposureEndDateChange = (newDate) => {
    setExposureEndDate(newDate);
  };

  const handleSaleStartDateChange = (newDate) => {
    setSaleStartDate(newDate);
  };
  const handleSaleEndDateChange = (newDate) => {
    setSaleEndDate(newDate);
  };

  return (
    <ContentContainer title="노출 및 판매 기간 설정">
      <ContentItem title="상품 노출 기한">
        <StyledRadio>
          <RadioList select={exposureSelect} onChange={handleExposureChange} />
          <DateContainer>
            <DateInput
              today
              withTime
              date={exposureStartDate}
              onChange={handleExposureStartDateChange}
            />
            <span> ~ </span>
            <DateInput
              today
              withTime
              date={exposureEndDate}
              onChange={handleExposureEndDateChange}
            />
          </DateContainer>
        </StyledRadio>
      </ContentItem>
      <ContentItem title="상품 판매 기한">
        <StyledRadio>
          <RadioList select={saleSelect} onChange={handleSaleChange} />
          <DateContainer>
            <DateInput
              today
              withTime
              date={saleStartDate}
              onChange={handleSaleStartDateChange}
            />
            <span> ~ </span>
            <DateInput
              today
              withTime
              date={saleEndDate}
              onChange={handleSaleEndDateChange}
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
