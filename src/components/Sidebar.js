import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SidebarOption from './SidebarOption';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Sidebar() {
  const [channels, loading, error] = useCollection(db.collection('rooms'));
  const [user] = useAuthState(auth);
  return (
    <SideContainer>
      <SideHeader>
        <SideInfo>
          <h2>PAAPA </h2>
          <h3>
            <FiberManualRecordIcon />
            {user.displayName}
          </h3>
        </SideInfo>
        <CreateIcon />
      </SideHeader>

      <SidebarOption Icon={InsertCommentIcon} title="Threats" />
      <SidebarOption Icon={InboxIcon} title="Mentions" />
      <SidebarOption Icon={DraftsIcon} title="Saved items" />
      <SidebarOption Icon={BookmarkIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add channel" />
      {channels?.docs.map((doc) => (
        <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SideContainer>
  );
}

export default Sidebar;

const SideContainer = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  height: 100vh;
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  margin-top: 60px;
  max-width: 260px;
  border-top: 1px solid #49274b;

  hr {
    padding: 3px 0 3px 0;
    margin-top: 10px;
    margin-bottom: 10px;
    color: white;
    border: none;
    line-height: 13px;
    border-bottom: 1px solid #49274b;
  }
`;
const SideHeader = styled.div`
  display: flex;
  padding: 13px;
  border-bottom: 1px solid #49274b;

  .MuiSvgIcon-root {
    padding: 3px;
    background-color: white;
    border-radius: 999px;
    font-size: 28px;
    color: #49274b;
  }
`;
const SideInfo = styled.div`
  flex: 1;
  h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
    line-height: 28px;
  }
  .MuiSvgIcon-root {
    color: white;
    margin-right: 5px;
    font-size: 14px;
    color: green;
    padding: 0;
    border-radius: 999px;
    background-color: green;
  }
`;
