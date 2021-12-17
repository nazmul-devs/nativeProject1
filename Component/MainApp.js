import React from "react";
import { View, Text } from "react-native";
import { Link } from "react-router-native";

function MainApp(props) {
	return (
		<View>
			<Text>hello</Text>
			<Link to={"/"}>
				<Text>Home</Text>
			</Link>
		</View>
	);
}

export default MainApp;
