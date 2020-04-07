import React from "react";
import styled from "styled-components";
import Method from "./method";
import Details from "./details";

const RequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  margin-bottom: 2rem;
`;

const Request = ({
  request,
  addBodyData,
  updateBodyData,
  removeBodyData,
  updateRequest,
  removeRequest,
}) => {
  return (
    <RequestContainer>
      <Method
        method={request.method}
        updateMethod={(method) => updateRequest({ ...request, method })}
        removeRequest={() => removeRequest(request)}
      />
      <Details
        path={request.path}
        data={request.data}
        updatePath={(path) => updateRequest({ ...request, path })}
        addBodyData={() => addBodyData(request.id)}
        updateBodyData={(data) => updateBodyData(request.id, data)}
        removeBodyData={(id) => removeBodyData(request.id, id)}
        showBodyData={["POST", "PUT"].includes(request.method)}
      />
    </RequestContainer>
  );
};

export default Request;
