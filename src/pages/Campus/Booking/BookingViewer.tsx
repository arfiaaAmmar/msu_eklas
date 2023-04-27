import { Typography } from "@mui/material";
import { useState } from "react";
import Carousel from "react-material-ui-carousel";


export type Booking = {
  id: number,
  department: 'account' | 'library' | 'counselling',
  selectedRoom: number;
  description: string;
  bookingDate: Date;
};

export const BookingViewer = ({ rooms }: { rooms: number }) => {
  const [booking, setBooking] = useState<Booking>({
    id: 0,
    department: 'account',
    selectedRoom: 0,
    description: '',
    bookingDate: new Date()
  },
)
const [bookings, setBookings] = useState<Booking[]>([
  {
    id: 1,
    department: 'account',
    selectedRoom: 1,
    description: '',
    bookingDate: new Date(2020, 10, 12)
  },
  {
    id: 2,
    department: 'account',
    selectedRoom: 2,
    description: 'For group study to prepare for tomorrow exam',
    bookingDate: new Date(2021, 10, 12)
  },
]);

const AddBooking = () => {
  const newId = bookings.length ? bookings[bookings.length + 1].id + 1 : 1;
  if (booking?.bookingDate == new Date) return;
  setBookings([
    ...bookings, {
      id: newId,
      department: booking?.department,
      selectedRoom: booking?.selectedRoom,
      description: booking?.description,
      bookingDate: new Date(),
    }
  ])
 
  setBooking({
    id: 0,
      department: 'account',
      selectedRoom: 0,
      description: booking?.description,
      bookingDate: new Date(),
  })
  // setbookings()
  // setTitle("");
  // setDescription("");
  setOpenAddbooking(!open);
};

const handleClickAway = () => {
  // if (booking.title != null) {
  //   sessionStorage.setItem("title", booking.title);
  // }
  // if (booking.description != null) {
  //   sessionStorage.setItem("description", booking.description);
  // }
  // if (booking.date != null) {
  //   sessionStorage.setItem("date", booking.date.toString());
  // }
  // if (booking.flag != null) {
  //   sessionStorage.setItem("flag", booking.flag);
  // }

  setOpenAddbooking(false);
};

const removebooking = (id: number) => {
  setbookings(bookings.filter(booking => booking.id !== id));
};

useEffect(() => {
  // setTitle(sessionStorage.getItem("title")?.toString());
  // setDescription(sessionStorage.getItem("description")?.toString());

  //get from server 
}, []);

  return (
    <div className="bg-neutral-800 text-center pt-0 rounded-lg py-4 shadow-md">
      <Carousel animation="slide" swipe >
        {exampleImages.map((image, index) => (
          <div
            key={index}
            className="flex flex-row bg-red-900 rounded-lg h-[20vh] overflow-hidden"
          >
            <img
              className="object-cover w-full"
              src={image}
              alt="news picture"
            />
          </div>
        ))}
      </Carousel>
      <p className="text-neutral-50 font-semibold my-2">Select a Room</p>
      {[...Array(rooms)].map((roomNumber, index) => (
        <button
          key={index}
          className="bg-neutral-200 rounded-md px-2 mx-1 text-neutral-800"
        >
          Room {index + 1}
        </button>
      ))}
      <input
        type="text"
        className="bg-neutral-200 my-3 text-neutral-800 rounded-md w-10/12"
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
        id=""
        className="bg-neutral-200 text-neutral-800 rounded-md px-1 mx-1"
      />
      <button
        type="submit"
        onClick={bookNow}
        className="bg-red-600 text-white px-2 rounded-md mx-1"
      >
        Book Now
      </button>
    </div>
  );
};
