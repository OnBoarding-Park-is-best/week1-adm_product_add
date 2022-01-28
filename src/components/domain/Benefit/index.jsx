import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ContentContainer } from '@components/base';
import { ContentItem } from '@components/base';
import { Toggle } from '@components/base';

const Benefit = ({ checked, onChange }) => {
  return (
    <ContentContainer title="상품 혜택 허용 설정">
      <ContentItem title="마일리지 적립">
        <StyledToggle>
          <Toggle name="mileage" checked={checked} onChange={onChange} />
        </StyledToggle>
      </ContentItem>
    </ContentContainer>
  );
};

Benefit.propTypes = {
  checked: PropTypes.bool,
  onCHangeChange: PropTypes.func.isRequired,
};

const StyledToggle = styled.div`
  height: 100%;
  display: flex;
  margin-left: 32px;
  align-items: center;
`;

export default Benefit;
