import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <strong>This Cohort Never Peaks</strong>
      <br />
      <Link to='/'>Go back home</Link>
    </div>
  );
};
