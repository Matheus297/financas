import Intl from 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import {format} from 'date-fns';


export const currentPrice = (value) =>{
    const formatted =  new Intl.NumberFormat('pt-BR', {
      style: 'currency', 
      currency: 'BRL', 
      useGrouping: true 
    }).format(value);
    return formatted;
  }


export const formatDate = () => {
    format(new Date(), 'dd/MM/yy')
  }

export const maskCurrency = (value) => {
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1,$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
  return value
}

export const maskCPF = (value) => {
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  return value;
}

export const maskPhone = (value) => {
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d{5})(\d{4})/, "($1)$2-$3");
  return value;
}