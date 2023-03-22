import { Home, School } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SettingsIcon from "@mui/icons-material/Settings";
import { ClickAwayListener } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import * as React from "react";
import appRoutes from "../../../routes/routes";
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface Props {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({setSidebar}:Props) {
  const [openedList, setOpenList] = useState([])
  const currentPage = useLocation()

  useEffect(() => {
    
  }, [])

  return (
    <ClickAwayListener onClickAway={() => setSidebar(false)}>
      <aside className="bg-neutral-800 h-screen absolute z-10 shadow-xl top-0">
        <img
          src="/images/eklas_logo.png"
          alt=""
          className="m-auto mt-4 w-3/4"
        />
        <div className="flex py-6 gap-4 px-2 items-center">
          <Avatar src="/images/profile_pic.png" alt="" />
          <div>
            <p className="font-bold text-white text-lg">Ammar Hazim</p>
            <p className="text-white text-sm">012020070202</p>
          </div>
          <div className="grow ">
            <SettingsIcon className="text-white" />
          </div>\
        </div>
        {appRoutes.map((page) => (
          <ul>
            <li className={`flex justify-between items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${currentPage == page.path ? "bg-gray-100 dark:bg-gray-700" : " "}`} key={page.sidebarProps?.displayText}>
              <Link
                to="/mail"
                className="flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white "
              >
                {page.sidebarProps?.icon}
                <span className="ml-3">{page.sidebarProps?.displayText}</span>
              </Link>
              {page.child ? <ExpandMoreIcon className="text-white"/> : null}
            </li>
          </ul>
        ))}
      </aside>
    </ClickAwayListener>
  );
}
