import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';

const Separator = styled('div')({
  width: '95%',
  backgroundColor: '#b9bbbe',
  height: '1px',
  position: 'relative',
  marginTop: '20px',
  marginBottom: '10px',
});

const DateLabel = styled('span')({
  backgroundColor: '#36393f',
  position: 'absolute',
  left: '45%',
  top: '-10px',
  color: '#b9bbbe',
  padding: '0 5px',
  fontSize: '20px',
});

function DateSeparator({ date }) {
  return (
    <Separator>
      <DateLabel>{date}</DateLabel>
    </Separator>
  );
}

DateSeparator.propTypes = {
  date: PropTypes.string,
};

export default DateSeparator;
