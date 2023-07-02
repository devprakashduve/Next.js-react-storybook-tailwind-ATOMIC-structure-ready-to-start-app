import type { Meta, StoryObj } from "@storybook/react";
import { LoginProps } from "./_login.interface";
import Login from ".";

const meta: Meta<typeof Login> = {
  title: "ORGANISMS/Login",
  component: Login,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Login>;
const Template: any = (args: any) => <Login {...args} />;

export const Primary: Story = Template.bind({});

Primary.args = {
  label: "Login",
};
