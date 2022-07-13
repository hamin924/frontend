import React from 'react';

function BigButton  ({disabled,children}){
  return <button className="button" disabled={disabled}>{children}</button>;
}

export default BigButton;