import React from "react";
import styled from "styled-components";
import Input from "components/input";
import BodyData from "./bodydata";
import withTargetValue from "utils/with-target-value";

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailsContainer = styled.div`
  background-color: #f5f6f8;
  padding: 1rem 1rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  border-top: 2px solid #e3e3e3;
`;

const PathContainer = styled.div`
  margin-bottom: 1rem;
`;

const Details = ({
  path,
  updatePath,
  showBodyData,
  data,
  addBodyData,
  updateBodyData,
  removeBodyData,
}) => {
  return (
    <DetailsContainer>
      <PathContainer>
        <Input
          label="PATH"
          value={path}
          onChange={withTargetValue(updatePath)}
        />
      </PathContainer>
      <BodyContainer>
        {showBodyData && (
          <BodyData
            data={data}
            addBodyData={addBodyData}
            updateBodyData={updateBodyData}
            removeBodyData={removeBodyData}
          />
        )}
      </BodyContainer>
    </DetailsContainer>
  );
};

export default Details;
