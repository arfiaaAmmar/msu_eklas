import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useContext } from 'react'
import { Header } from "./components/Navigation/Header";
import { GlobalContext, GlobalContextProvider } from "./context/GlobalContext";
import Campus from "./pages/Campus/Campus";
import Home from "./pages/Home";
import Inbox from "./pages/Inbox/Inbox";
import Student from "./pages/Student/Student";
import Navbar from "./components/Navigation/Navbar";
import Login from "./pages/Login/Login";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import QrScan from "./components/QrScan";
import AnimatePage from "./components/AnimatePage";


function App() {
  const location = useLocation()
  const { logged } = useContext(GlobalContext)

  return (
    <>
    {
      logged ? (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {location.pathname != "/login" ? <Header /> : null}
          <AnimatePage>
              <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/student" element={<Student />}>
                  <Route path="/student/taskmanager" />
                  <Route path="/student/curriculum" />
                </Route>
                <Route path="/campus" element={<Campus />}>
                  <Route path="/campus/account_department" />
                  <Route path="/campus/library" />
                  <Route path="/campus/booking" />
                </Route>
                <Route path="/inbox" element={<Inbox />} />
                {/* <Route path="/qrscan" element={<QrScan />} /> */}
              </Routes>
          </AnimatePage>
            {location.pathname != "/login" ? <Navbar /> : null}
        </LocalizationProvider>
      ) : (
        <Login />
      )
    }
    </>
  );
}

export default App;
