import React from 'react';
import styled from 'styled-components';

function Layout({ children }) {
  return (
    <WrapperLayout>
      <header>header</header>
      { children }
    </WrapperLayout>
  );
}

const WrapperLayout = styled.section`
  margin: 16px;
`;

export default Layout;