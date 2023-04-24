import type { Meta, StoryObj } from "@storybook/react";
import { CardProps } from "./_card.interface";
import Card from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Card> = {
  title: "MOLECOLES/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    title: "Card",
  },
};
