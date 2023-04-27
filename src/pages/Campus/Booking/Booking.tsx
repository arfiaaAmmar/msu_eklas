import { useState } from "react";
import { Button, Tab, Tabs, TextField, Typography } from "@mui/material";
import { BookingViewer } from "./BookingViewer";
import TabNav from "../../../components/Navigation/TabNav";
import { ProfilePic } from "../../../assets/images/images";
import Carousel from "react-material-ui-carousel";

const Booking = () => {
  const [page, setPage] = useState("Account");
  const handleTab = (e: any, newPage: string) => {
    setPage(newPage);
  };

  const exampleImages = [ProfilePic, ProfilePic, ProfilePic];

  return (
    <>
      <Typography variant="h6">Book Room</Typography>
      <div className="bg-neutral-800 text-center pt-0 rounded-lg py-4 shadow-md">
        <Carousel animation="slide" swipe>
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
        <Tabs
          value={page}
          onChange={handleTab}
          textColor="primary"
          variant="scrollable"
          TabIndicatorProps={{
            style: { backgroundColor: "red"},
          }}
        >
          <Tab value="account" label="Account" className="text-neutral-50 text-[0.8rem]" />
          <Tab value="library" label="Library" className="text-neutral-50 text-[0.8rem]" />
          <Tab value="counselling" label="Counselling" className="text-neutral-50 text-[0.8rem]" />
        </Tabs>
        <p className="text-neutral-50 font-semibold my-2">Select a Room</p>
        {[...Array(3)].map((roomNumber, index) => (
          <Button
            key={index}
            className="bg-neutral-200 rounded-md px-2 text-sm mx-1 text-neutral-800"
          >
            Room {index + 1}
          </Button>
        ))}
        <TextField
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
          // onClick={bookNow}
          className="bg-red-600 text-white px-2 rounded-md mx-1"
        >
          Book Now
        </button>
      </div>
      <Typography variant="h6" className="my-2">Booked Rooms</Typography>
    </>
  );
};

export default Booking;
