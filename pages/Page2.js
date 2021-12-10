import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import Header from "./components/Header";
import { buscar } from '../services/cepService';


const Page2 = ({navigation}) => {
    const [cep, setCep] = React.useState('');

    const buscarCep = async () => {
        const endereco = await buscar(cep);
        navigation.navigate('Page3',endereco);
    };
        
    return (
        <>
        <Header title="Page2"/>
        <View style = {styles.container}>
            <Text style = {styles.title}>Consulta de CEP</Text>
            <Text>Digite o CEP</Text>
            <TextInput 
               style = {styles.input}
               placeholder = "Digite o CEP que deseja pesquisar" 
               onChangeText = {(text) => setCep(text)}
            />

            <Button 
               title ='Buscar'
               onPress = {buscarCep} 
            />
            
            <Button 
               title ='Voltar'
               onPress = {() => {navigation.goBack()}} 
            />
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff4e6',
        alignItems: "center",
        justifyContent:"center",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    title:{
        fontSize:30,
        fontWeight:"bold",
        color:"red",
    },
});

export default Page2

