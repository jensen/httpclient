import React from 'react';
import styled from 'styled-components';
import Input from 'components/input';
import withTargetValue from 'utils/with-target-value';

const PathContainer = styled.div`
  margin-bottom: 1rem;
`;

const Path = ({ path, updatePath }) => (
  <PathContainer>
    <Input label="PATH" value={path} onChange={withTargetValue(updatePath)} />
  </PathContainer>
);

export default Path;
