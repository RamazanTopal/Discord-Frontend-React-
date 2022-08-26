import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Snackbar } from '@mui/material';
import { connect } from 'react-redux';
import { getActions } from '../store/actions/alertActions';

function AlertNotification({
  showAlertMessage,
  closeAlertMessage,
  alertMessageContent,
}) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={showAlertMessage}
      onClose={closeAlertMessage}
      autoHideDuration={6000}
    >
      <Alert severit="error">{alertMessageContent}</Alert>
    </Snackbar>
  );
}

const mapStoreStateProps = ({ alert }) => ({
  ...alert,
});

const mapActionsToProps = (dispatch) => ({
  ...getActions(dispatch),
});
AlertNotification.propTypes = {
  showAlertMessage: PropTypes.string.isRequired,
  closeAlertMessage: PropTypes.func.isRequired,
  alertMessageContent: PropTypes.string.isRequired,
};

export default connect(mapStoreStateProps, mapActionsToProps)(AlertNotification);
