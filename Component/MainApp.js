import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Link } from "react-router-native";
const clothes =
	"https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8&w=1000&q=80";

function MainApp(props) {
	return (
		<ScrollView style={styles.mainAppContainer}>
			<View style={styles.clothBox}>
				<Image source={{ uri: clothes }} style={styles.clothsImg}></Image>
				<View
					style={{
						alignItems: "center",
						flexDirection: "row",
						justifyContent: "space-between",
						marginTop: 7,
					}}
				>
					<View>
						<Text
							style={{
								color: "dodgerblue",
								fontSize: 24,
								fontWeight: "bold",
							}}
						>
							man clothes
						</Text>
						<Text
							style={{
								color: "tomato",
								fontSize: 24,
								fontWeight: "bold",
							}}
						>
							Price: $30
						</Text>
					</View>
					<View>
						<Link
							to="/details"
							style={{
								backgroundColor: "dodgerblue",
								paddingRight: 8,
								paddingLeft: 8,
							}}
						>
							<Text
								style={{
									color: "#fff",
									fontSize: 24,
									fontWeight: "bold",
								}}
							>
								Details
							</Text>
						</Link>
						<Text
							style={{
								backgroundColor: "tomato",
								color: "#fff",
								fontSize: 24,
								fontWeight: "bold",
								marginTop: 7,
								paddingRight: 8,
								paddingLeft: 8,
							}}
						>
							Buy now
						</Text>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	clothBox: {
		backgroundColor: "#ccc",
		borderRadius: 7,
		minHeight: 500,
		textAlign: "center",
		padding: 15,
		width: "100%",
	},
	clothsImg: {
		borderRadius: 10,
		height: 400,
		width: 300,
	},
	mainAppContainer: {
		marginTop: 35,
	},
});

export default MainApp;
