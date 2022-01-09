// // Importing libraries
// import { ThirdwebSDK } from "@3rdweb/sdk";
// import { ethers } from "ethers";

// //Importing private key
// require("dotenv").config();

// //Instantiate 3rdweb SDK
// const sdk = new ThirdwebSDK(
//   new ethers.Wallet(
//     // Your wallet private key
//     process.env.PRIVATE_KEY as string,
//     // RPC URL, we'll use Polygon Mumbai
//     ethers.getDefaultProvider("https://rpc-mumbai.maticvigil.com")
//   )
// );
// console.log(sdk);
// //const token = sdk.getTokenModule("0x74846071E984C0039c597b0f3975814d111eF5F6");

// // const balance = async () => {
// //   await token.balance()};
// // console.log(balance);

// const token = sdk.getTokenModule("0x0d5fb8942eEa62093944F3e91C6Ac4e584336741");
// async function test() {
//   const balance = await token.balance();
//   console.log(balance);
// }
// test();

import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";

//Importing private key
require("dotenv").config();

//Instantiate 3rdweb SDK
const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    // Your wallet private key
    process.env.PRIVATE_KEY as string,
    // RPC URL, we'll use Polygon Mumbai
    ethers.getDefaultProvider("https://rinkeby-light.eth.linkpool.io/")
  )
);

const token = sdk.getMarketplaceModule(
  "0xf4e8C436d87Bd4cB1416E474948105FdF80BB6A0"
);
async function test() {
  const balance = await token.getAllListings();
  console.log(balance);
}
test();

const balance = token.getAllListings();

export default balance;

//npx ts-node
