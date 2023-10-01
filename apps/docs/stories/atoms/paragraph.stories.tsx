import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph } from "ui";

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Primary: Story = {
  render: (props) => (
    <Paragraph
      {...props}
    />
  ),
  name: "Paragraph",
  args: {
    children: "Hello",
  },
};
