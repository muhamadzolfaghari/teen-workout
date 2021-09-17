import React from 'react';
import WelcomeWizard from './components/WelcomeWizard/WelcomeWizard';
import Header from './components/UI/Layout/Header/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <WelcomeWizard />
      </main>
    </>
  );
}

export default App;
