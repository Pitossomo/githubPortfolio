import React from 'react'
import styled from 'styled-components'

function Profile() {
  return (
    <Wrapper>
      <WrapperImage
        src="https://avatars.githubusercontent.com/u/2355303?v=4"
        alt="Avatar of user"
      />
      <WrapperInfoUser>
        <div>
          <h1>Pitossomo</h1>
          <WrapperUsername>
            <h3>Username: </h3>
            <a
              href="https://github.com/pitossomo"
              target="_blank"
              rel="noreferrer"
            >
              Pitossomo
            </a>
          </WrapperUsername>
        </div>
        <WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Starred</h4>
            <span>3</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>10</span>
          </div>
        </WrapperStatusCount>
      </WrapperInfoUser>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`

const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 200px;
  margin-left: 8px;
  h1 { 
    font-size: 32px;
    font-weight: bold;
  };
  h3 { 
    font-size: 18px;
    font-weight: bold;
  };
  h4 {
    font-size: 16px;
    font-weight: bold;
  };
  a {
    font-size: 18px;
    color: blue;
    font-weight: bold;
  }
`;

const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div { margin: 8px; }
  text-align: center;
`;

const WrapperUsername = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  h3 { margin-right: 8px; }
`;

const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
`;

export default Profile