import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../../context/ContextApi';

import { Container, Name, NewLink, NewText, Logout, LogoutText } from './styles';

import Header from '../../components/Header';


const Profile = () => {
    const navigation = useNavigation();
    const {user, signOut} = useContext(AuthContext)
    return (
       <Container behavior={Platform.OS === 'ios' ? 'padding' : ''}>
        <Header />
         <Name>{user && user.nome}</Name>
         <NewLink onPress={() => navigation.navigate('Registrar')}>
             <NewText>Registrar gastos</NewText>
         </NewLink>
         <Logout onPress={() => signOut()}>
             <LogoutText>Sair</LogoutText>
         </Logout>
       </Container>
      )
}

export default Profile;