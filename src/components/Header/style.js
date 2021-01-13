import theme from '../../assets/theme';
import { StyleSheet, Text, View } from 'react-native';

export const styles = StyleSheet.create({
  header: {
      width: '100%',
      height: 90,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.primary,
      paddingTop: 36,
  },
  headetTitle: {
    color: '#fff',
    fontSize: 20
  }
});
