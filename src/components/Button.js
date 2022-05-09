import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import PropTypes from "prop-types";
const MyButton = (props) => {
	const { title, type, onPress, disabled, loading } = props;

	return (
		<Button
			title={title}
			type={type}
			onPress={onPress}
			disabled={disabled}
			loading={loading}
		/>
	);
};

MyButton.propTypes = {
	title: PropTypes.string,
	type: PropTypes.string,
	onPress: PropTypes.func,
	disabled: PropTypes.bool,
	loading: PropTypes.bool,
};

MyButton.defaultProps = {
	title: "Button",
	type: "solid",
	onPress: () => {
		console.log("clicked button");
	},
	disabled: false,
	loading: false,
};

export default MyButton;
