import React from 'react';
import Header from './components/UI/Layout/Header/Header';
import Main from './components/Main/Main';

function App() {
    return (
        <>
            Redirect to UI {process.env.REACT_APP_REDIRECT_URI}
            <Header/>
            <main>
                <Main/>
            </main>
        </>
    );
}

export default App;
