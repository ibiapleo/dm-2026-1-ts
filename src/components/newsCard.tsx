import { StyleSheet, Text, View } from 'react-native';

import { Theme, colors } from '../theme/colors';
import { NewsItem } from '../types/news';

type NewsCardProps = {
    item: NewsItem;
    mode: Theme;
}

export function NewsCard({ item, mode }: NewsCardProps) {
    const theme = colors[mode];

    return (
        <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <Text style={[styles.title, { color: theme.text }]}>{item.title}</Text>
            <Text style={[styles.summary, { color: theme.text }]}>{item.summary}</Text>
            <Text style={[styles.date, { color: theme.text }]}>{item.date}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 14,
        marginBottom: 12
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 6
    },
    summary: {
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 10,
    },
    date: {
        fontSize: 12,
        fontWeight: '600',
    },
});