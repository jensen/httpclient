import styled from "styled-components";

export const Row = styled.li`
  display: flex;
  margin-bottom: 0.5rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Column = styled.span`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-right: 1rem;
  flex-grow: 1;

  &:last-of-type {
    margin-right: 0;
  }
`;
