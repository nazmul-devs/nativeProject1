import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Tabs from "./Tabs";

function Home(props) {
	return (
		<View style={styles.container}>
			<Text style={styles.mainText}>StyleHut</Text>
			<Image
				style={styles.bannerImg}
				source={require("../assets/images/home-banner.png")}
			></Image>
			<Text style={styles.startText}>Get start ➨</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	bannerImg: {
		width: "100%",
	},
	container: {
		backgroundColor: "#ccc",
		flex: 1,
		width: "100%",
		justifyContent: "space-evenly",
	},
	mainText: {
		color: "#212F3C",
		fontSize: 32,
		fontWeight: "bold",
		marginTop: 30,
		textAlign: "center",
	},
	startText: {
		backgroundColor: "dodgerblue",
		fontSize: 30,
		fontWeight: "bold",
		padding: 10,
		color: "#fff",
		textAlign: "center",
		margin: 10,
		borderRadius: 10,
	},
});

export default Home;
