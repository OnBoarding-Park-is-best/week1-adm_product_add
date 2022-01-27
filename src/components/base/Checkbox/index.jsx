import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { COLORS } from '@utils/constants';
import styled from 'styled-components';

const CheckBox = ({id, name, onChange, ...props}) => {
  const [ isChecked, setChecked ] = useState(false);

  const checkHandler = ({target}) => {
    setChecked(prev => !prev);
  }

  return (
    <CheckBoxLabel htmlFor={id}>
      <CheckBoxInput id={id} type="checkbox" checked={isChecked} onChange={checkHandler}/>
      <StyledCheckBox checked={isChecked}>
        <Icon viewBox='0 0 24 24'>
          <polyline points="19 7 10 17 5 12" />
        </Icon>
      </StyledCheckBox>
      { name }
    </CheckBoxLabel>
  )
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

const Icon = styled.svg` 
  fill: none; 
  stroke: white; 
  stroke-width: 2px; 
`;

const StyledCheckBox = styled.div`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 10px;
  border: solid 0.1rem #dddddd;
  background: ${props => props.checked ? COLORS.purple_90 : 'white'}; 
  border-radius: 0.4rem; transition: all 150ms;
  ${Icon} { 
    visibility: ${props=>props.checked? 'visible': 'hidden'}; 
  }
`;

export default CheckBox;