import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Link } from "react-router-native";
import ClothBox from "./ClothBox";

function MainApp(props) {
	return (
		<ScrollView style={styles.mainAppContainer}>
			<ClothBox></ClothBox>
			<ClothBox></ClothBox>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	mainAppContainer: {
		marginTop: 35,
		marginBottom: 80,
	},
});

export default MainApp;
