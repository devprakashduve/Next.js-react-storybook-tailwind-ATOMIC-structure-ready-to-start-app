import type { Meta, StoryObj } from "@storybook/react";
import { NavBarLinksProps } from "./_navBarLinks.interface";
import NavBarLinks from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof NavBarLinks> = {
  title: "MOLECOLES/Nav Bar Link",
  component: NavBarLinks,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NavBarLinks>;
const Template: Story = (args: NavBarLinksProps) => <NavBarLinks {...args} />;

export const Primary: Story = Template.bind({});

Primary.args = {
  Label: "test",
  linkUrl: "test",
};
