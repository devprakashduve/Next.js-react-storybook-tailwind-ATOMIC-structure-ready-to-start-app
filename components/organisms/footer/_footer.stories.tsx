import type { Meta, StoryObj } from "@storybook/react";
import { FooterProps } from "./_footer.interface";
import Footer from ".";

const meta: Meta<typeof Footer> = {
  title: "ORGANISMS/Footer",
  component: Footer,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Footer>;
const Template: Story = (args: FooterProps) => <Footer {...args} />;

export const Primary: Story = Template.bind({});

Primary.args = {
  title: "Footer",
};
