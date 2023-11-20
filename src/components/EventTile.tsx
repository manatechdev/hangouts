import { ReactNode } from "react";
import Icon from "./Icon";

interface EventTileProps {
  event?: any;
}

function EventTile({ event }: EventTileProps) {
  let { title, dateTime } = event;
  return (
    <div className="h-24 p-6 mb-4 rounded-md border-[0.5px] bg-hyellow-50 border-hgray-200">
      <div className="flex flex-row justify-between h-12">
        <div className="flex flex-row h-12">
          <div className="w-12 h-12 rounded bg-hgray-400">
            <img></img>
          </div>
          <div className="flex flex-col ml-4">
            <div className="h-6 font-semibold text-left">{title}</div>
            <div className="h-6 text-left">{dateTime}</div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end h-12">
          <div className="flex flex-row h-8">
            <div className="w-8 h-8 border-[5px] rounded-full border-hgray-200 bg-hgray-400"></div>
            <div className="w-8 h-8 -translate-x-2 border-[5px] rounded-full border-hgray-200 bg-hgray-400"></div>
            <div className="w-8 h-8 -translate-x-4 border-[5px] rounded-full border-hgray-200 bg-hgray-400"></div>
            <div className="w-8 h-8 -translate-x-6 border-[5px] rounded-full border-hgray-200 bg-hgray-400"></div>
          </div>
          <div className="flex flex-row w-8 h-8">
            <Icon
              type="informationCircle"
              customStyle="w-7 h-7 text-hgray-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventTile;
