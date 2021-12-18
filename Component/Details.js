import React from "react";
import { View, Image, Text } from "react-native";
import { Link } from "react-router-native";
const clothes =
	"https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8&w=1000&q=80";

function Details(props) {
	return (
		<View style={{ flex: 1, color: "lightgray", marginTop: 30 }}>
			<View
				style={{ flexDirection: "row", justifyContent: "space-between" }}
			>
				<Link
					to="/mainapp"
					style={{
						backgroundColor: "dodgerblue",
						borderRadius: 7,
						padding: 6,
						marginBottom: 7,
						width: 80,
					}}
				>
					<Text
						style={{
							color: "#fff",
							fontWeight: "bold",
							fontSize: 20,
						}}
					>
						◄ Back
					</Text>
				</Link>
				<Link
					to="/mainapp"
					style={{
						backgroundColor: "dodgerblue",
						borderRadius: 7,
						padding: 6,
						marginBottom: 7,
						width: 110,
					}}
				>
					<Text
						style={{
							color: "#fff",
							fontWeight: "bold",
							fontSize: 20,
						}}
					>
						Buy now
					</Text>
				</Link>
			</View>
			<Image
				source={{ uri: clothes }}
				style={{ width: 350, height: 500 }}
			></Image>
		</View>
	);
}

export default Details;
