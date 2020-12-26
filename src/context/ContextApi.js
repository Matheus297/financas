import AsyncStorage from '@react-native-community/async-storage';
import React, {useState, createContext} from 'react';
import { useEffect } from 'react';
import firebase from '../firebase/firebaseConfig';


export const AuthContext = createContext({});

function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('Auth/user')
            if(storageUser){
                setUser(JSON.parse(storageUser))
                setLoading(false)
            }
            setLoading(false)
        }
        loadStorage();
    })



    async function signIn(email,password){
        await firebase.auth().signInWithEmailAndPassword(email,password)
        .then(async (value) => {
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).once('value')
            .then(snap => {
               let data = {
                   uid: uid,
                   nome: snap.val().nome,
                   email: value.user.email
               }

               setUser(data)
               storageUser(data)
            })
        })
        .catch((error) => {
            alert(error.code)
        })
    }

    async function signUp(email,password,nome){
        await firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(async (value) => {
                let uid = value.user.uid
                await firebase.database().ref('users').child(uid).set({
                    saldo: 0,
                    nome: nome
                })
                .then(() => {
                    let data = {
                        uid: uid,
                        nome: nome,
                        email: value.user.email
                    }
                    setUser(data)
                    storageUser(data)
                })
            })
    }

    async function signOut(){
        await firebase.auth().signOut();
        await AsyncStorage.clear()
        .then(() => {
            setUser(null)
        })
    }

    async function storageUser(data){
        await AsyncStorage.setItem('Auth/user', JSON.stringify(data))
    }


    return (
        <AuthContext.Provider value={{ signed: !!user, user, signUp, signIn, signOut , loading }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;