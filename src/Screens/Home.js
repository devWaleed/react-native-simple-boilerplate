import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';

import { connect } from "react-redux";
import { sayHelloWorld } from "../Stores/Actions";

import { FastImage } from "../Components";

import { PostsService } from "../Services";

class Home extends Component {

	async componentDidMount() {

		this.props.sayHelloWorld('React Native Simple Boilerplate');

		// var response = await PostsService.getPosts();

		// console.log('response', response.data.length);

		// response = await PostsService.getPost(1);

		// console.log('response 2', response.data);

	}

	getAppIntro() {
		return (
			<View>
				<Text style={styles.heading}>
					{this.props.text}
				</Text>
				<Text style={styles.paragraph}>
					A simple react native project with only essential things that are required to build a great app
				</Text>
			</View>
		);
	}

	getFastImageDemo() {
		return (
			<View>
				<FastImage path={'https://wallpapercave.com/wp/wZYPtOK.jpg'} imageStyle={styles.sampleImage} />
				<Text style={styles.paragraph}>
					A <Text style={{ fontWeight: 'bold', }}>FastImage</Text> component that caches image
				</Text>
			</View>
		);
	}

	render() {
		return (
			<View>

				{this.getAppIntro()}

				{this.getFastImageDemo()}

			</View>
		);
	}
}

const mapStateToProps = ({ HelloWorldReducer }) => {
	return {
		text: HelloWorldReducer?.text,
	};
};

const mapDispatchToProps = (dispatch) => ({
	sayHelloWorld: (payload) => dispatch(sayHelloWorld(payload)),
});

const styles = StyleSheet.create({
	heading: {
		fontSize: 20,
		paddingTop: 30,
		paddingBottom: 10,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	paragraph: {
		padding: 15,
		textAlign: 'center'
	},
	sampleImage: {
		width: 100,
		height: 100,
		marginTop: 50,
		borderRadius: 10,
		alignSelf: 'center'
	}
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);