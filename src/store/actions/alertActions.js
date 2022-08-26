const alertActions = {
  OPEN_ALERT_MESSAGE: 'ALERT.OPEN_ALERT_MESSAGE',
  CLOSE_ALERT_MESSAGE: 'ALERT.CLONE_ALERT_MESSAGE',
};

export const closeAlertMessage = (content) => ({
  type: alertActions.CLOSE_ALERT_MESSAGE,
  content,
});

export const openAlertMessage = (content) => ({
  type: alertActions.OPEN_ALERT_MESSAGE,
  content,
});

export const getActions = (dispatch) => ({
  openAlertMessage: (content) => dispatch(openAlertMessage(content)),
  closeAlertMessage: () => dispatch(closeAlertMessage()),
});

export default alertActions;
