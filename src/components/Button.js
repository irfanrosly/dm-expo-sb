import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import PropTypes from "prop-types";
const MyButton = (props) => {
	const {
		title,
		type,
		onPress,
		disabled,
		loading,
		buttonStyle,
		disabledStyle,
	} = props;

	return (
		<Button
			title={title}
			type={type}
			onPress={onPress}
			disabled={disabled}
			loading={loading}
			buttonStyle={buttonStyle}
			disabledStyle={disabledStyle}
		/>
	);
};

MyButton.propTypes = {
	title: PropTypes.string,
	type: PropTypes.string,
	onPress: PropTypes.func,
	disabled: PropTypes.bool,
	disabledStyle: PropTypes.object,
	loading: PropTypes.bool,
	buttonStyle: PropTypes.object,
};

MyButton.defaultProps = {
	title: "Button",
	type: "solid",
	onPress: () => {
		console.log("clicked button");
	},
	disabled: false,
	disabledStyle: {},
	loading: false,
	buttonStyle: {},
};

export default MyButton;
