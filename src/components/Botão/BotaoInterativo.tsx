import React from 'react';
import {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './BotaoInterativoStyle';

const galinha = require('../../../assets/GalinhaNormal.png');
const galinhaVermelha = require('../../../assets/GalinhaApanhando.png');


export function BotaoGalinha() {
    const [qtd, setQtd] = useState(0);
    const [img, setImg] = useState(galinha);


    function aumentar() {
        let qtdtemp = qtd + 1
        setQtd(qtdtemp)
    }
    
    function pin() {
        setImg(galinhaVermelha)
    }

    function pout(){
        setImg(galinha)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={(aumentar)}
                              onPressIn={pin}
                              onPressOut={pout}
            >
                <Image source={img}></Image>
            </TouchableOpacity>
            <Text>Total de Cliques: {qtd}</Text>
        </View>
    
  );
}