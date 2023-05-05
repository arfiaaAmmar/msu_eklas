import { ReactNode } from "react";
import { Path } from "react-router-dom";

export type RouteType = {
  element: ReactNode,
  state: string,
  index?: boolean,
  path?: string | Partial<Path>,
  children?: RouteType[],
  sidebarProps?: {
    displayText: string,
    icon?: ReactNode;
  };
};

export type RoomBookingRouteType = {
  path: string | Partial<Path>
  images: string[]
  children?: RoomBookingRouteType[]
}