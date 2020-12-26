import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import React from 'react';
import InputMask  from '../../components/Input';
import { View, Text, SafeAreaView, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import { useContext, useState } from 'react/cjs/react.development';
import Header from '../../components/Header';
import Picker from '../../components/Picker';
import { AuthContext } from '../../context/ContextApi';
import firebase from '../../firebase/firebaseConfig';
import {formatDate, currentPrice, maskCurrency } from '../../global/Globalfunctions';

 import { BackgroundView, SubmitButtom, SubmitText} from './styles';


const New = () => {
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState(null);
  const navigation = useNavigation();
  const {user:usuario} = useContext(AuthContext);
  

  function handleMaskCurrency(value){
    setValor(value)
  }


  function handleSubmit(){
    Keyboard.dismiss();
    if(isNaN(parseFloat(valor)) || tipo === null){
      alert('Preencha os campos!')
      return;
    }

    Alert.alert(
      'Confirmando dados',
      `Tipo ${tipo}  Valor: ${maskCurrency(valor)}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleAdd()
        }
      ]
    )
  }

  async function handleAdd(){

    let uid = usuario.uid

    let key = await firebase.database().ref('historico').child(uid).push().key;
    await firebase.database().ref('historico').child(uid).child(key).set({
      tipo: tipo,
      valor: parseFloat(valor),
      date: format(new Date(), 'dd/MM/yy')
    })

    let user = firebase.database().ref('users').child(uid);
    await user.once('value').then(snap => {
      let saldo = parseFloat(snap.val().saldo);

      tipo === 'despesa' ? saldo -= parseFloat(valor) : saldo += parseFloat(valor);

      user.child('saldo').set(saldo)
    })
    Keyboard.dismiss();
    setValor('');
    navigation.navigate('Home');
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
       <BackgroundView>
      <Header />
      <SafeAreaView style={{alignItems: 'center'}}>
        <InputMask 
        value={valor}
        mask='currency'
        placeholder="Valor desejado"
        keyboardType="numeric"
        returnKeyType="next"
        InputMaskChange={(t) => handleMaskCurrency(t)}
        
        />
        {/* <TextInput 
        placeholder="Valor desejado"
        keyboardType="numeric"
        returnKeyType="next"
        value={valor}
        onChangeText={(t) => setValor(t)}
        onSubmitEditing={() => Keyboard.dismiss()}
        /> */}
        <Picker onChange={setTipo} tipo={tipo}/>
        <SubmitButtom onPress={() => handleSubmit()}>
          <SubmitText>Registrar</SubmitText>
        </SubmitButtom>
      </SafeAreaView>
    </BackgroundView>
    </TouchableWithoutFeedback>
  )
}

export default New;