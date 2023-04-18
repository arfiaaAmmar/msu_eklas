import { CheckBox } from "@mui/icons-material";
import React from "react";

type TaskProps = {
  id: number,
  title: string,
  description?: string, 
  date?: Date,
  onDelete: Function
}

const Task = ({id, title, description, date, onDelete}:TaskProps) => {
  return (
    <li key={id} className="mx-3 my-2">
      <div className="flex justify-end w-full p-2 bg-neutral-200 rounded-md">
        <div className="w-3/4 flex gap-2 ">
          <div className="bg-red-600 w-1 rounded-sm"></div>
          <div className="flex flex-col gap-2">
            <p className="text-lg leading-5 font-semibold">{title}</p>
            <p className="text-xs">{description}</p>
            <p className="bg-red-500 text-[0.6rem] p-1 rounded-lg">
              Assignment
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-end w-1/4 text-right">
          <CheckBox onClick={() => onDelete(id)} />
          {date == null ? null : (
            <p className="text-[0.6rem] font-bold text-neutral-500 mt-2">
              {date.getDate()}/{date.getMonth() + 1}/
              {date.getFullYear()}
            </p>
          )}
        </div>
      </div>
    </li>
  );
};


export default Task