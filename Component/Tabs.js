import React from "react";
import { View, Text, StyleSheet } from "react-native";
function Tabs(props) {
	return (
		<View style={styles.navLink}>
			<Text style={styles.navItem}>H</Text>
			<Text style={styles.navItem}>S</Text>
			<Text style={styles.navItem}>C</Text>
			<Text style={styles.navItem}>L</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	navItem: {
		paddingTop: 20,
		backgroundColor: "#fff",
		height: 60,
		width: 65,
		textAlign: "center",
		borderRadius: 10,
	},
	navLink: {
		backgroundColor: "dodgerblue",
		height: 65,
		position: "absolute",
		borderRadius: 12,
		bottom: 10,
		left: 12,
		right: 12,
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
});

export default Tabs;
