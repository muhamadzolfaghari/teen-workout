import Container from '@mui/material/Container';
import React from 'react';
import WelcomeWizard from './components/WelcomeWizard/WelcomeWizard';

function App() {
  return (
    <div>
      <header>The header</header>
      <main>
        <Container maxWidth={'sm'}>
          <WelcomeWizard />
        </Container>
      </main>
    </div>
  );
}

export default App;
