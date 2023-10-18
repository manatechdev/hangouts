import Button from "../components/Button";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

export default {
  title: "Components/Button",
  component: Button,
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
  iconStart: <CheckCircleIcon />,
};

export const PrimaryIconEnd = Template.bind({});
PrimaryIconEnd.args = {
  label: "Press Me",
  size: "sm",
  variant: "primary",
  iconEnd: <CheckCircleIcon />,
};

export const Ghost = Template.bind({});
Ghost.args = {
  label: "Press Me",
  size: "sm",
  variant: "ghost",
  iconStart: <CheckCircleIcon />,
};
