import React from "react";
import Header from "../widgets/header";
import Footer from "../widgets/footer";
import InfoBlock from "./info-block";
import Layout from "./ques/Layout";
import Final from "./final";
import Pokolenies from "./Pokolenies/Pokolenies";

function App() {
  return (
    <>
      <Header />

      <main className="flex-1 px-16 min-desktop:px-120">
        <InfoBlock />

        <Layout />

        <Final />

        <Pokolenies />
      </main>

      <Footer />
    </>
  );
}

export default App;
