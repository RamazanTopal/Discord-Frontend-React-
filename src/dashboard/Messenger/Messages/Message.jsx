import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import Avatar from '../../../components/Avatar';

const MainContainer = styled('div')({
  width: '97%',
  display: 'flex',
  marginTop: '10px',
});

const AvatarContainer = styled('div')({
  width: '70px',
});

const MessageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const MessageContent = styled('div')({
  color: '#DCDDDE',
});
const SameAuthorMessageContent = styled('div')({
  color: '#DCDDDE',
  width: '97%',
});
const SameAuthorMessageText = styled('span')({
  marginLeft: '70px',
});

function Message({
  content, name, sameAuthor, date, sameDay,
}) {
  if (sameAuthor && sameDay) {
    return (
      <SameAuthorMessageContent>
        <SameAuthorMessageText>{content}</SameAuthorMessageText>
      </SameAuthorMessageContent>
    );
  }

  return (
    <MainContainer>
      <AvatarContainer>
        <Avatar name={name} />
      </AvatarContainer>
      <MessageContainer>
        <Typography style={{ fontSize: '16px', color: 'white' }}>
          {name}
          {' '}
          <span style={{ fontSize: '12px', color: '#72767d' }}>{date}</span>
        </Typography>
        <MessageContent>{content}</MessageContent>
      </MessageContainer>

    </MainContainer>
  );
}

Message.propTypes = {
  content: PropTypes.string,
  name: PropTypes.string,
  sameAuthor: PropTypes.bool,
  date: PropTypes.string,
  sameDay: PropTypes.bool,
};

export default Message;
