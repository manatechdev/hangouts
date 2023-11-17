import { ReactNode } from "react";

interface EventTile {}

function EventTile() {
  return (
    <div className="h-24 p-6 bg-hpurple-500">
      <div className="flex flex-row justify-between h-12 bg-hgreen-700">
        <div className="w-24 h-12 bg-hred-700"></div>
        <div className="w-24 h-12 bg-hred-700"></div>
      </div>
    </div>
  );
}

export default EventTile;
