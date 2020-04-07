import React from "react";
import styled from "styled-components";
import { StatusIcon, TimeIcon, DataIcon } from "components/icons";
import { colors } from "css/vars";

const ResponseContainer = styled.footer`
  display: flex;
  flex-direction: column;
`;

const BodyContainer = styled.div`
  background-color: #f2f2f2;
  padding: 1rem;
  min-height: 5rem;
  border-top: 4px solid #30293f;
`;

const Body = styled.div`
  font-family: "Ubuntu Mono", monospace;
  font-size: 16px;
  white-space: pre;
`;

const Status = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #e5e5e5;
  padding: 0.5rem 1rem;
`;

const StatusPair = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  margin-right: 1rem;

  &:last-of-type {
    margin-right: 0;
  }

  font-weight: 700;
  font-size: 0.8rem;
  color: #606060;

  & svg {
    margin-right: 0.5rem;
  }
`;

const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #cdcdcd;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Response = ({ body, status, duration, size }) => {
  return (
    <ResponseContainer>
      <BodyContainer>
        {body ? <Empty>Make a request.</Empty> : <Body />}
      </BodyContainer>
      <Status>
        <StatusPair>
          <TimeIcon fill={colors.lightGrey} />
          {duration}
        </StatusPair>
        <StatusPair>
          <StatusIcon fill={colors.lightGrey} />
          {status}
        </StatusPair>
        <StatusPair>
          <DataIcon fill={colors.lightGrey} />
          {size}
        </StatusPair>
      </Status>
    </ResponseContainer>
  );
};

export default Response;
