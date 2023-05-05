import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SettingsIcon from "@mui/icons-material/Settings";
import { ClickAwayListener } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import * as React from "react";
import appRoutes from "../../../routes/routes";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

interface SidebarProps {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ setSidebar }: SidebarProps) {
  const [activeSidebarChildren, setActiveSidebarChildren] = useState(true);
  const currentPage = useLocation();

  return (
    <ClickAwayListener onClickAway={() => setSidebar(false)}>
      <aside className="bg-neutral-800 pt-2 pb-8 block my-auto absolute z-10 shadow-lg rounded-r-2xl">
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
          </div>
          \
        </div>
        {appRoutes.map((page, index) => (
          <div>
            <div
              className={`flex justify-between items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                currentPage.pathname == page.path
                  ? "bg-gray-100 dark:bg-gray-700"
                  : " "
              }`}
              key={page.sidebarProps?.displayText}
            >
              <Link
                key={index}
                to={page.path!}
                className="flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white "
                // onClick={() => setActiveSidebarChildren(index)}
              >
                {page.sidebarProps?.icon}
                <span className="ml-3">{page.sidebarProps?.displayText}</span>
              </Link>
              {page.children ? <ExpandMoreIcon className="text-white" /> : null}
            </div>
            {page.children?.map((child, index) => (
              <Link
                key={index}
                to={child.path!}
                className={`indent-10 text-white my-2 block ${
                  currentPage.pathname == child.path
                    ? "bg-gray-100 dark:bg-gray-700"
                    : " "
                }`}
              >
                {child.sidebarProps?.displayText}
              </Link>
            ))}
          </div>
        ))}
      </aside>
    </ClickAwayListener>
  );
}
