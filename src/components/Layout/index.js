import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import useGithub from '../../hooks/githubHooks';
import { Alert } from '../Alert'

function Layout({ children }) {
  const { githubState } = useGithub(); 
  
  return (
    <WrapperLayout>
      <Header />
      { githubState.loading ? <Alert text="Carregando" /> : (
        <> { githubState.hasSearch ? (
          <> { 
            githubState.user.name 
            ? children
            : <Alert text="Usuário indisponível" />
          } </>
        ) : (
          <Alert text="Nenhum usuário buscado" />
        )} </>
      )}
    </WrapperLayout>
  );
}

const WrapperLayout = styled.section`
  margin: 16px;
`;

export default Layout;