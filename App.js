import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import Catagory from "./Component/Catagory";
import Details from "./Component/Details";
import Home from "./Component/Home";
import Login from "./Component/Login";
import MainApp from "./Component/MainApp";
import Products from "./Component/Products";
import Tabs from "./Component/Tabs";

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
					<Route exact path="/products" element={<Products />}></Route>
					<Route exact path="/catagory" element={<Catagory />}></Route>
					<Route exact path="/login" element={<Login></Login>}></Route>
					<Route
						exact
						path="/details"
						element={<Details></Details>}
					></Route>
				</Routes>
				<Tabs />
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
