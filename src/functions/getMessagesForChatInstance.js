const getMessagesForChatInstance = (chatInstance, chatInstanceList) => {
  let messages;

  for (let i = 0; i < chatInstanceList.length; i++) {
    if (chatInstance === chatInstanceList[i].chatId) {
      messages = chatInstanceList[i].messages;
    }
  }

  return messages;
};

export default getMessagesForChatInstance;
