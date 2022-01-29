import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS } from '@utils/constants';
import { forwardRef } from 'react';

const Input = forwardRef(
  ({ onChange, name, height, padding, error, success, ...props }, ref) => {
    let status = '';

    if (error) {
      status = 'error';
    }
    if (success) {
      status = 'success';
    }

    return (
      <StyledInput
        onChange={onChange}
        name={name}
        className={status || undefined}
        padding={padding}
        height={height}
        {...props}
        style={{ ...props.style }}
        ref={ref}
      />
    );
  },
);

Input.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  padding: PropTypes.string,
  height: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  style: PropTypes.object,
};

Input.defaultProps = {
  onChange: () => {},
  padding: '8px',
  height: '3rem',
  error: false,
  success: false,
  style: {},
};

const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: ${({ height }) => height};
  box-sizing: border-box;
  border: 1px solid ${COLORS.border};
  background-color: transparent;
  outline: none;
  padding: 8px ${({ padding }) => padding} 8px 8px;

  &::placeholder {
    color: ${COLORS.grey};
  }

  &:disabled,
  &:disabled:hover {
    border-color: ${COLORS.grey};
    cursor: not-allowed;
    transition: none;
  }

  &.error {
    border-color: ${COLORS.red};
  }

  &.success {
    border-color: ${COLORS.green};
  }
`;

export default Input;
