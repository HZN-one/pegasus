import React from "react";
import { ComponentStory } from "@storybook/react";
<<<<<<< HEAD
import { FAButton } from "../../../../src/Components/Atoms/FAButton";
import { IButton } from "../../../../src/Components/Atoms/FAButton/Button.interface";
=======
import { FAButton } from "Components/Atoms/FAButton";
import { IButton } from "Components/Atoms/FAButton/Button.interface";
>>>>>>> 08c6840e4d6daf1c9f757a0749641a10ed4ef3e6

const story = {
  title: "Button",
  component: FAButton,
  argTypes: {
    children: { control: "text" },
  },
  args: {
    children: "Naruto!",
  },
};

export default story;

const Template: ComponentStory<typeof FAButton> = (props: IButton) => (
  <FAButton {...props} />
);

export const Default = (props: IButton) => (
  <>
    <FAButton {...props}>{props.children}</FAButton>
  </>
);

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
};
