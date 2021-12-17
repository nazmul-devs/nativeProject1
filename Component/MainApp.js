import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import Tabs from "./Tabs";
import { NativeRouter, Route, Routes } from "react-router-native";
import Products from "./Products";

function MainApp(props) {
	return (
		<View style={styles.mainAppContainer}>
			<Text>Main App</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	mainAppContainer: {},
});

export default MainApp;
