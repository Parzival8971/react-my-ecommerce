import React from 'react';

const Helmet = (props) => {
  document.title = '리액트마켓 - ' + props.title;
  return <div className='w-100'>{props.children}</div>;
};

export default Helmet;
