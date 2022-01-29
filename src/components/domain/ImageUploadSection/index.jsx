import { ContentContainer } from '@components/base';
import { ImageUploadContainer } from '@components/domain';
import PropTypes from 'prop-types';

const ImageUploadSection = ({ title, multiple, ...props }) => {
  return (
    <ContentContainer title={title} {...props}>
      <ImageUploadContainer multiple />
    </ContentContainer>
  );
};

ImageUploadSection.propTypes = {
  title: PropTypes.string.isRequired,
  multiple: PropTypes.bool,
};

ImageUploadSection.defaultProps = {
  multiple: false,
};

export default ImageUploadSection;
