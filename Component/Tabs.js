import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Link } from "react-router-native";
function Tabs(props) {
	return (
		<View style={styles.navLink}>
			<Link to={"/mainapp"}>
				<Image
					style={styles.icon}
					source={require("../assets/Icons/home.png")}
				></Image>
			</Link>
			<Link to={"/"}>
				<Image
					style={styles.icon}
					source={require("../assets/Icons/search.png")}
				></Image>
			</Link>
			<Link to={"/catagory"}>
				<Image
					style={styles.icon}
					source={require("../assets/Icons/catagory.png")}
				></Image>
			</Link>
			<Link to={"/login"}>
				<Image
					style={styles.icon}
					source={require("../assets/Icons/login.png")}
				></Image>
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	icon: {
		backgroundColor: "white",
		borderRadius: 10,
		height: 45,
		width: 45,
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
