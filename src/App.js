import React from 'react';
import { ChatEngine } from 'react-chat-engine';

function App() {
	return (
		<ChatEngine
			projectID='17d4412a-f5b8-485c-9bd8-8ed9bcfaa5b4'
			userName='user1'
			userSecret='1234'
			// Render Custom Components
			height='100vh'
			hideUI={false}
			renderChatList={(chatAppState) => {}}
			renderChatCard={(chat, index) => {}}
			renderNewChatForm={(creds) => {}}
			renderChatFeed={(chatAppState) => {}}
			renderChatHeader={(chat) => {}}
			renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => {}}
			renderIsTyping={(people) => {}}
			renderNewMessageForm={(creds, chatId) => {}}
			renderChatSettings={(chatAppState) => {}}
			renderChatSettingsTop={(creds, chat) => {}}
			renderPeopleSettings={(creds, chat) => {}}
			renderPhotosSettings={(creds, chat) => {}}
			renderOptionsSettings={(creds, chat) => {}}
		/>
	);
}

export default App;