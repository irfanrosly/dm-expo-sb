import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "./src/components/Button";
export default function App() {
	return (
		<View style={styles.container}>
			{/* <Text>
				Open up App.js to start working on your app! It can change! asd
			</Text>
			<StatusBar style="auto" /> */}
			<Button loading />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
