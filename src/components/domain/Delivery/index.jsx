import React from 'react';
import {
  DELIVERY_DATA,
  DATE_NAME,
  DATE_ID,
  TOGGLE_NAME,
} from '@utils/constants';
import { ContentContainer, ContentItem, Toggle } from '@components/base';
import DateInputContainer from './DateInputContainer';
import { DeliveryAlert } from './DeliveryAlert';
import styled from 'styled-components';
import { useState } from 'react';

const Delivery = () => {
  const [date, setDate] = useState(DATE_NAME);
  const [minTime, setMinTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState({});
  const [checkedToggles, setCheckedToggles] = useState([]);
  const [isWarning, setWarning] = useState(false);

  const handleDateChange = (name, date) => {
    setDate((prev) => ({
      ...prev,
      [name]: date,
    }));
    setSelectedDate((prev) => ({
      ...prev,
      [name]: date,
    }));

    if (name === DATE_ID[0]) {
      setMinTime(date);
      return;
    }
    if (name === DATE_ID[1] && date < new Date()) {
      setCheckedToggles((prev) => ({
        ...prev,
        [DELIVERY_DATA[2].id]: false,
      }));
      setMinTime(name);
      return;
    }
    if (name === DATE_ID[2] || name === DATE_ID[3]) {
      if (date < new Date() || date < selectedDate[DATE_ID]) {
        setWarning((prev) => !prev);
      }
    }
  };

  const checkHandler = (e) => {
    const isChecked = e.target.checked;
    const name = e.target.name;

    if (name === DELIVERY_DATA[2].id && isChecked) {
      setCheckedToggles({ ...TOGGLE_NAME, [name]: true });
      return;
    }
    if (isChecked) {
      setCheckedToggles((prev) => ({
        ...prev,
        [DELIVERY_DATA[2].id]: false,
        [name]: true,
      }));
      return;
    }
    setCheckedToggles((prev) => ({ ...prev, [name]: false }));
  };

  const [visible, setVisible] = useState(true);
  const closeAlert = () => {
    setVisible(false);
  };

  return (
    <ContentContainer title="상품 배송 설정">
      {DELIVERY_DATA.map((item) => {
        return (
          <ContentItem key={item.id} title={item.title}>
            <ToggleBox>
              <Toggle
                name={item.id}
                checked={checkedToggles[item.id]}
                onChange={checkHandler}
                props={checkedToggles}
              />
              {item.dateRequire && (
                <DateInputContainer
                  date={date}
                  minTime={minTime}
                  onChange={handleDateChange}
                />
              )}
            </ToggleBox>
            {isWarning && visible && <DeliveryAlert onClick={closeAlert} />}
          </ContentItem>
        );
      })}
    </ContentContainer>
  );
};

const ToggleBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  gap: 30px;
`;

export default Delivery;
