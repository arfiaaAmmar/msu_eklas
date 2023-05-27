import { CheckBox } from "@mui/icons-material";
import { useState } from "react";

type TaskProps = {
  id: number,
  title: string,
  description?: string, 
  date?: Date,
  flag?: string,  
  onDelete?: any
}

const Task = ({title, description, date, flag, onDelete}:TaskProps) => {

  let flagColor = 'bg-red-500'
  if(flag == 'msu'){
    flagColor = 'bg-red-500'
  }
  if(flag == 'personal'){
    flagColor = 'bg-green-500'
  }
  if(flag == 'inbox'){
    flagColor = 'bg-neutral-400'
  }

  return (
    <li className="mx-3 my-2">
      <div className="flex justify-end w-full p-2 bg-neutral-200 rounded-md">
        <div className="w-3/4 flex gap-2 ">
          <div className="bg-red-600 w-1 rounded-sm"></div>
          <div className="flex flex-col gap-2">
            <p className="text-lg leading-5 font-semibold">{title}</p>
          <p className="text-xs">{description}</p>
            <p className={` ${flagColor} text-[0.6rem] p-1 w-max rounded-lg`}>
              {flag?.toLocaleUpperCase()}
            </p>
          </div>
        </div>
        <div className="flex flex-col w-1/4 text-right">
          <CheckBox onClick={onDelete} className="ml-auto my-auto" />
          {date == null ? null : (
            <p className="text-[0.6rem] font-bold text-neutral-500 mt-auto ">
              {date?.getDate()}/{date?.getMonth() + 1}/
              {date?.getFullYear()}
            </p>
          )}
        </div>
      </div>
    </li>
  );
};


export default Task