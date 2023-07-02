import type { Meta, StoryObj } from "@storybook/react";
import { AccordianProps } from "./_accordian.interface";
import Accordian from ".";

const meta: Meta<typeof Accordian> = {
  title: "MOLECOLES/Accordian",
  component: Accordian,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Accordian>;
const Template: any = (args: AccordianProps) => <Accordian {...args} />;

export const Default: Story = Template.bind({});

Default.args = {
  accordianData: [
    {
      title: "1111What is Flowbite?",
      content: ` Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
    Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.`,
    },
    {
      title: "222What is Flowbite?",
      content: ` Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
    Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.`,
    },
    {
      title: "333What is Flowbite?",
      content: ` Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
    Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.`,
    },
  ],
};
