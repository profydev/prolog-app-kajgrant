import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Checkbox, CheckboxSize } from "./checkbox";

export default {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = ({ size, label, ...props }) => (
  <div>
    <Checkbox size={size} label={label} {...props}></Checkbox>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: CheckboxSize.small,
  label: "Small Checkbox",
};

export const Medium = Template.bind({});
Medium.args = {
  size: CheckboxSize.medium,
  label: "Medium Checkbox",
};

export const Hover = Template.bind({});
Hover.args = {
  size: CheckboxSize.medium,
  label: "Hover Checkbox",
};

export const Focused = Template.bind({});
Focused.args = {
  size: CheckboxSize.medium,
  label: "Focused Checkbox",
  autoFocus: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: CheckboxSize.medium,
  label: "Disabled Checkbox",
  checked: true,
  disabled: true,
};

export const DisabledIndeterminate = Template.bind({});
DisabledIndeterminate.args = {
  size: CheckboxSize.medium,
  label: "Disabled Indeterminate Checkbox",
  indeterminate: true,
  disabled: true,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  size: CheckboxSize.medium,
  label: "Indeterminate Checkbox",
  indeterminate: true,
};

Default.parameters = {
  viewMode: "docs",
};
