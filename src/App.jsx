import { Account } from "./Pages/Account";
import { Favorites } from "./Pages/Favorites";
import { Home } from "./Pages/Home";
import { Host } from "./Pages/Host";
import { Login } from "./Pages/Login";
import { Profile } from "./Pages/Profile";
import { SignUp } from "./Pages/SignUp";
import { Trips } from "./Pages/Trips";
import { Works } from "./Pages/Works";
import { Footer } from "./components/Home/Footer";
import { Nav } from "./components/Home/Nav";

import { Routes, Route } from "react-router-dom";
function App() {
  const relatedPages = {
    trip: ["booked", "history"],
    inbox: ["messages", "notifications"],
  }; //An Array Of Related Pages
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/favorites" element={<Favorites />} />

        {relatedPages.trip.map((item) => (
          <Route
            path={`/trips/${item}`}
            element={
              <Trips
                key={item}
                section={{
                  path: item,
                  pages: relatedPages.trip,
                  type: "trips",
                  data: [],
                }}
              />
            }
          />
        ))}

        {relatedPages.inbox.map((item) => (
          <Route
            path={`/inbox/${item}`}
            element={
              <Trips
                key={item}
                section={{
                  path: item,
                  pages: relatedPages.inbox,
                  type: "inbox",
                  data: [],
                }}
              />
            }
          />
        ))}

        <Route path="/profile" element={<Profile />} />
        <Route path="/account" element={<Account />} />
        <Route path="/host" element={<Host />} />
        <Route path="/works" element={<Works />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
