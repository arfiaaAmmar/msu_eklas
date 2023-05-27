import { Box, Typography } from "@mui/material";
import React from "react";
import { Book } from "./Library";

const HighlightedBook = (props: Book) => {
  return (
    <div className="flex my-4 gap-2">
      <Box className="w-4/6">
        <img
          src={props.thumbnail}
          alt=""
          className="object-cover rounded-lg h-full"
        />
      </Box>
      <Box>
        <Typography className="text-lg text-neutral-50 font-semibold">
          {props.title}
        </Typography>
        <Typography className=" text-neutral-50 text-xs">
          {props.description}
        </Typography>
        <Typography
          className={`text-white mt-1 ${
            props.availability == true ? "bg-red-600" : "bg-neutral-400"
          } text-xs mr-0 ml-auto rounded-md px-1 w-max`}
        >
          {props.availability == true ? "Available" : "Unavailable"}
        </Typography>
      </Box>
    </div>
  );
};

export default HighlightedBook;
