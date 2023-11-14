import Icon from "../components/Icon";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    icon: {
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

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: "academicCap",
};
