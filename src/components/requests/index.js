import React from "react";
import styled from "styled-components";
import { breakWidth } from "css/vars";
import { AddMethod } from "components/request/method";
import Request from "components/request";

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

const Requests = ({
  requests,
  addRequest,
  updateRequest,
  removeRequest,
  addBodyData,
  updateBodyData,
  removeBodyData,
}) => {
  return (
    <RequestsContainer>
      {requests.map((request) => (
        <Request
          key={request.id}
          request={request}
          addBodyData={addBodyData}
          updateBodyData={updateBodyData}
          removeBodyData={removeBodyData}
          updateRequest={updateRequest}
          removeRequest={removeRequest}
        />
      ))}
      <AddMethod addRequest={addRequest} />
    </RequestsContainer>
  );
};

export default Requests;
