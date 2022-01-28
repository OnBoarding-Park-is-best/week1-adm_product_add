import React, { useState } from 'react';
import ImageUploadContainer from '../ImageUploadContainer';
import ContentContainer from '../../base/ContentContainer';
import ContentItem from '../../base/ContentItem';
import CheckBox from '../../base/CheckBox';
import styled from 'styled-components';
import { FILTER_LIST, COLORS, BORDER_STYLE } from '@utils/constants';
import useToggle from '@hooks/useToggle';

const ProductBaseInfo = () => {
  const [categoryChk, setCategoryChk] = useState([]);

  const checkedHandler = (e) => {
    console.log('e.target.checked', e.target.checked);
    console.log('e.target.name', e.target.name);
  };

  return (
    <div>
      <ContentContainer title={'상품 기본 정보'}>
        <ContentItem title={'카테고리'} required>
          <CategoryWrap>
            <div>
              {FILTER_LIST.map((list) => {
                return <CheckBox onChange={checkedHandler} name={list.title} />;
              })}
            </div>
            <aside>aa</aside>
          </CategoryWrap>
        </ContentItem>
      </ContentContainer>
      <ImageUploadContainer multiple />
    </div>
  );
};

const CategoryWrap = styled.article`
  display: flex;
  align-items: flex-start;
  padding: 1rem;

  & > div {
    flex: 1;
    padding: 1rem;
    border: ${BORDER_STYLE};
  }

  & > aside {
    flex: 1;

    padding: 1rem;
    border: ${BORDER_STYLE};
  }
`;

export default ProductBaseInfo;
