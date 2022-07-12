import React from 'react';

function SmallButton  ({disabled,children}){
    return <button className="button2" disabled={disabled}>{children}</button>;
}
  
export default SmallButton;