import React from 'react';
import styled from 'styled-components';
import { ContentContainer, ContentItem, Button } from '@components/base';
import { Layout, OptionSelector, Benefit, Others } from '@components/domain';
import scrollStyle from '@styles/scrollStyle';
import useApp from '@hooks/useApp';

const App = () => {
  const {
    appState,
    isModalOn,
    toggleModal,
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
      <BackDrop
        className="modal-toggle"
        showing={isModalOn}
        onClick={toggleModal}
      >
        <Modal>
          <ContentContainer title="저장 결과">
            {Object.entries(appState).map(([key, value]) => (
              <ContentItem title={key} key={key}>
                <Wrapper>{JSON.stringify(value)}</Wrapper>
              </ContentItem>
            ))}
          </ContentContainer>
          <Button className="modal-toggle" confirm>
            확인
          </Button>
        </Modal>
      </BackDrop>
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

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: ${({ showing }) => (showing ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
  width: 50%;
  min-height: 50%;
  max-height: 80%;
  z-index: 1001;
  padding: 3em 1em;
  border-radius: 0.5em;
  background-color: #fff;
  overflow-y: auto;
  ${scrollStyle}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0.5em;
`;

export default App;
