const doesChatInstanceExist = (data) => {
  let chatInstance;
  if (data.list.length !== 0) {
    for (let i = 0; i < data.list.length; i++) {
      if (
        data.myId === data.list[i].user1 ||
        data.myId === data.list[i].user2
      ) {
        if (
          data.userId === data.list[i].user1 ||
          data.userId === data.list[i].user2
        ) {
          chatInstance = data.list[i].chatId;
          i = data.list.length;
        } else {
          chatInstance = false;
        }
      } else {
        chatInstance = false;
      }
    }
  } else {
    chatInstance = false;
  }
  return chatInstance;
};

export default doesChatInstanceExist;
