import {ChatEngine} from 'react-chat-engine';
import './App.css';

// import React from 'react'

const App = () => {
    return (
       <ChatEngine
       height = "100vh"
       projectID="5a988044-30e8-4da1-b798-3cf9d10cc65c"
       userName="user1"
       userSecret="1234"
       />
    )
}

export default App
