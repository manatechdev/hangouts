import Button from "../components/Button";
import { CheckCircleIcon, LightBulbIcon } from "@heroicons/react/24/solid";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Press Me",
  size: "md",
  variant: "primary",
  iconStart: <LightBulbIcon />,
  iconEnd: <CheckCircleIcon />,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Press Me",
  size: "md",
  variant: "secondary",
  iconStart: <LightBulbIcon />,
  iconEnd: <CheckCircleIcon />,
};

export const Ghost = Template.bind({});
Ghost.args = {
  label: "Press Me",
  size: "md",
  variant: "ghost",
  iconStart: <LightBulbIcon />,
  iconEnd: <CheckCircleIcon />,
};
