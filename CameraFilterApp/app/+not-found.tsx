import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
    return(
        <>
            <Stack.Screen options={{ title: 'Oops! Page Not Found!' }} />
            <View style={styles.mainContainer}>
                <Link href="/" style={styles.buttonStyle}>
                    Go Back to Home Screen!
                </Link>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#E7EFF5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyle: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#404345'
    },
});