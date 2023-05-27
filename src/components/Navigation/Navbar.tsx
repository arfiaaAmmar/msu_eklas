import { AccountBalance, Email, Home, School } from "@mui/icons-material";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ActionButton from "./ActionButton/ActionButton";
import { Button, Typography } from "@mui/material";

const Navbar = () => {
  const [page, setPage] = useState("/home");
  const [actionBtn, setActionBtn] = useState(false);
  const location = useLocation();

  return (
    <>
      <div className="fixed bottom-2 w-full shadow-2xl">
        <div className="flex bg-neutral-800 justify-evenly h-16 mx-2 mb-auto shadow-lg shadow-white rounded-2xl">
          <Link
            key={0}
            to="/home"
            onClick={() => setPage("/home")}
            className="m-auto text-center w-full"
          >
            <Home
              fontSize="medium"
              className={`m-auto ${
                location.pathname.includes("/home")
                  ? "text-red-600"
                  : "text-white font"
              }`}
            />
            <Typography
              className={`${
                location.pathname.includes("/home")
                  ? "text-red-600 font-bold"
                  : "text-white font-light"
              } text-xs text-center`}
            >
              Home
            </Typography>
          </Link>
          <Link
            key={1}
            to="/student"
            onClick={() => setPage("/student")}
            className="m-auto text-center w-full"
          >
            <School
              fontSize="medium"
              className={`m-auto ${
                location.pathname.includes("/student")
                  ? "text-red-600"
                  : "text-white font"
              }`}
            />
            <Typography
              className={`${
                location.pathname.includes("/student")
                  ? "text-red-600 font-bold"
                  : "text-white font-light"
              } text-xs text-center`}
            >
              Student
            </Typography>
          </Link>
          <ActionButton actionBtn={actionBtn} setActionBtn={setActionBtn} />
          <Link
            key={2}
            to="/campus"
            onClick={() => setPage("/campus")}
            className="m-auto text-center w-full"
          >
            <AccountBalance
              fontSize="medium"
              className={`m-auto ${
                location.pathname.includes("/campus")
                  ? "text-red-600"
                  : "text-white"
              }`}
            />
            <Typography
              className={`${
                location.pathname.includes("/campus")
                  ? "text-red-600 font-bold"
                  : "text-white font-light"
              } text-xs text-center`}
            >
              Campus
            </Typography>
          </Link>
          <Link
            key={3}
            to="/inbox"
            onClick={() => setPage("/inbox")}
            className="m-auto text-center w-full"
          >
            <Email
              fontSize="medium"
              className={`m-auto ${
                location.pathname.includes("/inbox")
                  ? "text-red-600"
                  : "text-white"
              }`}
            />
            <Typography
              className={`${
                location.pathname.includes("/inbox")
                  ? "text-red-600 font-bold"
                  : "text-white font-light"
              } text-xs text-center`}
            >
              Inbox
            </Typography>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
