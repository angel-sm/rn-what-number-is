import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    subtitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 10,
    },
    buttonsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    numberContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    button: {
        width: 120,
    },
    input: {
        textAlign: 'center',
        width: 50,
        
    }
});
