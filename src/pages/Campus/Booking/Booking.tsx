import {
  Button,
  IconButton,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { TabContext, TabPanel } from "@mui/lab";
import BookingTabContent from "./BookingTabContent";
import { roomsRoute } from "../../../routes/roomsRoute";
import { RoomBookingRouteType } from "../../../routes/config";
import useFetch from "../../../hooks/useFetch";
import usePostData from "../../../hooks/usePost";

const account = roomsRoute[0];
const library = roomsRoute[1];
const counselling = roomsRoute[2];

export type BookingType = {
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
    "library_room1"
  );
  const [selectedRoom, setSelectedRoom] = useState<BookingType>()

  //For fetch API purposes
  const [bookedRoomsData, setBookedRoomsData] = useState<BookingType[]>([])

  const { data, isLoading, error } = useFetch("http://localhost:3000/bookings")

  useEffect(() => {
    const fetchBookedRoomsData = () => {
      if (data && Array.isArray(data) && data.length > 0) {
        setBookedRoomsData(data);
      }
      if (isLoading) return <p>Loading ...</p>;
      if (error) return <p>Error: {error}</p>;
      if (!Array.isArray(data)) return <p>Data is not an array</p>;
    }

    fetchBookedRoomsData()
  }, [data])

  const addBooking = () => {
    
  };

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
              className="text-neutral-50"
            />
            <Tab
              label="Library"
              value="library"
              onClick={() => setCurrentRoom("library_room1")}
              className="text-neutral-50"
            />
            <Tab
              label="Counselling"
              value="counselling"
              onClick={() => setCurrentRoom("counselling_room1")}
              className="text-neutral-50"
            />
          </Tabs>
          <TabPanel value="account" className="p-0">
            <BookingTabContent
              rooms={account.children}
              currentRoom={currentRoom}
              setCurrentRoom={setCurrentRoom}
              handleBooking={addBooking}
            />
          </TabPanel>
          <TabPanel value="library" className="p-0">
            <BookingTabContent
              rooms={library.children}
              currentRoom={currentRoom}
              setCurrentRoom={setCurrentRoom}
              handleBooking={addBooking}
            />
          </TabPanel>
          <TabPanel value="counselling" className="p-0">
            <BookingTabContent
              rooms={counselling.children}
              currentRoom={currentRoom}
              setCurrentRoom={setCurrentRoom}
              handleBooking={addBooking}
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
        {bookedRoomsData.map((booking, index) => (
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
