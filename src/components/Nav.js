import React from "react";
import ReactDOM from "react-dom";
import star from "../one-2-jan-22.png";
import { ThirdwebProvider, ConnectWallet } from "@3rdweb/react";

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

export default function Nav() {
  return (
    <nav>
      <ThirdwebProvider
        connectors={connectors}
        supportedChainIds={supportedChainIds}
      >
        <ConnectWallet />
      </ThirdwebProvider>

      {/* <img src={star} className="nav--logo" /> */}
    </nav>
  );
}
