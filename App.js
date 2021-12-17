import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link, NativeRouter, Route, Routes } from "react-router-native";
import Home from "./Component/Home";
import MainApp from "./Component/MainApp";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<NativeRouter>
				<Routes>
					<Route exact path="/" element={<Home></Home>}></Route>
					<Route
						exact
						path="/mainapp"
						element={<MainApp></MainApp>}
					></Route>
				</Routes>
			</NativeRouter>
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
