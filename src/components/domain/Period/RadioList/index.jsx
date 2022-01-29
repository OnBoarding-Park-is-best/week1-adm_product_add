import { RadioBox } from '@components/base';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const RadioList = ({ name, select, onChange }) => {
  return (
    <RadioContainer name={name}>
      {select.list &&
        select.list.map((value) => (
          <RadioBox
            key={uuidv4()}
            id={uuidv4()}
            value={value}
            checked={select.selected === value}
            onChange={onChange}
          />
        ))}
    </RadioContainer>
  );
};

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default RadioList;
