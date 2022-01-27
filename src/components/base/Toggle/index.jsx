import styled from 'styled-components';
import useToggle from '@hooks/useToggle';
import { COLORS } from '@utils/constants';
import PropTypes from 'prop-types';

const Toggle = ({ name, on = false, onChange, ...props }) => {
  const [checked, toggle] = useToggle(on);

  const handleChange = (e) => {
    toggle();
    onChange && onChange();
  };

  return (
    <ToggleContainer {...props}>
      <ToggleInput
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handleChange}
      />
      <ToggleSwitch />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  name: PropTypes.string,
  on: PropTypes.bool,
  onChange: PropTypes.func,
};

Toggle.defaultProps = {
  name: 'toggle',
  on: false,
  onChange: () => {},
};

const ToggleContainer = styled.label`
  display: inline-block;
  cursor: pointer;
  user-select: none;
`;

const ToggleSwitch = styled.div`
  width: 54px;
  height: 18px;
  padding: 2px;
  border-radius: 15px;
  background-color: ${COLORS.grey};
  transition: background-color 0.2 ease-out;
  box-sizing: border-box;

  &:after {
    content: '';
    position: relative;
    top: -6px;
    left: -2px;
    display: block;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: ${COLORS.grey_10};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    transition: left 0.2s ease-out;
  }
`;

const ToggleInput = styled.input`
  display: none;

  &:checked + div {
    background: ${COLORS.purple_30};
  }

  &:checked + div:after {
    left: calc(100% - 24px);
    background: ${COLORS.purple_50};
  }
`;

export default Toggle;
