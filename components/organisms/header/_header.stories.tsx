import type { Meta, StoryObj } from "@storybook/react";
import { HeaderProps } from "./_header.interface";
import Header from ".";

const meta: Meta<typeof Header> = {
  title: "ORGANISMS/Header",
  component: Header,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Header>;
const Template: any = (args: HeaderProps) => <Header {...args} />;

export const Primary: Story = Template.bind({});

Primary.args = {
  title: "Header",
};
