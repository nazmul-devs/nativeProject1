import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Link } from "react-router-native";

function Home(props) {
	return (
		<View style={styles.container}>
			<Text style={styles.mainText}>StyleHut</Text>
			<Image
				style={styles.bannerImg}
				source={require("../assets/images/home-banner.png")}
			></Image>

			<View style={styles.startBtn}>
				<Link to={"/mainapp"}>
					<Text style={styles.startText}>Get start ➨</Text>
				</Link>
			</View>
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
	startBtn: {
		bottom: 120,
		left: "20%",
		position: "absolute",
		width: "60%",
	},
	startText: {
		backgroundColor: "dodgerblue",
		borderRadius: 10,
		color: "#fff",
		fontSize: 30,
		fontWeight: "bold",
		padding: 10,
		textAlign: "center",
	},
});

export default Home;
