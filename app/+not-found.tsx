import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Oops! Not Found" }} />
            <View style={Styles.container}>
                <Link href="/" style={Styles.button}>
                    Go back to Home Screen!
                </Link>
            </View>
        </>
    );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#25292e",
  },
  
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});