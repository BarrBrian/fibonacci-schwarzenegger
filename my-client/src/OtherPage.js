import React from 'react';
import { Link } from 'react-router-dom';

const OtherPage = () => {
  return (
    <div>
      I'm some other page!
      <Link to='/'>Back to the Caluluator.</Link>
    </div>
  );
};

export default OtherPage;