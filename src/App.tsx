import React from 'react';
import Header from './components/UI/Layout/Header/Header';
import Main from './components/Main/Main';

function App() {
    console.log(process.env)
  return (
    <>
      <Header />
      <main>
        <Main />
      </main>
    </>
  );
}

export default App;
