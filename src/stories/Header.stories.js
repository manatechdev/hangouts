import Header from "../components/Header";
import { UserCircle } from "@heroicons/react/20/solid";

export default {
  title: "Components/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
