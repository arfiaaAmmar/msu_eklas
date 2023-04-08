import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Navigation/Header";
import { GlobalContextProvider } from "./context/GlobalContext";
import Campus from "./pages/Campus/Campus";
import Home from "./pages/Home";
import Inbox from "./pages/Inbox/Inbox";
import Student from "./pages/Student/Student";
import Navbar from "./components/Navigation/Navbar";
import Login from "./pages/Login/Login";

function App() {

  return (
    <>
      <GlobalContextProvider>
        <Router>
          {
            window.location.pathname !== "/login" && window.location.pathname !== "/register" && <Header />          
          }
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/student" element={<Student />}>
              <Route path="/student/taskmanager" />
              <Route path="/student/curriculum" />
            </Route>
            <Route path="/campus" element={<Campus />}>
              <Route path="/campus/account_department"/>
              <Route path="/campus/library"/>
              <Route path="/campus/booking"/>
            </Route>
            <Route path="/inbox" element={<Inbox />} />
          </Routes>
          {
            window.location.pathname !== "/login" && window.location.pathname !== "/register" && <Navbar />
          }
        </Router>
      </GlobalContextProvider>
    </>
  );
}

export default App;
