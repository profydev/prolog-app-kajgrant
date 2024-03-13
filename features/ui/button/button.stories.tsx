import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { ButtonIcon } from "./button-icon";
import { ButtonColor, ButtonSize, ButtonVariant } from "./button";

export default {
  title: "UI/Button",
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: "Button CTA", disabled: false },
  argTypes: {
    color: {
      control: "select",
      options: Object.values(ButtonColor),
    },
  },
};

export const small: Story = {
  ...Default,
  args: { ...Default.args, size: ButtonSize.small },
};

export const medium: Story = {
  ...Default,
  args: { ...Default.args, size: ButtonSize.medium },
};

export const large: Story = {
  ...Default,
  args: { ...Default.args, size: ButtonSize.large },
};

export const xlarge: Story = {
  ...Default,
  args: { ...Default.args, size: ButtonSize.xlarge },
};

export const primary: Story = {
  ...Default,
  args: { ...Default.args, color: ButtonColor.primary },
};

export const secondary: Story = {
  ...Default,
  args: { ...Default.args, color: ButtonColor.secondary },
};

export const gray: Story = {
  ...Default,
  args: { ...Default.args, color: ButtonColor.gray },
};

export const empty: Story = {
  ...Default,
  args: {
    ...Default.args,
    color: ButtonColor.secondary,
    variant: ButtonVariant.empty,
  },
};

export const emptyGray: Story = {
  ...Default,
  args: {
    ...Default.args,
    color: ButtonColor.gray,
    variant: ButtonVariant.empty,
  },
};

export const error: Story = {
  ...Default,
  args: { ...Default.args, color: ButtonColor.error },
};

export const emptyError: Story = {
  ...Default,
  args: {
    ...Default.args,
    color: ButtonColor.error,
    variant: ButtonVariant.empty,
  },
};

export const iconLeading: Story = {
  ...Default,
  args: {
    ...Default.args,
    children: (
      <>
        <ButtonIcon src="/icons/message.svg" />
        Button CTA
      </>
    ),
  },
};

export const iconTrailing: Story = {
  ...Default,
  args: {
    ...Default.args,
    children: (
      <>
        Button CTA
        <ButtonIcon src="/icons/message.svg" />
      </>
    ),
  },
};

export const iconOnly: Story = {
  ...Default,
  args: {
    ...Default.args,
    children: <ButtonIcon src="/icons/message.svg" />,
    variant: ButtonVariant.iconOnly,
  },
};
