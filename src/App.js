import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import AuctionGallery from "./components/AuctionListing";
import { ThirdwebProvider } from "@3rdweb/react";
import data from "./data";

const supportedChainIds = [1, 4, 137, 250, 43114, 80001];

const connectors = {
  injected: {},
  magic: {},
  walletconnect: {},
  walletlink: {
    appName: "thirdweb - demo",
    url: "https://thirdweb.com",
    darkMode: false,
  },
};

export default function App() {
  return (
    <div className="App">
      <ThirdwebProvider
        connectors={connectors}
        supportedChainIds={supportedChainIds}
      >
        <Nav />

        <Hero />
        {/* {cards} */}
        <Card />
        {/* <AuctionGallery /> */}
      </ThirdwebProvider>
    </div>
  );
}
