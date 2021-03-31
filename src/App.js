import {ChatEngine} from 'react-chat-engine';
import './App.css';
import LoginForm from './components/LoginForm';

// import React from 'react'

const projectID = '17d4412a-f5b8-485c-9bd8-8ed9bcfaa5b4';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
    return (
        <ChatEngine
        height = "100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
       />
    )
}

export default App;