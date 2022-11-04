import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import Chat from './components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './components/Login';
import Spinner from 'react-spinkit';

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <Spinner name="folding-cube" />
        </AppLoadingContents>
      </AppLoading>
    );
  }
  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <Container>
            <Sidebar />
            <Chat />
          </Container>
        </>
      )}
    </div>
  );
}

export default App;

const AppLoading = styled.div``;
const AppLoadingContents = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
`;
