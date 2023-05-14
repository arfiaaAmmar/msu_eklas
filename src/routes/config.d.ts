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
  id?: string
  name?: string
  department?: "account" | "library" | "counselling"
  images?: string[] | Partial<Path>[]
  children?: RoomBookingRouteType[]
}

export type StatementRouteType = {
  category: string
  state: string,
  subCategory?: StatementRouteType[]
  image?: string
}