import React from 'react';
import styled from 'styled-components';

function RepositoryItem({name, fullName, url}) {
  return (
    <Wrapper>
      <h2>{name}</h2>
      <a href={url} target="_blank" rel="noreferrer">
        {fullName}
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 16px;
  height: 150px;
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
    margin: 8px;
    color: #3182ce;
  }
`;

export default RepositoryItem;