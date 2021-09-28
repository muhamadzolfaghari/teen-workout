import React from 'react';
import Header from './components/UI/Layout/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <>
      <h1>{process.env.REACT_APP_REDIRECT_URI}</h1>
      <Header />
      <main>
        <Main />
      </main>
    </>
  );
}

export default App;
