import EventTile from "../components/EventTile";
import { iconTypeList } from "../components/Icon";

export default {
  title: "Components/EventTile",
  component: EventTile,
};

const Template = (args) => <EventTile {...args} />;

export const Default = Template.bind({});
Default.args = {};
