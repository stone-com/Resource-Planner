import React from 'react';
import { useGetList } from 'react-admin';

const SummaryNumber = ({ number }) => {
  const style = {
    fontSize: '7.8em',
    lineHeight: '0',
    textAlign: 'center'
  };

  return (
      <p  style={style}>{number}</p>
  );
};

export default SummaryNumber;
