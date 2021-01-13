import React, { useState } from 'react';
import {
    Text,
    Button,
    View,
} from 'react-native';

import theme from '../../assets/theme';
import { Input } from '../Input';
import { styles } from './style';

export const SelectNumber = () => {

    const [number, setNumber ] = useState('');

    const inputValueHandler = (value) => {
        setNumber(value.replace(/[^0-9]/g, ''));
    }

    const resetInputHandler = () => {
        setNumber('');
    }

    return (
        <View style={styles.numberContainer}>
            <Text style={styles.subtitle}>Select a Number</Text>
            <Input
            blurOnSubmit
            autoCapitalize='none'
            autoCorrector={false}
            keyboardType='number-pad'
            maxLength={2}
            onChangeText={inputValueHandler}
            value={number}
            style={styles.input} />
            <View style={styles.buttonsContainer}>
                <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={theme.colors.alert} /></View>
                <View style={styles.button}><Button title="Confirm" onPress={() => { }} color={theme.colors.primary} /></View>
            </View>
        </View>
    )
}