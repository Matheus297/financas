import { format } from 'date-fns';
import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {currentPrice} from '../../global/Globalfunctions';

import { Container, Tipo, IconView, ValorText, TipoText, Data } from './styles';

const HistoricList = ({data}) => {

  return (
    <Container>
      <Tipo>
        <IconView tipo={data.tipo}>
          <Icon name={data.tipo === 'despesa' ? 'arrow-down' : 'arrow-up'} color='#fff' size={20}/>
          <TipoText>{data.tipo}</TipoText>
        </IconView>
        <Data>{data.date}</Data>
      </Tipo>
      <ValorText>
        {currentPrice(data.valor)}
      </ValorText>
    </Container>
  )
}

export default HistoricList;