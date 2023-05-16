import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from 'react'
import { Header } from "./components/Navigation/Header";
import { GlobalContextProvider } from "./context/GlobalContext";
import Campus from "./pages/Campus/Campus";
import Home from "./pages/Home";
import Inbox from "./pages/Inbox/Inbox";
import Student from "./pages/Student/Student";
import Navbar from "./components/Navigation/Navbar";
import Login from "./pages/Login/Login";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


function App() {
  const location = useLocation()
  const [logged, setLogged] = useState(true)
  const [user, setUser] = useState(null)

  const handleLogout = () => {
    setLogged(prev => !prev)
    setUser(() => null)
  }

  return (
    <>
    {
      logged ? (
        <GlobalContextProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {location.pathname != "/login" ? <Header handleLogout={handleLogout} /> : null}
            <Routes>
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
            </Routes>
            {location.pathname != "/login" ? <Navbar /> : null}
        </LocalizationProvider>
      </GlobalContextProvider>
      ) : (
        <Login setLogged={setLogged} setUser={setUser} />
      )
    }
    </>
  );
}

export default App;
