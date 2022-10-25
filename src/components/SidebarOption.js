import React from 'react';
import styled from 'styled-components';
import { db } from '../firebase';

function SidebarOption({ Icon, title, addChannelOption, id }) {
  const addChannel = () => {
    const channelName = prompt('Please enter the channel name');

    if (channelName) {
      db.collection('rooms').add({
        name: channelName,
      });
    }
  };
  const selectChannel = () => {};
  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span>
          {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 13px;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
    cursor: pointer;
  }
  svg {
    padding: 2px;
  }
  h3 {
    font-weight: 400;
    padding-left: 10px;
  }
`;
const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
