import type { Meta, StoryObj } from "@storybook/react";
import { Caption } from "ui";

const meta: Meta<typeof Caption> = {
  component: Caption,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Caption>;

export const Base: Story = {
  render: (props) => (
    <Caption
      {...props}
    />
  ),
  name: "Caption",
  args: {
    children: "Hello",
  },
};
