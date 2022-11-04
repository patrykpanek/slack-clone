import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { auth, provider } from '../firebase';

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => error.message);
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://i.pcmag.com/imagery/reviews/07td46ju7p6lLVb0QGwc5VF-6.fit_scale.size_1028x578.v1569479844.jpg"
          alt=""
        />
        <h1>Sign in to the Patryk folks</h1>
        <p>patryk.slack.com</p>
        <Button onClick={signIn}>Sign in with google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  img {
    height: 300px;
  }
  button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;
