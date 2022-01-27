import React from 'react';
import { COLORS } from '@utils/constants';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RadioBox = ({id, value, checked, onChange, ...props}) => {
  return (
    <RadioLabel htmlFor={id}>
      <RadioInput id={id} value={value} type="radio" checked={checked} onChange={onChange}/>
      <StyledRadioBox><StyledRadio checked={checked} /></StyledRadioBox>
      {value}
    </RadioLabel>
  )
}

RadioBox.propTypes = {
  id: PropTypes.number,
  value: PropTypes.string,
  checked: PropTypes.bool,
}

const RadioLabel = styled.label`
  display: block;
`;

const RadioInput = styled.input`
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
`

const StyledRadioBox = styled.div`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 6px;
  transform: translate(0, 4px);
  border: solid 0.1rem ${COLORS.grey};
  border-radius: 50%;
`

const StyledRadio = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  width: 12px;
  height: 12px;
  background: ${props => props.checked ? COLORS.purple_90 : 'white'}; 
  border-radius: 50%; 
  transform: translate(-50%, -50%);
  transition: all 150ms;
`

export default RadioBox;