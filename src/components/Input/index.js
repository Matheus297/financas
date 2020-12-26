import React from 'react';
import { useState } from 'react/cjs/react.development';
import { maskCPF, maskCurrency, maskPhone } from '../../global/Globalfunctions';

 import { Input } from './styles';

const InputMask = ({mask = 'currency' || 'cpf' || 'phone', InputMaskChange, ...rest}) => {
    function handleChange(text){
       if(mask === 'cpf'){
        const value = maskCPF(text)
        InputMaskChange(value);
       }else if(mask === 'currency'){
        const value = maskCurrency(text)
        InputMaskChange(value);
       }else if (mask === 'phone'){
        const value = maskPhone(text)
        InputMaskChange(value);
       }
    }
  return (
      <>
        <Input
            maxLength={
              mask === 'cpf' ? 14 : null || 
              mask === 'currency' ? 30 : null ||
              mask === 'phone' ? 14 : null
            }
            onChangeText={(t) => handleChange(t)}
            {...rest}
        />
      </>
  )
}

export default InputMask;