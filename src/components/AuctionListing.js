// import { useWeb3 } from "@3rdweb/hooks";
// import { useMemo, useEffect, useState } from "react";
// import { ThirdwebSDK } from "@3rdweb/sdk";
// import React from "react";

// export default function AuctionGallery () {
//   const { provider } = useWeb3();
//   const sdk = useMemo(
//     () =>
//       provider ? new ThirdwebSDK(provider.getSigner()) : new ThirdwebSDK(),
//     [provider]
//   );
//   const market = useMemo(
//     () =>
//       sdk.getMarketplaceModule("0xf4e8C436d87Bd4cB1416E474948105FdF80BB6A0"),
//     [sdk]
//   );

//   const [balance, setBalance] = useState([]);

//   useEffect(() => {
//     const getMyListing = async () => {
//       const Listings = await market.getAllListings();
//       setBalance(Listings);
//     };

//     if (market) {
//       getMyListing();
//     }
//   }, [market]);

//   console.log(balance);

//   const balanceId = balance.map((balId) => {
//     return balId.id;
//   });

//   console.log(balanceId);

//   const balURL = balance.map((bUrl) => {
//     return bUrl.asset.image;
//   });

//   return (
//     <div>
//       <p>My Listing: {JSON.stringify(balanceId)}</p>
//       <p>My Listing: {JSON.stringify(balURL)}</p>
//     </div>
//   );
// };
