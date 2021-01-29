import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getChatInstances(action) {
  const response = yield axios.get(`/api/chat/${action.payload}`);
  yield put({
    type: 'GET_MESSAGES',
    payload: response.data,
  });
  yield put({
    type: 'GET_NOTIFICATIONS',
    payload: response.data,
  });
}

function* getMessages(action) {
  const formattedChatArray = [];
  for (let i = 0; i < action.payload.length; i++) {
    const response = yield axios.get(
      `/api/chat/chat_instance/${action.payload[i].id}`
    );
    formattedChatArray.push({
      chatId: action.payload[i].id,
      user1: action.payload[i].user_1,
      user2: action.payload[i].user_2,
      messages: response.data,
    });
  }

  yield put({
    type: 'SET_CHAT_INSTANCES',
    payload: formattedChatArray,
  });
}

function* getNotifications(action) {
  // console.log('innotif');
  // const formattedChatArray = [];
  // for (let i = 0; i < action.payload.length; i++) {
  //   const response = yield axios.get(
  //     `/api/chat/chat_instance/notification/${action.payload[i].id}`
  //   );
  //   formattedChatArray.push({
  //     chatId: action.payload[i].id,
  //     user: action.payload[i].user_2,
  //     newMessage: response.data.notification,
  //   });
  // }
  // console.log(formattedChatArray);
  // yield put({
  //   type: 'SET_CHAT_INSTANCES',
  //   payload: formattedChatArray,
  // });
}

function* sendMessage(action) {
  yield axios.post(`/api/chat/chat_instance/message/${action.payload.chatId}`, {
    user: action.payload.user,
    message: action.payload.message,
  });

  yield put({
    type: 'GET_CHAT_INSTANCES',
    payload: action.payload.user,
  });
}

function* postChatInstance(action) {
  const response = yield axios.post(`/api/chat/chat_instance`, {
    user1: action.payload.user1,
    user2: action.payload.user2,
  });

  console.log(response.data);
  yield put({
    type: 'GET_CHAT_INSTANCES',
    payload: action.payload.user1,
  });
}
// function* putFavorites(action) {
//   yield axios.put(`/api/favorites/${action.payload.userId}`, action.payload);
//   yield put({
//     type: 'GET_FAVORITES',
//     payload: action.payload.userId,
//   });
// }

export default function* skillCategoriesSaga() {
  yield takeLatest('GET_CHAT_INSTANCES', getChatInstances);
  yield takeLatest('GET_MESSAGES', getMessages);
  yield takeLatest('GET_NOTIFICATIONS', getNotifications);
  yield takeLatest('SEND_MESSAGE', sendMessage);
  yield takeLatest('POST_CHAT_INSTANCE', postChatInstance);
}
