import React, { useRef } from 'react';
import styled from 'styled-components';

const Upload = ({ children, onChange, name, ...props }) => {
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

export default Upload;
