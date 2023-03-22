import { ReactNode } from "react";
import { Path } from "react-router-dom";

export type RouteType = {
  element: ReactNode,
  state: string,
  index?: boolean,
  path?: string | Partial<Path>,
  child?: RouteType[],
  sidebarProps?: {
    displayText: string,
    icon?: ReactNode;
  };
};
