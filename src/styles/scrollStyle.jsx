import { css } from 'styled-components';
import { COLORS } from '@utils/constants';

const scrollStyle = css`
  &::-webkit-scrollbar {
    width: 0.5em;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${COLORS.grey};
    border-radius: 5px;
  }
`;

export default scrollStyle;
