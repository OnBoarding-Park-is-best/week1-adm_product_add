import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Layout, OptionSelector, Benefit, Others } from '@components/domain';
import useOptionSelector from '@hooks/useOptionSelector';
import scrollStyle from '@styles/scrollStyle';

const App = () => {
  const optionSelector = useOptionSelector();
  const [isBenefit, setBenefit] = useState(true);
  const [isPresent, setPresent] = useState(false);
  const { products } = optionSelector;
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (products.length === 0) {
        alert('상품 옵션을 하나 이상 등록하셔야 합니다.');
        return;
      }
      console.log('saved!');
      console.log(products);
    },
    [products],
  );

  return (
    <Layout>
      <Form id="register" onSubmit={handleSubmit}>
        <OptionSelector {...optionSelector} />
        <Benefit checked={isBenefit} />
        <Others checked={isPresent} />
      </Form>
    </Layout>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 3em;
  padding: 2em 1em;
  overflow-y: auto;
  ${scrollStyle}
`;
export default App;
