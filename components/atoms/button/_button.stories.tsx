import type { Meta, StoryObj } from "@storybook/react";
import { ButtonProps } from "./_button.interface";
import Button from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "ATOM/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;
const Template: Story = (args: ButtonProps) => <Button {...args} />;

export const Primary: Story = Template.bind({});

Primary.args = {
  children: "Submit",
};
