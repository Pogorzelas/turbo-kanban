import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "ui";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (props) => (
    <Button
      {...props}
    >
      Hello
    </Button>
  ),
  name: "Button",
  args: {
    children: "Hello",
  },
};
