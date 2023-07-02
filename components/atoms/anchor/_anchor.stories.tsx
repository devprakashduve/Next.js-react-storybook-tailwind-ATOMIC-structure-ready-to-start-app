import type { Meta, StoryObj } from "@storybook/react";
import { AnchorProps } from "./_anchor.interface";
import Anchor from ".";

const meta: Meta<typeof Anchor> = {
  title: "ATOM/Anchor",
  component: Anchor,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Anchor>;
const Template: any = (args: AnchorProps) => <Anchor {...args} />;

export const Default: Story = Template.bind({});

Default.args = {
  href: "/about",
  children: "link",

  rel: "noopener",
};

export const ExternalLink: Story = Template.bind({});

ExternalLink.args = {
  href: "https://example.com",
  children: "link",
  isExternal: true,
  rel: "noopener",
};
