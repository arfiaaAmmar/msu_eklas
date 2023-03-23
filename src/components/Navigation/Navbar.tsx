import { AccountBalance, Email, Home, School } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import ActionButton from "./ActionButton/ActionButton";

const Navbar = () => {
  const [page, setPage] = useState('/home')
  const [actionBtn, setActionBtn] = useState(false);

  return (
    <>
      <div className="fixed bottom-2 w-full">
        <div className="flex bg-neutral-800 justify-evenly h-16 mx-2 mb-auto shadow-lg shadow-white rounded-2xl">
          <Link
            key={0}
            to="/home"
            onClick={() => setPage('/home')}
            className="m-auto text-center w-full"
          >
            <Home
              fontSize="medium"
              className={`m-auto ${
                page == '/home' ? "text-red-600" : "text-white font"
              }`}
            />
            <p
              className={`${
                page == '/home' ? "text-red-600 font-bold" : "text-white font-light"
              } text-[0.65rem] text-center`}
            >
              Home
            </p>
          </Link>
          <Link
            key={1}
            to="/student"
            onClick={() => setPage('/student')}
            className="m-auto text-center w-full"
          >
            <School
              fontSize="medium"
              className={`m-auto ${
                page == '/student' ? "text-red-600" : "text-white font"
              }`}
            />
            <p
              className={`${
                page == '/student' ? "text-red-600 font-bold" : "text-white font-light"
              } text-[0.65rem] text-center`}
            >
              Student
            </p>
          </Link>
            <ActionButton actionBtn={actionBtn} setActionBtn={setActionBtn} />
          <Link
            key={2}
            to="/campus"
            onClick={() => setPage('/campus')}
            className="m-auto text-center w-full"
          >
            <AccountBalance
              fontSize="medium"
              className={`m-auto ${page == '/campus' ? "text-red-600" : "text-white"}`}
            />
            <p
              className={`${
                page == '/campus' ? "text-red-600 font-bold" : "text-white font-light"
              } text-[0.65rem] text-center`}
            >
              Campus
            </p>
          </Link>
          <Link
            key={3}
            to="/inbox"
            onClick={() => setPage('/inbox')}
            className="m-auto text-center w-full"
          >
            <Email
              fontSize="medium"
              className={`m-auto ${page == '/inbox' ? "text-red-600" : "text-white"}`}
            />
            <p
              className={`${
                page == '/mail' ? "text-red-600 font-bold" : "text-white font-light"
              } text-[0.65rem] text-center`}
            >
              Inbox
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
