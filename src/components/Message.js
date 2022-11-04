import React from 'react';
import styled from 'styled-components';

function Message({ user, userImage, message, timestamp }) {
  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <h4>
          {user}
          {''}
        </h4>
        <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  img {
    height: 70px;
    width: 70px;
    object-fit: cover;
    border-radius: 8px;
  }
`;
const MessageInfo = styled.div`
  padding-left: 20px;
  /* display: flex; */
  span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 15px;
  }
`;
