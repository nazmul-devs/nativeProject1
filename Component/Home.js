import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Tabs from "./Tabs";

function Home(props) {
	return (
		<View style={styles.container}>
			<Text>Hello world</Text>
			<Tabs />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#ccc",
		flex: 1,
		width: "100%",
	},
});

export default Home;
