import React, { useEffect } from 'react'
import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import RepositoryItem from '../RepositoryItem';
import useGithub from '../../hooks/githubHooks';

function Repositories() {
  const { githubState, getUserRepos, getUserStarred } = useGithub();

  useEffect(() => {
    if (!githubState.user.login) return;
    getUserRepos(githubState.user.login);
    getUserStarred(githubState.user.login);
    
    // eslint-disable-next-line
  }, [githubState.user.login])

  return (
    <div>
      <WrapperTabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
      >
        <WrapperTabList>
          <WrapperTab>Repositories</WrapperTab>
          <WrapperTab>Starred</WrapperTab>
        </WrapperTabList>
        <WrapperTabPanel>
          { githubState.repositories.map(item => ( 
            <RepositoryItem
              key={item.id}
              name={item.name}
              fullName={item.full_name}
              url={item.html_url}
              pagesUrl={item.has_pages && `https://${githubState.user.login}.github.io/${item.name}`}
              pagesName={`${githubState.user.login}.github.io/${item.name}`}
            />
          ))}
        </WrapperTabPanel>
        { githubState.starred.map(item => ( 
            <RepositoryItem
              key={item.id}
              name={item.name}
              fullName={item.full_name}
              url={item.html_url}
            />
          ))}
        <WrapperTabPanel>
          <RepositoryItem />
        </WrapperTabPanel>
      </WrapperTabs>      
    </div>
  )
}

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  margin: 16px;
  width: calc(100%-16px);
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 8px 0;
  display: flex;
  margin: 0 16px;
`;
WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
  width: 200px;
  display: flex;
  justify-content: center;
  border-radius: 16px;
  border: 1px solid #ccc;
  padding: 12px;
  margin: 0 16px;
  user-select: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &.is-selected {
    z-index: 99999;
    background-color: #fff;
    box-shadow: 0 3px 0px 0.3px rgba(2,5,8,0.5);
    border-bottom: 1px solid #3182ce;
  }
`;
WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
  display: none;
  min-height: 40vh;
  padding: 16px;
  
  &.is-selected {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap; 
  }
`;
WrapperTabPanel.tabsRole = 'TabPanel';

export default Repositories