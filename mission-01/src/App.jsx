import React from "react";
import Header from "./components/Header/Header";
import Profile from "./components/Main/Profile";
import AboutMe from "./components/Main/AboutMe";
import MyHistory from "./components/Main/MyHistory";
import Gnb from "./components/Footer/Gnb";

function App() {
  return (
    <>
      <header className="bg-white min-w-screen max-w-screen w-full h-10">
        <Header />
      </header>
      <main className="min-w-screen max-w-screen overflow-auto h-[calc(100vh-40px-69px)]">
        <Profile />
        <AboutMe />
        <MyHistory />
      </main>
      <footer className="min-w-screen max-w-screen w-full">
        <Gnb />
      </footer>
    </>
  );
}

export default App;
