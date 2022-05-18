import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input } from "@rneui/themed";
import PropTypes from "prop-types";

const MyInput = (props) => {
	const { placeholder, leftIcon, secureTextEntry } = props;
	const iconRenderer = () => {};

	return (
		<Input
			placeholder={placeholder}
			leftIcon={leftIcon}
			secureTextEntry={secureTextEntry}
		/>
	);
};

MyInput.propTypes = {
	placeholder: PropTypes.string,
	leftIcon: PropTypes.object,
	secureTextEntry: PropTypes.bool,
};

MyInput.defaultProps = {
	placeholder: "Placeholder goes here...",
	leftIcon: {},
	secureTextEntry: false,
};

export default MyInput;
