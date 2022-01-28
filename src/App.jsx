import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Layout, OptionSelector, Benefit, Others } from '@components/domain';
import useOptionSelector from '@hooks/useOptionSelector';

const App = () => {
  const optionSelector = useOptionSelector();
  const [isBenefit, setBenefit] = useState(true);
  const [isPresent, setPresent] = useState(false);
  const { products } = optionSelector;

  const handleOthersChange = useCallback((e) => {
    const name = e.target.name;
    if (name === 'benefit') {
      setBenefit((prev) => !prev);
      return;
    }
    if (name === 'present') {
      setPresent((prev) => !prev);
    }
  }, []);

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
        <Benefit checked={isBenefit} onChange={handleOthersChange} />
        <Others checked={isPresent} onChange={handleOthersChange} />
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
`;

export default App;
