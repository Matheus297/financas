import styled from 'styled-components';


export const Container = styled.View`
margin-bottom: 5px;
padding: 10px;
box-shadow: 2px 2px rgba(0,0,0,0.40);
background-color: rgba(0,0,0,0.02);

`;

export const Tipo = styled.View`
flex-direction: row;
justify-content: space-between;
margin-right: 10px;
`;

export const IconView = styled.View`
flex-direction: row;
background-color: ${props => props.tipo === 'despesa' ? '#c62c36' : '#049301'};
padding: 3px 8px;
border-radius: 7px;
`;

export const ValorText = styled.Text`
color: #222;
font-size: 22px;
font-weight: bold;

`;

export const TipoText = styled.Text`
color: #fff;
font-size: 16px;
font-style: italic;
text-transform: capitalize;

`;

export const Data = styled.Text`
font-size: 18px;
color: #333;
`;


