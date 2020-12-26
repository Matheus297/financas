import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import { useContext } from 'react/cjs/react.development';
import {AuthContext} from '../context/ContextApi';

import AuthRoutes from './authRoutes';
import AuthApp from './appRoutes';


function Routes(){
    const {signed, loading} = useContext(AuthContext);
    if(loading){
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size='large' color="#333" />
                <Text>Carregando Informações</Text>
            </View>
        )
    }
    return (
       signed ? <AuthApp /> : <AuthRoutes /> 
    )
}

export default Routes;