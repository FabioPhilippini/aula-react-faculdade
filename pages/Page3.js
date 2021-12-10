import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from "./components/Header";

const Page3 = ({navigation, route}) => {
    return (
        <>
        <Header title="Page3"/>
        <View style = {styles.container}>
            <Text style = {styles.title}>A busca retornou o seguinte endereço:</Text>
            <Text style = {styles.resultText}>{route.params.rua}</Text>
            <Text style = {styles.resultText}>Cidade: {route.params.cidade}</Text>
            <Text style = {styles.resultText}>Estado: {route.params.estado}</Text>
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
        backgroundColor:'#673AB7',
        alignItems: "center",
        justifyContent:"center",
    },
    title:{
        fontSize:30,
        fontWeight:"bold",
        color:"white",
    },
    resultText:{
        fontSize:20,
        fontWeight:"bold",
        color:"red",
    }
});

export default Page3