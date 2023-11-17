import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: {
      control: "text",
    },
    iconStart: {
      options: [
        "academicCap",
        "adjustmentsHorizontal",
        "adjustmentsVertical",
        "calendarDays",
        "cog",
        "informationCircle",
        "pencil",
        "userCircle",
      ],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Press Me",
  size: "sm",
  variant: "primary",
};

export const PrimaryIconStart = Template.bind({});
PrimaryIconStart.args = {
  label: "Press Me",
  size: "sm",
  variant: "primary",
  iconStart: "informationCircle",
};

export const PrimaryIconEnd = Template.bind({});
PrimaryIconEnd.args = {
  label: "Press Me",
  size: "sm",
  variant: "primary",
  iconEnd: "informationCircle",
};

export const Ghost = Template.bind({});
Ghost.args = {
  label: "Press Me",
  size: "sm",
  variant: "ghost",
  iconStart: "informationCircle",
};
