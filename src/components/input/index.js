import React from 'react';
import styled, { css } from 'styled-components';

const fullWidth = (props) =>
  props.fullWidth &&
  css`
    width: 100%;
  `;

const LabelContainer = styled.label`
  ${fullWidth}
`;

const Label = styled.div`
  margin-bottom: 0.25rem;
`;

const Field = styled.input`
  ${fullWidth}
`;

const Input = ({ label, value, onChange, fullWidth = true }) => (
  <LabelContainer fullWidth={fullWidth}>
    <Label>{label}</Label>
    <Field fullWidth={fullWidth} value={value} onChange={onChange} />
  </LabelContainer>
);

export default Input;
