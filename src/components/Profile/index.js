import React from 'react'
import styled from 'styled-components'
import useGithub from '../../hooks/githubHooks'
 
const Profile = () => {
  const { githubState } = useGithub();
  
  return (
    <Wrapper>
      <WrapperImage
        src={githubState.user.avatar_url}
        alt="Avatar of user"
      />
      <WrapperInfoUser>
        <div>
          <h1>{githubState.user.name}</h1>
          <WrapperUserData>
            <h3>Username: </h3>
            <a
              href={githubState.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {githubState.user.login}
            </a>
          </WrapperUserData>
          { githubState.user.company && 
            <WrapperUserData>
              <h3>Company: </h3>
              <span>{githubState.user.company}</span>
            </WrapperUserData>
          }
          { githubState.user.location && 
            <WrapperUserData>
              <h3>Location: </h3>
              <span>{githubState.user.location}</span>
            </WrapperUserData>
          }
          { githubState.user.blog && 
            <WrapperUserData>
              <h3>Blog: </h3>
              <a
                href={githubState.user.blog}
                target="_blank"
                rel="noreferrer"
              >
                {githubState.user.blog}
              </a>
            </WrapperUserData>
          }
        </div>
        <WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>{githubState.user.followers}</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>{ githubState.user.following }</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span>{ githubState.user.public_gists }</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span>{ githubState.user.public_repos }</span>
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

const WrapperUserData = styled.div`
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