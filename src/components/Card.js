import React from "react";
import star from "../one-2-jan-22.png";
import AuctionListing from "./AuctionListing";
import { useWeb3 } from "@3rdweb/hooks";
import { useCallback, useMemo, useEffect, useState } from "react";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { BigNumber } from "ethers";

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

  const [quantities, setQuantities] = useState([]);
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

  const balanceId = balance.map((balId) => {
    return balId.id;
  });

  const balURL = balance.map((bUrl) => {
    return bUrl.asset.image.replace("ipfs://", "");
  });

  // const balanceQ = balance.map(async (balQ) => {

  //   return balQ.quantity.toNumber();
  // });

  useEffect(() => {
    const getQuantities = async () => {
      const data = balance.map(async (balQ) => {
        return balQ.quantity.toNumber();
      });

      const allQuantities = await Promise.all(data);
      console.log(allQuantities);
      setQuantities(allQuantities);
    };

    if (balance) {
      getQuantities();
    }
  }, [balance]);

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
  // console.log(balanceQ[0]);

  // let balanceQfirst = balanceQ[0];

  // console.log(balanceQ[0]._hex === "0x00");
  // console.log(balanceQ[1]._hex === "0x00");
  // console.log(balanceQ[2]._hex === "0x00");

  return (
    <div>
      <div className="card">
        {quantities.map((quantity, index) => (
          <div>
            <img
              src={`https://ipfs.thirdweb.com/ipfs/${balURL[index]}`}
              className="card--image"
            />
            {quantity === 0 ? (
              <div className="card--badge">SOLD OUT</div>
            ) : (
              <div className="card--badge">
                FOR SALE
                <button className="btn" onClick={buyNow.bind(this, 0)}>
                  BUY NOW
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* <div className="card--stats">
        <span className="gray">{`Token ID: ${balanceId[0]}`} ??? </span>
        <span className="gray">1.0 Eth</span>
      </div>
      <p className="description"></p>

      <div className="card--stats">
        <span className="gray">{`Token ID: ${balanceId[1]}`} ??? </span>
        <span className="gray">1.0 Eth</span>
      </div>
      <p className="description"></p>

      <div className="card--stats">
        <span className="gray">{`Token ID: ${balanceId[2]}`} ??? </span>
        <span className="gray">1.0 Eth</span>
      </div>
      <p className="description"></p>

      <input />
      <button className="btn--offer">MAKE AN OFFER</button> */}

      {/* <p>My Listing: {JSON.stringify(balanceQfirst)}</p> */}
    </div>
  );
}

// <div className="card">
//       {/* <img src={`../images/${props.img}`} className="card--image" /> */}
//       <img src={`../images/${props.img}`} className="card--image" />
//       <div className="card--stats">
//         <span className="gray">({props.name}) ??? </span>
//         <span className="gray">1.0 Eth</span>
//       </div>
//       <p className="description">{JSON.stringify(balURL)}</p>
//       <button className="btn">BUY NOW</button>
//       <button className="btn--offer">MAKE AN OFFER</button>

//       {/* <button className="btn--offer" onClick={} >MAKE AN OFFER</button> */}

//       {/* <p>My Listing: {JSON.stringify(balance)}</p> */}
//     </div>
