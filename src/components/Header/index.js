import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import useGithub from '../../hooks/githubHooks'

function Header() {
  const { getUser } = useGithub();
  const [ searchedUser, setSearchedUser ] = useState(undefined);

  useEffect(() => {
    getUser("Pitossomo")
    
    // eslint-disable-next-line
  }, [])

  const submitGetUser = () => {
    if (!searchedUser) return;
    else return getUser(searchedUser);
  }

  const handleChange = (newUsername => { setSearchedUser(newUsername); })

  return (
    <header>
      <Wrapper>
        <input 
          type="text"
          onChange={e => handleChange(e.target.value)}
          placeholder="Digite o nome do usuário a pesquisar. P.ex.: Pitossomo"
        />
        <button 
          type="submit"
          onClick={submitGetUser}
        >
          Buscar
        </button>
      </Wrapper>
    </header>
  )
}

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;

  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 8px;
    font-weight: 400;
  }

  button {
    background-color: #225ED8;
    color: #fff;
    padding: 8px 16px;
    margin: 0 8px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 16px;

    &:hover {
      background-color: #2C5282; 
      box-shadow: 3px 2px 10px rgba(0,0,0,0.5)
    }
  }
`;

export default Header