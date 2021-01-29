const getUsersForChat = (myId, chats) => {
  const chatInstance = [];
  for (let i = 0; i < chats.length; i++) {
    if (chats[i].user1 !== myId) {
      chatInstance.push({ chatId: chats[i].chatId, user: chats[i].user1 });
    }
    if (chats[i].user2 !== myId) {
      chatInstance.push({ chatId: chats[i].chatId, user: chats[i].user2 });
    }
  }
  return chatInstance;
};

export default getUsersForChat;
