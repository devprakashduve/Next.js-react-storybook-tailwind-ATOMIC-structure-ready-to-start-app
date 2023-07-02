import type { Meta, StoryObj } from "@storybook/react";
import { AccordianParaProps } from "./_accordianParagraph.interface";
import AccordianParagraph from ".";

const meta: Meta<typeof AccordianParagraph> = {
  title: "ATOM/AccordianParagraph",
  component: AccordianParagraph,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AccordianParagraph>;
const Template: any = (args: AccordianParaProps) => (
  <AccordianParagraph {...args} />
);

export const Primary: Story = Template.bind({});

Primary.args = {
  title: "What is Flowbite?",
  isOpen:true,
  content: ` Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
    Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.`,
};
