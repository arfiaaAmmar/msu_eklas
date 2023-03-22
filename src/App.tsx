import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Header } from "./components/Navigation/Header";
import { GlobalContextProvider } from "./context/GlobalContext";
import Campus from "./pages/Campus/Campus";
import Home from "./pages/Home";
import Inbox from "./pages/Inbox/Inbox";
import Student from "./pages/Student/Student";
import Navbar from "./components/Navigation/Navbar";

function App() {
  return (
    <>
      <GlobalContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/student" element={<Student />}>
              <Route path="student/assignments_and_tasks"/>
              <Route path="student/curriculum"/>
            </Route>
            <Route path="/campus" element={<Campus />}>
              <Route path="/campus/account_department"/>
              <Route path="/campus/library"/>
              <Route path="/campus/counselling"/>
              <Route path="/campus/others"/>
            </Route>
            <Route path="/inbox" element={<Inbox />} />
          </Routes>
          <Navbar />
        </Router>
      </GlobalContextProvider>
    </>
  );
}

export default App;
