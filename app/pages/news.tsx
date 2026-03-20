import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NewsCard } from '@/src/components/newsCard';
import { elevatorNews } from '@/src/data/elevator-news';
import { Theme, colors } from '@/src/theme/colors';

type NewsProps = {
    onBack?: () => void;
}

export default function News({ onBack }: NewsProps) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const mode: Theme = isDarkMode ? 'dark' : 'light';
    const theme = colors[mode];
    const switchColors = theme.switch;

    const handleToggle = () => setIsDarkMode(prev => !prev);

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }] }>
            <View style={styles.header}>
                <Text style={[styles.heading, { color: theme.text }]}>Notícias</Text>
                <View style={styles.topActions}>
                    <View style={styles.switchRow}>
                        <Text style={[styles.switchLabel, { color: theme.subtitle }]}>Tema</Text>
                        <Switch
                            value={isDarkMode}
                            onValueChange={handleToggle}
                            trackColor={{ false: switchColors.track, true: switchColors.track }}
                            thumbColor={switchColors.thumb}
                        />
                    </View>
                    {onBack ? (
                        <Pressable style={styles.backButton} onPress={onBack}>
                            <Text style={styles.backButtonText}>Voltar</Text>
                        </Pressable>
                    ) : null}
                </View>
            </View>

            <ScrollView
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
                >
                {elevatorNews.map(item => (
                    <NewsCard key={item.id} item={item} mode={mode} />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 12,
    },
    heading: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 10,
    },
    topActions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
    },
    switchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 8,
    },
    switchLabel: {
        fontSize: 14,
        fontWeight: '600',
    },
    backButton: {
        backgroundColor: '#2563eb',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
    },
    backButtonText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '700',
    },
    listContent: {
        paddingHorizontal: 16,
        paddingBottom: 24,
    },
});