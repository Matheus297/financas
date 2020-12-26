import React from 'react';
import { View } from 'react-native';
import {Picker as RNPickerSelected} from '@react-native-picker/picker';

import {PickerView} from './styles';

// import { Container } from './styles';

const Picker = ({onChange, tipo}) => {
  return (
    <PickerView>
        <RNPickerSelected 
        style={{
            width: '100%'
        }}
        
        selectedValue={tipo}
        onValueChange={(valor) => onChange(valor)}
        >   
            
            <RNPickerSelected.Item  label='Receita' value='receita' />
            <RNPickerSelected.Item  label='Despesa' value='despesa' />
        </RNPickerSelected>
    </PickerView>
  )
}

export default Picker;