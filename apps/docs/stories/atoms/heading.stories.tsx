import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "ui";

const meta: Meta<typeof Heading> = {
  component: Heading,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Primary: Story = {
  render: (props) => (
    <Heading
      {...props}
    />
  ),
  name: "Heading",
  args: {
    children: "Hello",
    type: "h1",
  },
};
