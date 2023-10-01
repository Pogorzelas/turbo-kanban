import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "ui";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
    isDisabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (props) => (
    <Button
      {...props}
    />
  ),
  name: "Button",
  args: {
    children: "Hello",
  },
};
