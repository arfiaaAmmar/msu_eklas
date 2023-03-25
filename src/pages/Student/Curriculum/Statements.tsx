import React from "react";
import TabNav from "../../../components/Navigation/TabNav";
import { TabNavProps } from "../../../components/Navigation/TabNav";
import { Typography } from "@mui/material";

const Statements = () => {
  return (
    <div className="w-full bg-neutral-800 rounded-md shadow-lg">
      <div className="h-32">
        <img
          src="/images/profile_pic.png"
          className="object-cover rounded-t-md h-full w-full"
          alt=""
        />
      </div>
      <div className="p-4">
        <Typography className="text-white font-semibold">
          Select Type
        </Typography>
        <ul className="flex flex-wrap gap-2">
          <li className="bg-neutral-300 rounded-md p-1 px-2">Exam Results</li>
          <li className="bg-neutral-300 rounded-md p-1 px-2">GEMS Statement</li>
          <li className="bg-neutral-300 rounded-md p-1 px-2">
            Program Structure
          </li>
          <li className="bg-neutral-300 rounded-md p-1 px-2">Internship</li>
        </ul>
      </div>
    </div>
  );
};

export default Statements;
