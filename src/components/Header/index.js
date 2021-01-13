import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { styles } from './style';

export const Header = props => (
    <View style={styles.header}>
        <Text style={styles.headetTitle}>{props.title}</Text>
    </View>
);

