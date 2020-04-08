import React from 'react';
import styled from 'styled-components';
import { breakWidth } from 'css/vars';
import { AddMethod } from 'components/request/method';
import Request from 'components/request';

const RequestsContainer = styled.section`
  flex-grow: 1;
  background-color: #5b4e77;
  padding: 2rem;
  overflow: hidden;
  overflow-y: auto;

  @media (max-width: ${breakWidth}) {
    padding: 1rem;
  }
`;

const Requests = ({ requests, addRequest, updateRequest, removeRequest }) => (
  <RequestsContainer>
    {requests.map((request) => (
      <Request
        key={request.id}
        id={request.id}
        method={request.method}
        setMethod={(method) => updateRequest(request.id, method)}
        removeRequest={() => removeRequest(request.id)}
      />
    ))}
    <AddMethod addRequest={addRequest} />
  </RequestsContainer>
);

export default React.memo(Requests);
