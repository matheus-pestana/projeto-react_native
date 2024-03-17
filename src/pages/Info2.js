import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function Info1({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.nick}>Cauanzin</Text>
            <Text style={styles.nome}>Cauan Pereira</Text>
            <Image
            style={styles.playerImage}
            source={{uri: 'https://owcdn.net/img/64169771ad6a9.png'}}
            />
            <Pressable style={styles.botao} onPress={() => navigation.goBack()}>
                <Text style={styles.textoBotao}>Voltar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    nick: {
        color: 'lime',
        fontWeight: 'bold',
        fontSize: 13,
    },
    nome: {
        color: 'white'
    },
    playerImage: {
        margin: 20,
        width: 200,
        height: 200,
    },
    botao: {
        width: 200,
        height: 40,
        backgroundColor: "lime",
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBotao: {
        color: "black",
        fontSize: 20,
    },
})