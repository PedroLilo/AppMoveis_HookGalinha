import React from 'react';
import {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Pressable, Image, Alert } from 'react-native';
import { styles } from './BotaoInterativoStyle';

const galinha = require('../../../assets/GalinhaNormal.png');
const galinhaVermelha = require('../../../assets/GalinhaApanhando.png');


export function BotaoGalinha() {
    const [qtd, setQtd] = useState(0);
    const [img, setImg] = useState(galinha);
    const [tempo, setTempo] = useState(0);
    const [media, setMedia] = useState(0);


    function aumentar() {
        let qtdtemp = qtd + 1
        setQtd(qtdtemp)
    }
    
    function pin() {
        setImg(galinhaVermelha)
        console.log(qtd)
        if(qtd == 0){
            setTempo(0)
        }
    }
    

    function pout(){
        setImg(galinha)
    }

    function plongo(){
        mediaTempo()
        Alert.alert("Média de cliques por segundo", ''+media)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTempo((prevCount) => prevCount + 1);
        }, 1000);
    
        return () => clearInterval(timer);
      }, [tempo]);

    function mediaTempo() {
        console.log(qtd)
        console.log(tempo)
        setMedia(qtd / tempo)
      }
    
    function zerar() {
        setMedia(0)
        setQtd(0)
        setTempo(0)    
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={(aumentar)}
                              onPressIn={pin}
                              onPressOut={pout}
                              onLongPress={plongo}
            >
                <Image style={styles.galinhaimagem} source={img}></Image>
            </Pressable>
            
            <View style={styles.viewStats}>
                <Text  style={styles.stats}>Total de Cliques: {qtd}</Text>
                <Text  style={styles.stats}>Tempo Total: {tempo}</Text>
                <Text  style={styles.stats}>Velocidade de Cliques: {media}</Text>
            </View>

            <Pressable style={styles.zerar} onPress={(zerar)}>
                <Text style={styles.texxtozerar}>ZERAR</Text>
            </Pressable>
        </View>
    
  );
}