import { useState } from 'react';
import { v4 } from 'uuid';
import { ContentContainer, Button } from '@components/base';
import InformationContentContainer from './InformationContentContainer';
import styled from 'styled-components';
import { COLORS } from '@utils/constants';

const ProductInformationNotice = () => {
  const [contentList, setContentList] = useState([
    {
      id: v4(),
      contentIndex: 1,
    },
  ]);

  const handleAddContentList = () =>
    setContentList((contentList) => [
      ...contentList,
      {
        id: v4(),
        contentIndex: !contentList.length
          ? 1
          : contentList[contentList.length - 1].contentIndex + 1,
      },
    ]);

  const handleDlelteContentList = (id) =>
    setContentList(contentList.filter((item) => item.id !== id));

  const handleInformationContentList = (list) =>
    list.map(({ id, contentIndex }, index) => (
      <InnerItemContainer key={index}>
        <InformationContentContainer infoIndex={contentIndex} id={id} />
        <Button
          deleteGrey
          onClick={() => handleDlelteContentList(id)}
          style={{ position: 'absolute', right: 48, top: 24 }}
        >
          삭제
        </Button>
      </InnerItemContainer>
    ));

  return (
    <ContentContainer title="상품 정보 고시">
      <InnerContentContainer>
        {handleInformationContentList(contentList)}
        <Button
          plusIcon
          width="100%"
          onClick={() => handleAddContentList()}
          style={{ backgroundColor: 'inherit' }}
        >
          정보고시 추가
        </Button>
      </InnerContentContainer>
    </ContentContainer>
  );
};

const InnerContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: ${COLORS.grey_60};
  gap: 32px;
`;

const InnerItemContainer = styled.div`
  position: relative;
`;

export default ProductInformationNotice;
