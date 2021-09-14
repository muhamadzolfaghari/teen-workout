import Container from '@mui/material/Container';
import React from 'react';
import './App.css';
import WelcomeWizard from './components/WelcomeWizard/WelcomeWizard';

function App() {
  return (
    <>
      <header>The header</header>
      <main>
        <Container maxWidth={'sm'}>
          <WelcomeWizard />
        </Container>
      </main>
    </>
  );
}

export default App;
