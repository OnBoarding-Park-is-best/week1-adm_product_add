import { COLORS } from '@utils/constants';
import { Button } from '@components/base';
import styled from 'styled-components';

export const DeliveryAlert = ({ onClick }) => {
  return (
    <DeliveryAlertContainer>
      <DeliveryText>주문 시간 이후로 출고일을 지정해 주세요.</DeliveryText>
      <DeliveryBottom>
        <Button deleteGrey onClick={onClick}>
          취소
        </Button>
        <Button confirm onClick={onClick}>
          확인
        </Button>
      </DeliveryBottom>
    </DeliveryAlertContainer>
  );
};

const DeliveryAlertContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 160px;
  border: 2px solid ${COLORS.border};
  border-radius: 10px;
  background-color: #fff;
  transform: translate(-50%, -50%);
  z-index: 999;
`;
const DeliveryText = styled.p`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
`;
const DeliveryBottom = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 50%;
  padding-right: 24px;
`;
