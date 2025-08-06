import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Display from "./components/Display";
import Player from "./components/Player";
import { usePlayer } from "./context/PlayerContext";
import LogIn from "./components/Auth/LogIn";
import SignUp from "./components/Auth/SignUp";
import BottomNavigation from "./components/BottomNavigation";

import { useAuth } from "./context/AuthContext";
import Loading from "./components/Loading";

const App = () => {
  const { audioRef, track } = usePlayer();
  const location = useLocation();
  const { loading } = useAuth(); 
  const hiddenPlayerRoutes = ["/login", "/signup"];
  const shouldHideGlobalUI = hiddenPlayerRoutes.includes(location.pathname);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="h-screen bg-black overflow-hidden">
      <Routes>
        <Route
          path="/*"
          element={
            <div className="h-[90%] flex">
              <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
              <Display />
            </div>
          }
        />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      {!shouldHideGlobalUI && (
        <>
          <BottomNavigation />
          <Player />
          <audio ref={audioRef} src={track.file} preload="auto" />
        </>
      )}
    </div>
  );
};

export default App;