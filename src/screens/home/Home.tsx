import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './Style';
import { BotaoGalinha } from '../../components/Botão/BotaoInterativo';


export default function Home() {

    return (
        <View style={styles.appContainer}>
            <View>
                <BotaoGalinha></BotaoGalinha>
            </View>

            <StatusBar style="light" />
        </View>
    )
}