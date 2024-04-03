import { Meta, StoryFn } from "@storybook/react";
import { Select } from "./select";

export default {
  title: "UI/Select",
  component: Select,
  argTypes: {
    label: { control: "text" },
    hint: { control: "text" },
    error: { control: "boolean" },
    disabled: { control: "boolean" },
    icon: { control: "text" },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => (
  <div>
    <Select {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: "Team member",
  hint: "Hint",
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: "Team member",
  hint: "",
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: "Team member",
  hint: "Hint",
  icon: "😀",
};
