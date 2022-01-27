import { ContentContainer } from '@components/base';
import { ContentItem } from '@components/base';
import { Toggle } from '@components/base';
import { BORDER_STYLE } from '@utils/constants';
import styled from 'styled-components';

const Others = () => {
  return (
    <Wrap>
      <ContentContainer title="기타 설정" />
      <ContentItem title="감사카드 제공">
        <StyledToggle>
          <Toggle/>
        </StyledToggle>
      </ContentItem>
    </Wrap>
  )
}

const Wrap = styled.div`
  // width: 750px;
  border: ${BORDER_STYLE}
`

const StyledToggle = styled.div`
  height: 100%;
  display: flex;
  margin-left: 32px;
  align-items: center;
`

export default Others;
