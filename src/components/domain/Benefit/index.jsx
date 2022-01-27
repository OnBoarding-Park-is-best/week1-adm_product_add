import { ContentContainer } from '@components/base';
import { ContentItem } from '@components/base';
import { Toggle } from '@components/base';
import { BORDER_STYLE } from '@utils/constants';
import styled from 'styled-components';

const Others = () => {
  return (
    <Wrap>
      <ContentContainer title="상품 혜택 허용 설정" />
      <ContentItem title="마일리지 적립">
        <StyledToggle>
          <Toggle on />
        </StyledToggle>
      </ContentItem>
    </Wrap>
  )
}

const Wrap = styled.div`
  border: ${BORDER_STYLE}
`

const StyledToggle = styled.div`
  height: 100%;
  display: flex;
  margin-left: 32px;
  align-items: center;
`

export default Others;
