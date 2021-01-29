let chatData;

const killData = () => {
  setTimeout(() => {
    chatData = null;
  }, 1000);
};
const holdSwitchToChatData = (data) => {
  if (data.type === 'hold') {
    chatData = {
      view: data.view,
      userId: data.userId,
      chatInstance: data.chatInstance,
    };
  } else if (data.type === 'get') {
    killData();
  } else {
    chatData = {
      view: undefined,
      userId: undefined,
      chatInstance: undefined,
    };
  }
  return chatData;
};

export default holdSwitchToChatData;
