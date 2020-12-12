import React from 'react';
import { useSelector } from 'react-redux';
import { getErrorSelector } from '../../store/selectors/selectors';

const Error = () => {
  const { message } = useSelector(getErrorSelector);
  return <div>{message}</div>;
};

export default Error;
