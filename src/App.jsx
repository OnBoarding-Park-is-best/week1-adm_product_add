import React from 'react';
import styled from 'styled-components';
import { Layout, OptionSelector, Benefit, Others } from '@components/domain';
import useApp from '@hooks/useApp';

const App = () => {
  const {
    optionSelector,
    isBenefit,
    isPresent,
    handleOthersChange,
    handleSubmit,
  } = useApp();

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
