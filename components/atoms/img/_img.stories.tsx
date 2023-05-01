import type { Meta, StoryObj } from "@storybook/react";
import { ImgProps } from "./_img.interface";
import Img from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Img> = {
  title: "ATOM/Img",
  component: Img,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Img>;
const Template: Story = (args: ImgProps) => <Img {...args} />;

export const Primary: Story = Template.bind({});

Primary.args = {
  src: "/images/card-top.jpg",
  alt: "image",
};
