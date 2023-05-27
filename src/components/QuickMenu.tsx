import {
    Email,
    AddTask,
    CalendarMonth,
    ChevronLeft,
    ChevronRight
} from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Link, useLocation } from "react-router-dom";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

const QuickMenu = () => {
  const location = useLocation();

  return (
    <>
        <CarouselProvider
      visibleSlides={3}
      totalSlides={5}
      step={1}
      naturalSlideWidth={200}
      naturalSlideHeight={200}
      // Add any additional props or configurations as needed
    >
      <Box display="flex" alignItems="center">
        <ButtonBack>
          <IconButton>
            <ChevronLeft />
          </IconButton>
        </ButtonBack>

        <Slider>
          <Slide index={0}>
            {/* Slide 1 content */}
            <Box sx={{ width: 200, height: 200, backgroundColor: 'gray' }} />
          </Slide>

          <Slide index={1}>
            {/* Slide 2 content */}
            <Box sx={{ width: 200, height: 200, backgroundColor: 'gray' }} />
          </Slide>

          {/* Add more slides here */}
        </Slider>

        <ButtonNext>
          <IconButton>
            <ChevronRight />
          </IconButton>
        </ButtonNext>
      </Box>
    </CarouselProvider>
      {/* <Typography variant="h6" marginY={1}>Quick Menu</Typography>
      <div className="overflow-x-auto whitespace-nowrap">
        <div className="inline-flex gap-2">
          {quickMenus.map((quickMenu, index) => (
            <Link
              key={index}
              to={quickMenu.path}
              className="bg-red-600 h-1/4 p-3 w-[30%] rounded-md"
            >
              {quickMenu.icon}
              <Typography className="text-white text-sm break-words">
                {quickMenu.title}
              </Typography>
            </Link>
          ))}
        </div>
      </div> */}
      
    </>
  );
};

export default QuickMenu;

type QuickMenu = {
  icon: React.ReactNode;
  title: string;
  path: string;
};

const quickMenus: QuickMenu[] = [
  {
    icon: <AddTask className="text-white " fontSize="large" />,
    title: "Task Manager",
    path: "/student/taskmanager",
  },
  {
    icon: <CalendarMonth className="text-white " fontSize="large" />,
    title: "Appointments & Bookings",
    path: "/campus/booking",
  },
  {
    icon: <Email className="text-white " fontSize="large" />,
    title: "Inbox",
    path: "/inbox",
  },
];
