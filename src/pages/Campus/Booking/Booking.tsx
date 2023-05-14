import {
  Button,
  IconButton,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { TabContext, TabPanel } from "@mui/lab";
import BookingTabContent from "./BookingTabContent";
import { roomsRoute } from "../../../routes/roomsRoute";
import { RoomBookingRouteType } from "../../../routes/config";

const account = roomsRoute[0];
const library = roomsRoute[1];
const counselling = roomsRoute[2];

type BookingType = {
  id: string;
  name: string;
  department: RoomBookingRouteType["department"];
  images: string[];
  description: string;
  bookingDate: Date | undefined;
  status: true;
};

const Booking = () => {
  const [tab, setTab] = useState("account");
  const [currentRoom, setCurrentRoom] = useState<string>(
    "account_room1"
  );
  const [bookings, setBookings] = useState<BookingType[]>([
    {
      id: "account_room2",
      name: "Room 2",
      department: "account",
      images: [
        "https://thumbs.dreamstime.com/b/room-chairs-boxes-tailor-dummy-moving-house-172558981.jpg",
        "https://thumbs.dreamstime.com/b/room-chairs-boxes-tailor-dummy-moving-house-172558981.jpg",
        "https://thumbs.dreamstime.com/b/room-chairs-boxes-tailor-dummy-moving-house-172558981.jpg",
      ],
      description: "For final exam study",
      bookingDate: new Date(),
      status: true,
    },
    {
      id: "library_room2",
      name: "Room 2",
      department: "library",
      images: [
        "https://thumbs.dreamstime.com/b/room-chairs-boxes-tailor-dummy-moving-house-172558981.jpg",
        "https://static01.nyt.com/images/2015/10/24/opinion/24manguel/24manguel-superJumbo.jpg",
      ],
      description: "For video production",
      bookingDate: new Date(),
      status: true,
    },
  ]);

  // const handleTab = (e: any, newPage: string) => {
  //   if (booking?.bookingDate == null) return;
  //   setBoookings([
  //     ...bookings,
  //     {
  //       id: bookings.length + 1,
  //       description: task?.description,
  //       date: new Date(),
  //       flag: "inbox",
  //       completed: false,
  //     },
  //   ]);

  //   setTask({
  //     id: 0,
  //     title: "",
  //     description: "",
  //     date: new Date(),
  //     flag: "inbox",
  //     completed: false,
  //   });
  //   setModals({ ...modals, task: !task });
  // };

  const addBooking = () => {};

  const deleteBooking = () => {};

  const fetchData = (link: URL) => {};

  return (
    <>
      <TabContext value={tab}>
        <div className="bg-neutral-800 text-center pt-0 rounded-lg py-4 shadow-md">
          <TabPanel value="account" className="p-0">
            <Carousel animation="slide" swipe>
              {account.children
                ?.find((child) => child.id == currentRoom)
                ?.images?.map((image) => (
                  <div className="flex flex-row bg-red-900 rounded-lg h-[20vh] overflow-hidden">
                    <img
                      className="object-cover w-full"
                      src={image?.toString()}
                      alt="news picture"
                    />
                  </div>
                ))}
            </Carousel>
          </TabPanel>
          <TabPanel value="library" className="p-0">
            <Carousel animation="slide" swipe>
              {library.children
                ?.find((child) => child.id == currentRoom)
                ?.images?.map((image) => (
                  <div className="flex flex-row bg-red-900 rounded-lg h-[20vh] overflow-hidden">
                    <img
                      className="object-cover w-full"
                      src={image?.toString()}
                      alt="news picture"
                    />
                  </div>
                ))}
            </Carousel>
          </TabPanel>
          <TabPanel value="counselling" className="p-0">
            <Carousel animation="slide" swipe>
              {counselling.children
                ?.find((child) => child.id == currentRoom)
                ?.images?.map((image) => (
                  <div className="flex flex-row bg-red-900 rounded-lg h-[20vh] overflow-hidden">
                    <img
                      className="object-cover w-full"
                      src={image?.toString()}
                      alt="news picture"
                    />
                  </div>
                ))}
            </Carousel>
          </TabPanel>
          <Tabs
            value={tab}
            onChange={(event: React.SyntheticEvent, newValue: string) => {
              setTab(newValue);
            }}
            textColor="primary"
            variant="scrollable"
            TabIndicatorProps={{
              style: { backgroundColor: "red" },
            }}
          >
            <Tab
              label="Account"
              value="account"
              onClick={() => setCurrentRoom("account_room1")}
              className="text-neutral-50 text-[0.8rem]"
            />
            <Tab
              label="Library"
              value="library"
              onClick={() => setCurrentRoom("library_room1")}
              className="text-neutral-50 text-[0.8rem]"
            />
            <Tab
              label="Counselling"
              value="counselling"
              onClick={() => setCurrentRoom("counselling_room1")}
              className="text-neutral-50 text-[0.8rem]"
            />
          </Tabs>
          <TabPanel value="account" className="p-0">
            <BookingTabContent
              rooms={account.children}
              currentRoom={currentRoom}
              setCurrentRoom={setCurrentRoom}
            />
          </TabPanel>
          <TabPanel value="library" className="p-0">
            <BookingTabContent
              rooms={library.children}
              currentRoom={currentRoom}
              setCurrentRoom={setCurrentRoom}
            />
          </TabPanel>
          <TabPanel value="counselling" className="p-0">
            <BookingTabContent
              rooms={counselling.children}
              currentRoom={currentRoom}
              setCurrentRoom={setCurrentRoom}
            />
          </TabPanel>
        </div>
      </TabContext>

      <div className="bg-neutral-800 text-center mt-4 pt-0 rounded-lg py-4 shadow-md">
        <Typography variant="h6" className="pt-2 text-neutral-50">
          Booked roomsRoute
        </Typography>
        <Typography className="text-neutral-50 p-4 text-left">
          Booked roomsRoute will be listed here
        </Typography>
        {bookings.map((booking, index) => (
          <div className="flex gap-2 bg-neutral-700 m-2 rounded-md">
            <div className="w-1/4 overflow-hidden rounded-l-md">
              <img
                src={booking.images?.toString()}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-left py-2">
              <Typography className="text-neutral-50">
                <span className="font-bold">
                  {booking.department?.toUpperCase()}{" "}
                </span>
                <span className="text-[0.8rem]">- {booking.name}</span>
              </Typography>
              <Typography className="text-neutral-400 text-sm">
                {booking.description}
              </Typography>
              <Typography>
                <span className="px-1 text-[0.8rem] text-white bg-red-800 rounded-md ">
                  02/12/2023
                </span>
              </Typography>
            </div>
            <IconButton className="mr-0 ml-auto my-auto p-2">
              <EditIcon fontSize="small" className="text-neutral-400" />
            </IconButton>
          </div>
        ))}
      </div>
    </>
  );
};

export default Booking;
