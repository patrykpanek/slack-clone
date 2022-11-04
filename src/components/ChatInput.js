import { Button } from '@mui/material';
import React from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import { auth, db } from '../firebase';
import firebase from 'firebase/compat/app';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

function ChatInput({ channelId, channelName, chatRef }) {
  const [input, setInput] = useState('');
  const [user] = useAuthState(auth);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }

    db.collection('rooms').doc(channelId).collection('messages').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });

    setInput('');
  };
  return (
    <InputContainer>
      <form>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </InputContainer>
  );
}

export default ChatInput;

const InputContainer = styled.div`
  border-radius: 20px;
  position: relative;

  form {
    position: absolute;
    display: fixed;
    top: 0;
    /* width: 600px; */
    left: 70vw;
    justify-content: center;
  }
  input {
    position: fixed;
    bottom: 30px;
    width: 20%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
  button {
    display: none !important;
  }
`;
