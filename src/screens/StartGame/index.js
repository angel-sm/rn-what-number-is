import React from 'react';
import { View, Text, Button, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from './style';

import { SelectNumber } from '../../components/SelectNumber'

export const StartGame = () => {
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new game</Text>
                <SelectNumber />
            </View>
        </TouchableWithoutFeedback>
      
    )
};
