import React from "react";
import styled, { css } from "styled-components";
import { colors, borderRadius } from "css/vars";
import { AddIcon, DeleteIcon, PlayIcon } from "components/icons";

const MethodContainer = styled.div`
  display: flex;
  background-color: #222340;
  border-top-left-radius: ${borderRadius};
  border-top-right-radius: ${borderRadius};
  justify-content: flex-start;
`;

const MethodAddContainer = styled.div`
  display: flex;
  background-color: #222340;
  border-radius: ${borderRadius};
  justify-content: flex-start;
`;

const MethodList = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  flex-grow: 1;
`;

const MethodButton = styled.button`
  color: rgba(255, 255, 255, 0.1);
  font-weight: 700;

  &:hover {
    color: ${colors.white};
  }

  ${(props) =>
    props.active &&
    css`
      color: ${colors.white};
    `};
  }
`;

const Button = styled.button`
  display: flex;
  background-color: ${colors.white};
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
`;

const AddButton = styled(Button)`
  background-color: #222340;
  border-top-left-radius: ${borderRadius};
  border-bottom-left-radius: ${borderRadius};

  &:hover {
    background-color: #090a27;
  }
`;

const DeleteButton = styled(Button)`
  background-color: #bf213f;
  border-top-left-radius: ${borderRadius};

  &:hover {
    background-color: #a60826;
  }
`;

const RunButton = styled(Button)`
  background-color: #46bc83;
  border-top-right-radius: ${borderRadius};

  &:hover {
    background-color: #2da36a;
  }
`;

const methodButtons = ["GET", "POST", "PUT", "DELETE"];

export const AddMethod = ({ addRequest }) => {
  return (
    <MethodAddContainer>
      <AddButton onClick={() => addRequest("GET")}>
        <AddIcon />
      </AddButton>
      <MethodList>
        {methodButtons.map((button) => (
          <MethodButton key={button} onClick={() => addRequest(button)}>
            {button}
          </MethodButton>
        ))}
      </MethodList>
    </MethodAddContainer>
  );
};

const Method = ({ method, updateMethod, removeRequest }) => {
  return (
    <MethodContainer>
      <DeleteButton onClick={removeRequest}>
        <DeleteIcon />
      </DeleteButton>
      <MethodList>
        {methodButtons.map((button) => (
          <MethodButton
            key={button}
            active={method === button}
            onClick={() => updateMethod(button)}
          >
            {button}
          </MethodButton>
        ))}
      </MethodList>
      <RunButton>
        <PlayIcon />
      </RunButton>
    </MethodContainer>
  );
};

export default Method;
