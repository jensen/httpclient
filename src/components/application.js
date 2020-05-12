import React, { useState } from 'react';
import styled from 'styled-components';
import useRequestList from 'hooks/use-request-list';
import Header from 'components/header';
import Requests from 'components/requests';
import Response from 'components/response';
import { RequestProvider } from 'context/request';
import useLocalStorage from 'hooks/use-local-storage';

const ApplicationContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Application = () => {
  const [host, setHost] = useState('http://localhost:3000');
  const [response, setResponse] = useState({
    body: '',
    duration: null,
    status: null,
    size: null,
  });

  const {
    requests,
    addRequest,
    updateRequest,
    removeRequest,
  } = useRequestList();

  useLocalStorage('host', host, setHost);

  return (
    <RequestProvider host={host} setResponse={setResponse}>
      <ApplicationContainer>
        <Header updateHost={setHost} host={host} />
        <Requests
          addRequest={addRequest}
          updateRequest={updateRequest}
          removeRequest={removeRequest}
          requests={requests}
        />
        <Response
          body={response.body}
          status={response.status}
          duration={response.duration}
          size={response.size}
        />
      </ApplicationContainer>
    </RequestProvider>
  );
};

export default Application;
