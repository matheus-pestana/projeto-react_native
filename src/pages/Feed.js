import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Titulos() {
    return(
        <View style={styles.container}>
            <Text style={styles.containerTitle}>Títulos da LOUD VALORANT</Text>
            <Text style={styles.containerText}>VALORANT Champions 2022</Text>
            <Image
            style={styles.containerImage}
            source={{uri: 'https://s2-ge.glbimg.com/i0woD1OkfCu59Sq99E66Gj9n6A0=/0x0:1920x1281/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/U/y/4QHLoCSJ2UCA7WIxeA7g/loud-cyw-dia-16-campeao-3.jpg'}}
            />

            <Text style={styles.containerText}>VCT Americas 2023</Text>
            <Image
            style={styles.containerImage}
            source={{uri: 'https://noticias.maisesports.com.br/wp-content/uploads/2023/05/52932655872_a0084a8274_k-800x534.jpg'}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerTitle: {
        color: 'lime',
        padding: 20,
        fontWeight: 'bold',
    },
    containerText: {
        color: 'lime',
    },
    containerImage: {
        width: 300,
        height: 200,
        margin: 20,
    }
})