import { css } from 'styled-components';
import { COLORS } from '@utils/constants';

const buttonStyle = css`
  ${(props) =>
    props.deleteRed &&
    css`
      color: ${COLORS.red};
      border: 1px solid ${COLORS.red};
    `}

  ${(props) =>
    props.deleteGrey &&
    css`
      color: ${COLORS.grey};
      border: 1px solid ${COLORS.grey};
    `}

    ${(props) =>
    props.cancel &&
    css`
      border: none;
      color: #fff;
      background-color: ${COLORS.grey};
    `}

    ${(props) =>
    props.confirm &&
    css`
      border: none;
      color: #fff;
      background-color: ${COLORS.purple_90};
    `}

    ${(props) =>
    props.selectCategory &&
    css`
      background-color: ${COLORS.purple_30};
    `}

    ${(props) =>
    props.filterCategory &&
    css`
      border: none;
      font-size: 0.8rem;
      padding: 0.1rem 0.4rem;
      background-color: ${COLORS.yellowgreen};
    `}
`;

export default buttonStyle;
