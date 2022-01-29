import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Input } from '@components/base';
import { COLORS, INFORMATION_NOTICE_CONTENT_LIST } from '@utils/constants';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

const InformationContentContainer = ({ infoIndex, ...props }) => {
  const [additionalContent, setAdditionalContent] = useState([]);

  const handleAddItem = () => {
    setAdditionalContent((content) => [
      ...content,
      {
        id: v4(),
        title: '',
        content: '',
      },
    ]);
  };

  const handleUpdateItem = (id, status, e) =>
    status === 'title'
      ? setAdditionalContent(
          additionalContent.map((item) =>
            item.id === id ? { ...item, title: e.target.value } : item,
          ),
        )
      : setAdditionalContent(
          additionalContent.map((item) =>
            item.id === id ? { ...item, content: e.target.value } : item,
          ),
        );

  const handleDeleteItem = (id) => {
    setAdditionalContent(additionalContent.filter((item) => id !== item.id));
  };

  const handleInformationContent = (list) =>
    list.map(({ title, placeholder }, infoIndex) => (
      <ItemContainer key={infoIndex}>
        <Text>{title}</Text>
        <Input name={title} placeholder={placeholder} padding="13px 8px" />
      </ItemContainer>
    ));

  const handleAdditionalInformationContent = (list) =>
    list.map(({ id, title, content }, index) => (
      <ItemContainer key={index} id={id}>
        <Input
          name={title}
          placeholder="항목 제목 자유 입력"
          padding="13px 8px"
          value={title}
          onChange={(e) => handleUpdateItem(id, 'title', e)}
          style={{ width: 200, minWidth: 200 }}
        />
        <Input
          name={content}
          placeholder="내용을 입력해주세요."
          padding="13px 8px"
          value={content}
          onChange={(e) => handleUpdateItem(id, 'content', e)}
        />
        <Button
          deleteRed
          width="120px"
          style={{ height: 42 }}
          onClick={() => handleDeleteItem(id)}
        >
          삭제
        </Button>
      </ItemContainer>
    ));

  return (
    <ProductInformationNoticeContainer {...props}>
      <TitleContainer>
        <Text componentTitle>정보고시 {infoIndex}</Text>
        {/* <Button deleteGrey onClick={() => onDelete()}>
          삭제
        </Button> */}
      </TitleContainer>
      <ContentContainer>
        {handleInformationContent(INFORMATION_NOTICE_CONTENT_LIST)}
        {handleAdditionalInformationContent(additionalContent)}
      </ContentContainer>
      <Button plusIcon onClick={() => handleAddItem()}>
        항목 추가
      </Button>
    </ProductInformationNoticeContainer>
  );
};

InformationContentContainer.propTypes = {
  infoIndex: PropTypes.number,
};

InformationContentContainer.defaultProps = {
  infoIndex: 1,
};

const ProductInformationNoticeContainer = styled.div`
  padding: 32px;
  border: 1px solid ${COLORS.border};
  background-color: #fff;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 42px;
  > Button {
    position: absolute;
    right: 0;
  }
`;

const Text = styled.div`
  font-size: ${({ componentTitle }) => (componentTitle ? '18px' : '16px')};
  min-width: 200px;
  font-weight: ${({ componentTitle }) => (componentTitle ? 600 : 400)};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  gap: 18px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 18px;
  height: 62px;
`;

export default InformationContentContainer;
