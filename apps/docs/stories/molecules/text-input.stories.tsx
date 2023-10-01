import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "ui";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  argTypes: {
    label: {
      control: {
        type: "text",
      }
    },
    helperText: {
      control: {
        type: "text",
      }
    },
    errorMessage: {
      control: {
        type: "text",
      }
    }
  },
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Base: Story = {
  render: (props) => (
    <TextInput
      {...props}
    />
  ),
  name: "TextInput",
  args: {
    label: "label",
    helperText: "helper text",
    errorMessage: "error message",
  },
};
