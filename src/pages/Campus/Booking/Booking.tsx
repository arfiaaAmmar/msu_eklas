import { Button, Tab, Tabs, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { TabContext, TabPanel } from "@mui/lab";
import BookingTabContent from "./BookingTabContent";
import { roomsRoute } from "../../../routes/roomsRoute";
import { RoomBookingRouteType } from "../../../routes/config";

const account = roomsRoute[0]
const library = roomsRoute[1]
const counselling = roomsRoute[2]

const Booking = () => {
  const [tab, setTab] = useState("account");
  const [currentRoom, setCurrentRoom] = useState<string | undefined>("account_room1")
  const carouselImage = account.children?.find(child => child.id === currentRoom)
  const [booking, setBooking] = useState<RoomBookingRouteType>({
    id: "account",
    department: "account",
    children: account.children,
    images: account.images,
  });

  const [bookings, setBookings] = useState<RoomBookingRouteType[]>([
    {
      id: account.id,
      department: account.department,
      images: account.images,
    },
    {
      id: library.id,
      department: library.department,
      images: library.images,
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
              {
                carouselImage?.images?.map((image, index) => (
                  <div
                  key={index}
                  className="flex flex-row bg-red-900 rounded-lg h-[20vh] overflow-hidden"
                >
                  <img
                    className="object-cover w-full"
                    src={image?.toString()}
                    alt="news picture"
                  />
                </div>
                ))
              }
            </Carousel>
          </TabPanel>
          <TabPanel value="library" className="p-0">
            <Carousel animation="slide" swipe>
            {
                carouselImage?.images?.map((image, index) => (
                  <div
                  key={index}
                  className="flex flex-row bg-red-900 rounded-lg h-[20vh] overflow-hidden"
                >
                  <img
                    className="object-cover w-full"
                    src={image?.toString()}
                    alt="news picture"
                  />
                </div>
                ))
              }
            </Carousel>
          </TabPanel>
          <TabPanel value="counselling" className="p-0">
            <Carousel animation="slide" swipe>
            {
                carouselImage?.images?.map((image, index) => (
                  <div
                  key={index}
                  className="flex flex-row bg-red-900 rounded-lg h-[20vh] overflow-hidden"
                >
                  <img
                    className="object-cover w-full"
                    src={image?.toString()}
                    alt="news picture"
                  />
                </div>
                ))
              }
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
              className="text-neutral-50 text-[0.8rem]"
            />
            <Tab
              label="Library"
              value="library"
              className="text-neutral-50 text-[0.8rem]"
            />
            <Tab
              label="Counselling"
              value="counselling"
              className="text-neutral-50 text-[0.8rem]"
            />
          </Tabs>
          <TabPanel value="account" className="p-0">
            <BookingTabContent rooms={account.children} currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} />
          </TabPanel>
          <TabPanel value="library" className="p-0">
            <BookingTabContent rooms={library.children} currentRoom={currentRoom} setCurrentRoom={setCurrentRoom}/>
          </TabPanel>
          <TabPanel value="counselling" className="p-0">
            <BookingTabContent rooms={counselling.children} currentRoom={currentRoom} setCurrentRoom={setCurrentRoom}/>
          </TabPanel>
        </div>
      </TabContext>

      <Typography variant="h6" className="my-2">
        Booked roomsRoute
      </Typography>
      <div className="bg-neutral-800 text-center pt-0 rounded-lg py-4 shadow-md">
        <Typography className="text-neutral-50 p-4 text-left">
          Booked roomsRoute will be listed here
        </Typography>
        {/* {
          bookings.map((booking, index) => (

          ))
        } */}
      </div>
    </>
  );
};

export default Booking;
