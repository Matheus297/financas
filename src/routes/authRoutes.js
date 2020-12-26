import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';


const Auth = createStackNavigator();


function AuthRoutes(){
    return (
        <Auth.Navigator>
            <Auth.Screen 
            name='SignIn' 
            component={SignIn} 
            options={{headerShown: false}}
            />
             <Auth.Screen 
            name='SignUp' 
            component={SignUp} 
            options={{
                headerStyle:{
                    backgroundColor: '#131313',
                    borderBottomColor: '#00b94a',
                    borderBottomWidth: 1,
                },
                headerTintColor: '#fff',
                headerTitle: 'Voltar'
            }}
            />
        </Auth.Navigator>
    )
}


export default AuthRoutes;
