import React from 'react';
import styled from 'styled-components';

function RepositoryItem({name, fullName, url, pagesUrl, pagesName}) {
  return (
    <Wrapper>
      <h2>{name}</h2>
      <h4>Repo</h4>
      <a href={url} target="_blank" rel="noreferrer">
        {fullName}
      </a>
      { pagesUrl && <>
        <h4>Github Pages</h4>
        <a href={pagesUrl} target="_blank" rel="noreferrer">
          {pagesName}
        </a>
      </> }
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid #ccc;
  display: flex-block;
  flex-row: column;
  align-items: center;
  border-radius: 8px;
  margin: 16px;
  height: 200px;
  width: 350px;
  padding: 8px;

  h2 {
    font-size: 18px;
    font-weight: bold;
    margin: 8px;
  }

  h4 {
    font-size: 14px;
    font-weight: bold;
    margin: 8px;
    color: #2d3748
  }

  a {
    font-size: 14px;
    font-weight: bold;
    margin: 0 16px;
    color: #3182ce;
  }
`;

export default RepositoryItem;