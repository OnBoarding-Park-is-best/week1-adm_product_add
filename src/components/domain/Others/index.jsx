import { ContentContainer } from '@components/base';
import { ContentItem } from '@components/base';
import { Toggle } from '@components/base';
import styled from 'styled-components';

const Others = () => {
  return (
    <ContentContainer title="기타 설정">
      <ContentItem title="감사카드 제공">
        <StyledToggle>
          <Toggle />
        </StyledToggle>
      </ContentItem>
    </ContentContainer>
  );
};

const StyledToggle = styled.div`
  height: 100%;
  display: flex;
  margin-left: 32px;
  align-items: center;
`;

export default Others;
