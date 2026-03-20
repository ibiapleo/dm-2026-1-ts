import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import News from './pages/news';

type Screen = 'home' | 'news';

export default function App() {
    const [screen, setScreen] = useState<Screen>('home');

    if (screen === 'news') {
        return <News onBack={() => setScreen('home')} />;
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Atividade React Native</Text>
                <Text style={styles.subtitle}>ScrollView, tema com Switch e toggle com useState</Text>

                <Pressable style={styles.button} onPress={() => setScreen('news')}>
                    <Text style={styles.buttonText}>Abrir noticias</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f4f7fb',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        color: '#0f172a',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 15,
        color: '#475569',
        textAlign: 'center',
        marginBottom: 28,
    },
    button: {
        backgroundColor: '#2563eb',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '700',
    },
});