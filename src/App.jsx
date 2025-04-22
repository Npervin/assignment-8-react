import React from "react";
import { Outlet, useNavigation } from "react-router";

// components
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Loader from "./components/Loader";

function App() {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
