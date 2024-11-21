import React from 'react';
import Input from './style';

const BasicInput = ({ref, ...rest}) => {
    return (
      <Input ref = {ref} {...rest}/>
    );
  };

export default BasicInput;