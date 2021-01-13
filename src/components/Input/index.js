import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './style';

export const Input = (props) => {
    return (
        <TextInput {...props} style={{...styles.input, ...props.style}} /> 
    )
}