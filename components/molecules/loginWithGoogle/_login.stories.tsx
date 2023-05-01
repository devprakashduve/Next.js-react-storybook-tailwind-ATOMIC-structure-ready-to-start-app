import type { Meta, StoryObj } from "@storybook/react";
import { loginWithGoogleProps } from "./_login.interface";
import LoginWithGoogle from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof LoginWithGoogle> = {
  title: "MOLECOLES/Login Text",
  component: LoginWithGoogle,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LoginWithGoogle>;
const Template: Story = (args: loginWithGoogleProps) => (
  <LoginWithGoogle {...args} />
);

export const Default: Story = Template.bind({});

Default.args = {
  loginLabel: "Login",
  registertLabel: "Logout",
};
