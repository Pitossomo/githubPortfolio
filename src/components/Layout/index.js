import React from 'react';
import styled from 'styled-components';
import Header from '../Header';

function Layout({ children }) {
  return (
    <WrapperLayout>
      <Header />
      { children }
    </WrapperLayout>
  );
}

const WrapperLayout = styled.section`
  margin: 16px;
`;

export default Layout;