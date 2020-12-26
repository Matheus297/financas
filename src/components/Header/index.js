import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather'

import { Container, Button } from './styles';

const Header = () => {
    const navigation = useNavigation()
  return (
    <Container>
          <Button onPress={() => navigation.toggleDrawer()}>
          <Icon name='menu' size={30} color='#fff'/>
      </Button>
    </Container>
  )
}
export default Header;