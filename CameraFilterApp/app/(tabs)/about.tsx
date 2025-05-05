import { Text, View, StyleSheet } from 'react-native';

export default function AboutScreen() {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.textStyle}>About Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#BBD0E1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        color: '#2F3439',
    },
})