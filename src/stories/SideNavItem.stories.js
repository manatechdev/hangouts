import SideNavItem from "../components/SideNavItem";
import { iconTypeList } from "../components/Icon";

export default {
  title: "Components/SideNav/SideNavItem",
  component: SideNavItem,
  argTypes: {
    icon: {
      options: [...iconTypeList],
      control: { type: "select" },
    },
    label: {
      control: "text",
    },
    selected: "boolean",
  },
};

const Template = (args) => <SideNavItem {...args} />;

export const Default = Template.bind({});
Default.args = { label: "Item", icon: "calendarDays", selected: false };
