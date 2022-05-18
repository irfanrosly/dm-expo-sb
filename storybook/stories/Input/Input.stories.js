import { action } from "@storybook/addon-actions";
import { boolean, object, radios, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import Input from "../../../src/components/TextInput";
import { Icon } from "@rneui/themed";
import CenterView from "../CenterView";

storiesOf("TextInput", module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.add("Simple Input", () => (
		<Input
			placeholder={text("placeholder", "I am Placeholder")}
			secureTextEntry={boolean("secureTextEntry", true)}
		/>
	))
	.add("Input with Left Icon", () => (
		<Input
			placeholder={text("placeholder", "I have Left Icon")}
			leftIcon={{ type: "font-awesome", name: "comment" }}
		/>
	))
	.add("Custom Left Icon", () => (
		<Input
			placeholder={text("placeholder", "Custom Left Icon")}
			leftIcon={<Icon name="sc-telegram" type="evilicon" color="#517fa4" />}
		/>
	));
