import React from "react";
import styled from "styled-components";
import useRequestList from "hooks/use-request-list";
import Header from "components/header";
import Requests from "components/requests";
import Response from "components/response";

const ApplicationContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Application = () => {
  const {
    updateHost,
    addRequest,
    updateRequest,
    removeRequest,
    addBodyData,
    updateBodyData,
    removeBodyData,
    state,
  } = useRequestList();

  return (
    <ApplicationContainer>
      <Header updateHost={updateHost} host={state.host} />
      <Requests
        addRequest={addRequest}
        updateRequest={updateRequest}
        removeRequest={removeRequest}
        addBodyData={addBodyData}
        updateBodyData={updateBodyData}
        removeBodyData={removeBodyData}
        requests={state.requests}
      />
      <Response body={"{}"} status="201 Created" duration="329ms" size="739B" />
    </ApplicationContainer>
  );
};

export default Application;
