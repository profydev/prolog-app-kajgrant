import { Meta, StoryFn } from "@storybook/react";
import { Input } from "./input";

export default {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Email",
  placeholder: "Enter text...",
  hint: "This is a hint text to help user.",
};

export const Filled = Template.bind({});
Filled.args = {
  ...Default.args,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  placeholder: "Enter text...",
  icon: "/icons/mail.svg",
};

export const WithErrorAndIcon = Template.bind({});
WithErrorAndIcon.args = {
  ...WithIcon.args,
  error: true,
};
