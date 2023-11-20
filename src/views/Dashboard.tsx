import EventTile from "../components/EventTile";

const mockEventList = [
  {
    title: "Dinner w/ Book Club",
    dateTime: "Nov 24, 2023 7:00pm",
  },
  {
    title: "Friendsgiving Lunch Party",
    dateTime: "Nov 27, 2023 11:00am",
  },
  {
    title: "Shopping Trip and Cafe Study Session",
    dateTime: "Dec 18, 2023 11:30am",
  },
];

function Dashboard() {
  return (
    <div className="pt-8">
      {mockEventList.map((item, i) => {
        return <EventTile key={i} event={item}></EventTile>;
      })}
    </div>
  );
}

export default Dashboard;
