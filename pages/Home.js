import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import  Header  from "./components/Header";

const Home = ({navigation}) => {
    return (
        <>
        <Header title="Cabeçalho"></Header>
        <View style = {Styles.container}>
            <Text style = {Styles.text}>Eu sou a Home</Text>
            <Button 
               title ='Vá para página 2'
               onPress = {() => {navigation.navigate('Page2')}} 
            />
        </View>
        </>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff4e6',
        alignItems: "center",
        justifyContent:"center",
    },
    text:{
        fontSize:30,
        fontWeight:"bold",
        color:"red",
    },
});

export default Home

