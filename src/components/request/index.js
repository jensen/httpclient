import React from 'react';
import styled from 'styled-components';
import Method from './method';
import Path from './path';
import BodyData from './bodydata';
import useRequestDetails from 'hooks/use-request-details';
import useMakeRequest from 'hooks/use-make-request';

const RequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  margin-bottom: 2rem;
`;

const DetailsContainer = styled.div`
  background-color: #f5f6f8;
  padding: 1rem 1rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  border-top: 2px solid #e3e3e3;
`;

const Request = ({ id, method, setMethod, removeRequest }) => {
  const {
    path,
    setPath,
    bodydata,
    addBodyData,
    updateBodyData,
    removeBodyData,
  } = useRequestDetails(id);

  const run = useMakeRequest({ path, bodydata });

  return (
    <RequestContainer>
      <Method
        method={method}
        updateMethod={setMethod}
        removeRequest={removeRequest}
        run={run}
      />
      <DetailsContainer>
        <Path path={path} updatePath={setPath} />
        <BodyData
          bodydata={bodydata}
          addBodyData={addBodyData}
          updateBodyData={updateBodyData}
          removeBodyData={removeBodyData}
          showBodyData={['POST', 'PUT'].includes(method)}
        />
      </DetailsContainer>
    </RequestContainer>
  );
};

export default Request;
