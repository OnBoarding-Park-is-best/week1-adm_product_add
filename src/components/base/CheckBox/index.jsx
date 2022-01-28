import useToggle from '@hooks/useToggle';
import { COLORS } from '@utils/constants';
import { Icon } from '@components/base';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CheckBox = ({ id, name, onChange, ...props }) => {
  const [isChecked, toggle] = useToggle(false);

  const checkHandler = (e) => {
    toggle();
    onChange && onChange(e);
  };

  return (
    <CheckBoxLabel htmlFor={id}>
      <CheckBoxInput
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={checkHandler}
        name={name}
      />
      <StyledCheckBox checked={isChecked}>
        <Icon
          icon="akar-icons:check"
          color="#fff"
          height={20}
          style={iconStyle}
        />
      </StyledCheckBox>
      {name}
    </CheckBoxLabel>
  );
};

CheckBox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};

const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const CheckBoxInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  overflow: hidden;
  white-space: nowrap;
`;

const StyledCheckBox = styled.div`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 10px;
  border: solid 0.1rem #dddddd;
  background: ${(props) => (props.checked ? COLORS.purple_90 : 'white')};
  border-radius: 0.4rem;
  transition: all 150ms;
`;

const iconStyle = ({ isActive }) => ({
  visibility: isActive ? 'visiblie' : 'hidden',
});

export default CheckBox;
