import React from 'react';
import styled from 'styled-components';
import Input from 'components/input';
import withTargetValue from 'utils/with-target-value';

const HeaderContainer = styled.header`
  display: flex;
  background-color: #30293f;
  padding: 1rem 2rem;
  border-bottom: 2px solid #dfbd4f;

  @media (max-width: 400px) {
    padding: 1rem;
  }
`;

const Logo = styled.img`
  margin-right: 1rem;
`;

const Header = ({ host, updateHost }) => (
  <HeaderContainer>
    <Logo src="/images/logo.png" alt="Logo" />
    <Input label="HOST" value={host} onChange={withTargetValue(updateHost)} />
  </HeaderContainer>
);

export default Header;
