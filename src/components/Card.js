import React from "react";
import star from "../one-2-jan-22.png";
import AuctionListing from "./AuctionListing";
import { useWeb3 } from "@3rdweb/hooks";
import { useCallback, useMemo, useEffect, useState } from "react";
import { ThirdwebSDK } from "@3rdweb/sdk";

export default function Card(props) {
  const { provider } = useWeb3();
  const sdk = useMemo(
    () =>
      provider ? new ThirdwebSDK(provider.getSigner()) : new ThirdwebSDK(),
    [provider]
  );
  const market = useMemo(
    () =>
      sdk.getMarketplaceModule("0xf4e8C436d87Bd4cB1416E474948105FdF80BB6A0"),
    [sdk]
  );

  const [balance, setBalance] = useState([]);

  useEffect(() => {
    const getMyListing = async () => {
      const Listings = await market.getAllListings();
      setBalance(Listings);
    };

    if (market) {
      getMyListing();
    }
  }, [market]);

  console.log(balance);

  const balanceId = balance.map((balId) => {
    return balId.id;
  });

  console.log(balanceId);

  const balURL = balance.map((bUrl) => {
    return bUrl.asset.image.replace("ipfs://", "");
  });

  function buyNow(listId) {
    return market.buyoutDirectListing({
      listingId: listId,
      quantityDesired: 1,
    });
  }

  //   const buyNow = useCallback(
  //     async (listId) => {
  //       await market.buyoutDirectListing({
  //         listingId: listId,
  //         quantityDesired: 1,
  //       });
  //     },
  //     [market]
  //   );

  return (
    <div>
      <div className="card">
        <div className="card--one">
          <img
            src={`https://ipfs.thirdweb.com/ipfs/${balURL[0]}`}
            className="card--image"
          />
          <button className="btn" onClick={buyNow.bind(this, 0)}>
            BUY NOW
          </button>
        </div>
        <div className="card--two">
          <img
            src={`https://ipfs.thirdweb.com/ipfs/${balURL[1]}`}
            className="card--image"
          />

          <button className="btn" onClick={buyNow.bind(this, 1)}>
            BUY NOW
          </button>
        </div>
        <div className="card--three">
          <img
            src={`https://ipfs.thirdweb.com/ipfs/${balURL[2]}`}
            className="card--image"
          />

          <button className="btn" onClick={buyNow.bind(this, 2)}>
            BUY NOW
          </button>
        </div>
      </div>



      
      {/* <div className="card--stats">
        <span className="gray">{`Token ID: ${balanceId[0]}`} • </span>
        <span className="gray">1.0 Eth</span>
      </div>
      <p className="description"></p>

      <div className="card--stats">
        <span className="gray">{`Token ID: ${balanceId[1]}`} • </span>
        <span className="gray">1.0 Eth</span>
      </div>
      <p className="description"></p>

      <div className="card--stats">
        <span className="gray">{`Token ID: ${balanceId[2]}`} • </span>
        <span className="gray">1.0 Eth</span>
      </div>
      <p className="description"></p>

      <input />
      <button className="btn--offer">MAKE AN OFFER</button> */}
    </div>
  );
}

// <div className="card">
//       {/* <img src={`../images/${props.img}`} className="card--image" /> */}
//       <img src={`../images/${props.img}`} className="card--image" />
//       <div className="card--stats">
//         <span className="gray">({props.name}) • </span>
//         <span className="gray">1.0 Eth</span>
//       </div>
//       <p className="description">{JSON.stringify(balURL)}</p>
//       <button className="btn">BUY NOW</button>
//       <button className="btn--offer">MAKE AN OFFER</button>

//       {/* <button className="btn--offer" onClick={} >MAKE AN OFFER</button> */}

//       {/* <p>My Listing: {JSON.stringify(balance)}</p> */}
//     </div>
