import React, { useState, useCallback } from 'react';
import ImageUploadContainer from '@components/domain/ImageUploadContainer';
import ContentContainer from '@components/base/ContentContainer';
import ContentItem from '@components/base/ContentItem';
import CheckBox from '@components/base/CheckBox';
import styled from 'styled-components';
import Button from '@components/base/Button';
import Input from '@components/base/Input';
import FilterTags from '@components/domain/ProductBaseInfo/FIlterTag';
import SelectedTags from '@components/domain/ProductBaseInfo/SelectedTags';
import { FILTER_LIST, BORDER_STYLE, FILTER_TAGS } from '@utils/constants';
import { v4 } from 'uuid';

const ProductBaseInfo = () => {
  const [categoryChecked, setCategoryChecked] = useState([]);
  const [showFilterTagSearch, setShowFilterTagSearch] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchTag, setSearchTag] = useState('');

  const filteredTags = FILTER_TAGS.filter((tag) => {
    if (searchTag === '') {
      return tag;
    } else if (tag.title.toLowerCase().includes(searchTag.toLowerCase())) {
      return tag;
    }
    return '';
  });

  const checkedHandler = useCallback(
    (e) => {
      if (e.target.checked === true) {
        setCategoryChecked([...categoryChecked, e.target.name]);
      } else if (e.target.checked === false) {
        setCategoryChecked(
          categoryChecked.filter(
            (categoryChk) => categoryChk !== e.target.name,
          ),
        );
      }
    },
    [categoryChecked],
  );

  const removeFilter = useCallback(
    (e) => {
      setCategoryChecked(
        categoryChecked.filter(
          (categoryChk) => categoryChk !== e.target.innerText,
        ),
      );
    },
    [categoryChecked],
  );

  const showFilterTag = () => {
    setShowFilterTagSearch(true);
  };

  const hideFilterTag = () => {
    setShowFilterTagSearch(false);
  };

  const handleSelectedTags = useCallback(
    (e) => {
      if (!selectedTags.includes(e.target.innerText))
        setSelectedTags([...selectedTags, e.target.innerText]);
    },
    [selectedTags],
  );

  const removeSelectedTag = (e) => {
    const targetText = e.target.closest('button').innerText;
    setSelectedTags((prev) => prev.filter((tag) => tag !== targetText));
  };

  const searchFilterTag = useCallback((e) => {
    setSearchTag(e.target.value);
  }, []);

  return (
    <>
      <ContentContainer title="?????? ?????? ??????">
        <ContentItem title="????????????" required>
          <Wrap>
            <CategorySelect>
              {FILTER_LIST.map((list) => {
                return (
                  <CheckBox
                    onChange={checkedHandler}
                    checked={categoryChecked.includes(list.title)}
                    name={list.title}
                    key={list.id}
                  />
                );
              })}
            </CategorySelect>
            <CategoryBtn>
              {categoryChecked &&
                categoryChecked.map((chk, idx) => {
                  return (
                    <Button
                      onClick={removeFilter}
                      selectCategory
                      deleteIcon
                      width="100%"
                      key={idx}
                    >
                      {chk}
                    </Button>
                  );
                })}
            </CategoryBtn>
          </Wrap>
        </ContentItem>
        <ContentItem title={'?????? ??????'} tabIndex="0">
          <FilterTagWrap>
            <Input
              placeholder="??????????????? ????????? ?????????."
              onFocus={showFilterTag}
              onChange={searchFilterTag}
              height="3rem"
              padding="5rem"
              name="filterTagInput"
            />
            <BtnWrap>
              <Button onClick={showFilterTag}>??????</Button>
            </BtnWrap>
          </FilterTagWrap>

          {showFilterTagSearch && (
            <FilterTags
              tagList={filteredTags}
              hideFilterTag={hideFilterTag}
              handleSelectedTags={handleSelectedTags}
            />
          )}

          {selectedTags.length > 0 && (
            <SelectedTags
              selectedTags={selectedTags}
              removeSelectedTag={removeSelectedTag}
            />
          )}
        </ContentItem>
        <ProductWrap>
          <ContentItem title={'?????????'} borderNone required>
            <Wrap>
              <Input
                name="productName"
                height="3rem"
                placeholder="???????????? ????????? ?????????"
                required
              />
            </Wrap>
          </ContentItem>
          <ContentItem title={'?????? ??????'}>
            <Wrap>{v4()}</Wrap>
          </ContentItem>
        </ProductWrap>
        <ContentItem title={'?????? ?????? ?????? ??????'} required>
          <Wrap>
            <Input
              placeholder="?????? ?????? ?????? ????????? ????????? ?????????."
              name="productInfo"
              height="3rem"
              required
            />
          </Wrap>
        </ContentItem>
        <ContentItem title={'?????? ?????????'}>
          <ImageUploadContainer />
        </ContentItem>
        <ContentItem title={'?????? ?????? ?????????'}>
          <ImageUploadContainer multiple />
        </ContentItem>
        <ContentItem title={'?????? ??? ??????'} required>
          <Wrap>1023???</Wrap>
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

const FilterTagWrap = styled.article`
  display: flex;
  padding: 1rem;
  position: relative;
`;

export default ProductBaseInfo;
