import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { Container, Background, AreaInput, Input, Logo, Link, LinkText, LinkTextBold, SubmitButton, SubmitText } from './styles';
import { useContext } from 'react/cjs/react.development';
import { AuthContext } from '../../context/ContextApi';



const SignUp = () => {
    const navigation = useNavigation();
    const [nome, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signUp} = useContext(AuthContext)




    function handleSignUp(){
      signUp(email,password,nome)
    }

    
    return (
        <Background>
            <Container behavior={Platform.OS === 'ios' ? 'padding' : ''}>
            <AreaInput>
                  <Input
                  placeholder="Name"
                  autoCorrect={false}
                  autoCapitalize="none"
                  value={nome}
                  onChangeText={(t) => setName(t)}
                  />
                </AreaInput>
                
                <AreaInput>
                  <Input
                  keyboardType='email-address'
                  placeholder="Email"
                  autoCorrect={false}
                  autoCapitalize="none"
                  value={email}
                  onChangeText={(t) => setEmail(t)}
                  />
                </AreaInput>
                <AreaInput>
                  <Input
                  placeholder="Senha"
                  autoCorrect={false}
                  autoCapitalize="none"
                  secureTextEntry={true}
                  value={password}
                  onChangeText={(t) => setPassword(t)}
                  />
                </AreaInput>
                
                <SubmitButton onPress={() => handleSignUp()}>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>
                <Link activeOpacity={1} onPress={() => navigation.navigate('SignIn')}>
                  <LinkText>Ja possuo cadastro!
                      <LinkTextBold>  Login</LinkTextBold></LinkText>
                </Link>
            </Container>
        </Background>
    )
}

export default SignUp;