import type { Meta, StoryObj } from "@storybook/react";
import { BannerProps } from "./_banner.interface";
import Banner from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Banner> = {
  title: "MOLECOLES/Banner",
  component: Banner,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Banner>;
const Template: any = (args: BannerProps) => <Banner {...args} />;

export const Primary: Story = Template.bind({});

Primary.args = {
  imgSrc: "Banner",
};
