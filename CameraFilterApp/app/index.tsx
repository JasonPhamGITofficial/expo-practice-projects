import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textStyle}>Home screen</Text>
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
})