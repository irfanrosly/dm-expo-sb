import { action } from "@storybook/addon-actions";
import { boolean, object, radios, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Text } from "react-native";
import Button from "../../../src/components/Button";
import CenterView from "../CenterView";

const buttonTypes = {
	solid: "solid",
	clear: "clear",
	outline: "outline",
};

storiesOf("Button", module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.add("Simple Button", () => (
		<Button
			onPress={action("clicked-text")}
			title={text("title", "Button Name")}
			disabled={boolean("disabled", false)}
			disabledStyle={object("disabledStyle", {
				borderWidth: 2,
				borderColor: "#00F",
			})}
			loading={boolean("loading", false)}
			type={radios("type", buttonTypes, "solid")}
			buttonStyle={object("buttonStyle", { width: 150 })}
		/>
	));
