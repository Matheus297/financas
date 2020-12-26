import React, {useState} from 'react';
import { Platform, Pressable, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Container, Background, AreaInput, Input, Logo, Link, LinkText, LinkTextBold, SubmitButton, SubmitText } from './styles';
import {AuthContext} from '../../context/ContextApi';
import { useContext } from 'react/cjs/react.development';

const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {user, signIn} = useContext(AuthContext);

  function handleSubmit(){
    signIn(email,password);
  }
  return (
      <Background>
          <Container behavior={Platform.OS === 'ios' ? 'padding' : ''}>
              <Logo source={require('../../assets/Logo.png')} />
              <AreaInput>
                <Input
                keyboardType='email-address'
                placeholder="Email"
                autoCorrect={false}
                value={email}
                onChangeText={(t) => setEmail(t)}
                autoCapitalize="none"
                />
              </AreaInput>
              <AreaInput>
                <Input
                placeholder="Senha"
                autoCorrect={false}
                value={password}
                onChangeText={(t) => setPassword(t)}
                autoCapitalize="none"
                secureTextEntry={true}
                />
              </AreaInput>
              <SubmitButton onPress={() => handleSubmit()}>
                  <SubmitText>Acessar</SubmitText>
              </SubmitButton>
              <Link activeOpacity={1} onPress={() => navigation.navigate('SignUp')}>
                <LinkText>Ainda não possue Cadastro?
                    <LinkTextBold>  Cadastra-se</LinkTextBold></LinkText>
              </Link>
          </Container>
      </Background>
  )
}

export default SignIn;