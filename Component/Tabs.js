import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "react-router-native";
function Tabs(props) {
	return (
		<View style={styles.navLink}>
			<Link to={"/mainapp"}>
				<Text style={styles.navItem}>H</Text>
			</Link>
			<Link to={"/"}>
				<Text style={styles.navItem}>S</Text>
			</Link>
			<Link to={"/catagory"}>
				<Text style={styles.navItem}>C</Text>
			</Link>
			<Link to={"/login"}>
				<Text style={styles.navItem}>L</Text>
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	navItem: {
		backgroundColor: "#fff",
		borderRadius: 10,
		height: 60,
		paddingTop: 20,
		textAlign: "center",
		width: 65,
	},
	navLink: {
		alignItems: "center",
		backgroundColor: "#EAECEE",
		borderRadius: 12,
		bottom: 10,
		flexDirection: "row",
		height: 65,
		justifyContent: "space-evenly",
		left: 12,
		position: "absolute",
		right: 12,
	},
});

export default Tabs;
