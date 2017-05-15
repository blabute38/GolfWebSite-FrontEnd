import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const PageHeader = (props) => {

  const {title} = props;

  return (
    <h1>{title}</h1>
  );
};

export default PageHeader;
