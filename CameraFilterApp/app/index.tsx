import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textStyle}>Home screen</Text>
      <Link href="/about" style={styles.buttonStyle}>
        Go to About Screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#171C2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#E1E0DC',
  },
  buttonStyle: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#E1E0DC',
  },
})