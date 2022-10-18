/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import { setMessages } from '../store/actions/chatActions';
import store from '../store/store';

const updateChatHistoryIfSameConversationActive = ({
  participants,
  usersInConversation,
  messages,
}) => {
  const result = participants.every((participantId) => usersInConversation.includes(participantId));

  if (result) {
    store.dispatch(setMessages(messages));
  }
};

export const updateDirectChatHistoryIfActive = (data) => {
  const { participants, messages } = data;

  const receiverId = store.getState().chat.chosenChatDetails?.id;
  const userId = store.getState().auth.userDetails._id;

  if (receiverId && userId) {
    const usersInConversation = [receiverId, userId];

    updateChatHistoryIfSameConversationActive({
      participants,
      usersInConversation,
      messages,
    });
  }
};
