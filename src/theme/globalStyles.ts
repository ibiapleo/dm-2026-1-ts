import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#efefefff',
    },
    text: {
        fontSize: 16,
        color: '#0f172a',
        letterSpacing: 0.5,
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        color: '#0f172a',
        marginBottom: 10,
        letterSpacing: 1,     
    },
    subtitle: {
        fontSize: 15,
        color: '#0f172a',
        letterSpacing: 0.5,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    }
});