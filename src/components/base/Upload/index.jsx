import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import styled from 'styled-components';

const Upload = ({ children, name, multiple, onChange, ...props }) => {
  const uploadInputRef = useRef(null);

  const handleUploadImage = () => {
    uploadInputRef.current.click();
  };

  return (
    <UploadContainer>
      <Input
        type="file"
        name={name}
        accept="image/jpg, image/jpeg, image/png"
        multiple={multiple}
        ref={uploadInputRef}
        onChange={onChange}
      />
      <Button type="button" onClick={handleUploadImage} {...props}>
        {children}
      </Button>
    </UploadContainer>
  );
};

const UploadContainer = styled.div`
  display: inline-block;
`;

const Input = styled.input`
  display: none;
`;

const Button = styled.button`
  all: unset;
`;

Upload.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  multiple: PropTypes.bool,
  onChange: PropTypes.func,
};

Upload.defaultProps = {
  name: 'upload',
  multiple: false,
  onChange: () => {},
};

export default Upload;
