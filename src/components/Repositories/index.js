import React from 'react'
import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import RepositoryItem from '../RepositoryItem';

function Repositories() {
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
          <RepositoryItem />
        </WrapperTabPanel>
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
  margin: 0;
`;
WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
  width: 200px;
  display: flex;
  justify-content: center;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #ccc;
  padding: 12px;
  user-select: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &.is-selected {
    z-index: 99999;
    background-color: #fff;
    box-shadow: 0 -3px 0px 0.3px rgba(0,0,0,0.1);
    border-bottom: 1px solid white;
  }
`;
WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
  display: none;
  min-height: 40vh;
  padding: 16px;
  margin-top: -9px;
  border: 1px solid #ccc;
  
  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = 'TabPanel';

export default Repositories