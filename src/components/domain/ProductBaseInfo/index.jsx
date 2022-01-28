import React, { useState } from 'react';
import ImageUploadContainer from '@components/domain/ImageUploadContainer';
import ContentContainer from '@components/base/ContentContainer';
import ContentItem from '@components/base/ContentItem';
import CheckBox from '@components/base/CheckBox';
import styled from 'styled-components';
import Button from '@components/base/Button';
import Input from '@components/base/Input';
import { FILTER_LIST, BORDER_STYLE } from '@utils/constants';
import { v4 } from 'uuid';

const ProductBaseInfo = () => {
  const [categoryChecked, setCategoryChecked] = useState([]);

  const checkedHandler = (e) => {
    if (e.target.checked === true) {
      setCategoryChecked([...categoryChecked, e.target.name]);
    } else if (e.target.checked === false) {
      setCategoryChecked(
        categoryChecked.filter((categoryChk) => categoryChk !== e.target.name),
      );
    }
  };

  const removeFilter = (e) => {
    setCategoryChecked(
      categoryChecked.filter(
        (categoryChk) => categoryChk !== e.target.innerText,
      ),
    );
    FILTER_LIST.filter((list) => {
      if (list.title === e.target.innerText) {
      }
    });
  };

  console.log('categoryChecked', categoryChecked);

  return (
    <>
      <ContentContainer title={'상품 기본 정보'}>
        <ContentItem title={'카테고리'} required>
          <Wrap>
            <CategorySelect>
              {FILTER_LIST.map((list) => {
                return <CheckBox onChange={checkedHandler} name={list.title} />;
              })}
            </CategorySelect>
            <CategoryBtn>
              {categoryChecked &&
                categoryChecked.map((chk) => {
                  return (
                    <Button
                      onClick={removeFilter}
                      selectCategory
                      deleteIcon
                      width="100%"
                    >
                      {chk}
                    </Button>
                  );
                })}
            </CategoryBtn>
          </Wrap>
        </ContentItem>
        <ContentItem title={'필터 태그'}>
          <Wrap>
            <Input height="3rem" padding="5rem" />
            <BtnWrap>
              <Button position="absolute">검색</Button>
            </BtnWrap>
          </Wrap>
        </ContentItem>
        <ProductWrap>
          <ContentItem title={'상품명'} borderNone required>
            <Wrap>
              <Input />
            </Wrap>
          </ContentItem>
          <ContentItem title={'상품 코드'}>
            <Wrap>{v4}1234</Wrap>
          </ContentItem>
        </ProductWrap>
        <ContentItem title={'상품 구성 소개 정보'} required>
          <Wrap>
            <Input />
          </Wrap>
        </ContentItem>
        <ContentItem title={'상품 썸네일'}>
          <ImageUploadContainer />
        </ContentItem>
        <ContentItem title={'상품 대표 이미지'}>
          <ImageUploadContainer multiple />
        </ContentItem>
        <ContentItem title={'상품 총 재고'} required>
          <Wrap>1023개</Wrap>
        </ContentItem>
      </ContentContainer>
    </>
  );
};

const Wrap = styled.article`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  gap: 1rem;
`;

const CategorySelect = styled.div`
  flex: 2;
  padding: 1rem;
  border: ${BORDER_STYLE};
  overflow-y: scroll;
  height: 15rem;
`;

const CategoryBtn = styled.aside`
  flex: 1;
  overflow-y: scroll;
  height: 15rem;
  padding: 1rem;
  border: ${BORDER_STYLE};
`;

const ProductWrap = styled.div`
  display: flex;
  border-bottom: ${BORDER_STYLE};
`;

const BtnWrap = styled.div`
  position: absolute;
  margin-top: 5px;
  right: 1.5rem;
`;

export default ProductBaseInfo;
