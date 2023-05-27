import { useState, createContext } from "react";
import { BookingType } from "../pages/Campus/Booking/Booking";

interface BookingContextProps {
  bookings: BookingType[];
  bookRoom: (booking: BookingType) => void;
}

//Create the context
export const BookingContext = createContext<BookingContextProps>({
  bookings: [],
  bookRoom: () => {},
});

interface BookingProviderProps {
  children: React.ReactNode;
}

//Booking Context component
export const BookingContextProvider = (children: BookingProviderProps) => {
  const [bookings, setBookings] = useState<BookingType[]>([]);

  // Function to book a room
  const bookRoom = (booking: BookingType) => {
    const newBooking: BookingType = {
      id: ,
      ...booking,
    };

};  
