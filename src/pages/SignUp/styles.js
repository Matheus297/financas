import styled from 'styled-components';


export const Background = styled.View`
flex: 1;
background-color: #131313;
`;

export const Container = styled.KeyboardAvoidingView`
flex:1;
align-items: center;
justify-content: center;
`;

export const Logo = styled.Image`
margin-bottom: 25px;
`;

export const AreaInput = styled.View`
flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(255,255,255,0.20)'
})`
background: rgba(0,0,0,0.20);
width: 90%;
font-size: 17px;
color: #fff;
margin-bottom: 15px;
padding: 15px;
border-radius: 10px;
border: 1px solid rgba(255,255,255,0.06);
`;

export const Link = styled.TouchableOpacity``;

export const LinkText = styled.Text`
color: #fff;
margin-top: 10px;
font-size: 15px;
margin-right: 10px;
`;

export const LinkTextBold = styled.Text`
font-weight: bold;
`;

export const SubmitButton = styled.TouchableOpacity`
margin-top: 10px;
width: 90%;
padding: 15px;
border-radius: 10px;
justify-content: center;
align-items: center;
background-color: rgb(0,120,0);
`;

export const SubmitText = styled.Text`
color: #fff;
font-size: 17px;
`;