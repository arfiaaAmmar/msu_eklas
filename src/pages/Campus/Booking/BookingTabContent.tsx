import { useState } from 'react'
import { useLocation } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import { RoomBookingRouteType } from "../../../routes/config";

type BookingTabContentProps = {
  rooms?: RoomBookingRouteType["children"];
  currentRoom: string | undefined
  setCurrentRoom: React.Dispatch<React.SetStateAction<string>>
};

const BookingTabContent = (props: BookingTabContentProps) => {

  return (
    <>
      <p className="text-neutral-50 font-semibold my-2">Select a Room</p>
      {props.rooms?.map((room) => (
        <Button
          key={room.id}
          onClick={() => props.setCurrentRoom(room.id!)}
          className={`${props.currentRoom == room.id ? 'bg-red-500' : 'bg-neutral-200'} rounded-md px-2 text-sm mx-1 text-neutral-800`}
        >
          {room.name}
        </Button>
      ))}
      <input
        type="text"
        className="bg-neutral-200 my-3 p-2 text-neutral-800 rounded-md w-10/12"
        placeholder="Short description (optional)"
      />
      <Typography
        variant="inherit"
        className="text-neutral-50 font-semibold my-1"
      >
        Select Date
      </Typography>
      <input
        type="date"
        name=""
        // onClick={(date) => }
        className="bg-neutral-200 text-neutral-800 rounded-md px-1 mx-1"
      />
      <button
        type="submit"
        // onClick={props.handleBooking}
        className="bg-red-600 text-white px-2 rounded-md mx-1"
      >
        Book Now
      </button>
    </>
  );
};

export default BookingTabContent;
