import React, {useContext} from 'react';
import { View, Text, Button } from 'react-native';
import {currentPrice} from '../../global/Globalfunctions';
import Header from '../../components/Header';
import { AuthContext } from '../../context/ContextApi';

import { Container, Background, Name, Saldo, Title, List } from './styles';
import { useState } from 'react/cjs/react.development';
import HistoricList from '../../components/HistoricList/Historic';
import firebase from '../../firebase/firebaseConfig';
import { useEffect } from 'react';
import { format } from 'date-fns';

const Home = () => {
  const {user} = useContext(AuthContext);
  const [historico, setHistorico] = useState([]);
  const [saldo, setSaldo] = useState(0);
  let uid = user.uid;


useEffect(() => {
  async function loadList(){
    await firebase.database().ref('users').child(uid).on('value', (snap) => {
      setSaldo(snap.val().saldo);
    })

    await firebase.database().ref('historico')
    .child(uid)
    .orderByChild('date').equalTo(format(new Date, 'dd/MM/yy'))
    .limitToLast(30).on('value', (snap) => {
      setHistorico([]);
      snap.forEach((childItem) => {
        let list = {
          key: childItem.key,
          tipo: childItem.val().tipo,
          valor: childItem.val().valor,
          date: childItem.val().date,
        }
        setHistorico(oldArray => [...oldArray, list])
      });
    })
  }
  loadList();
}, [])

  return (
      <Background>
        <Header />
        <Container>
          <Name>{user && user.nome}</Name>
          <Saldo>{currentPrice(saldo)}</Saldo>
        </Container>
        <Title>Ultimas movimentações</Title>
        <List
        showVerticalScrollIndicator={false}
        data={historico}
        keyExtractor={item => item.key}
        renderItem={({item}) => <HistoricList data={item} /> }
        />
      </Background>
  )
}

export default Home;