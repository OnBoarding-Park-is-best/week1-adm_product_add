import styled from 'styled-components';
import { Button, Upload, Icon } from '@components/base';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const ImageUploadContainer = ({ multiple }) => {
  const [images, setImages] = useState([]);

  const handleUpload = (e) => {
    const imagelist = [...e.target.files];
    imagelist.map((image) => {
      return setImages((images) =>
        multiple
          ? [
              ...images,
              {
                id: v4(),
                content: image.name,
              },
            ]
          : [
              {
                id: v4(),
                content: image.name,
              },
            ],
      );
    });
  };

  const handleDeleteClick = (id) => {
    setImages(images.filter((item) => id !== item.id));
  };

  const handleFileName = (list) =>
    list.map(({ id, content }, index) => (
      <FileNameContainer key={index} id={id}>
        {content}
        <Button circleGrey onClick={() => handleDeleteClick(id)}>
          <Icon name="cil:x" />
        </Button>
      </FileNameContainer>
    ));

  return (
    <Container>
      <Upload onChange={handleUpload} name="imageUpload" multiple={multiple}>
        이미지 첨부
      </Upload>
      <FileNameListContainer>{handleFileName(images)}</FileNameListContainer>
    </Container>
  );
};

ImageUploadContainer.propTypes = {
  multiple: PropTypes.bool,
};

ImageUploadContainer.defaultProps = {
  multiple: false,
};

const Container = styled.div`
  display: flex;
  padding: 12px;
  gap: 24px;
  height: auto;
  box-sizing: border-box;
`;

const FileNameListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 5px;
`;

const FileNameContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 8px;
`;

export default ImageUploadContainer;
