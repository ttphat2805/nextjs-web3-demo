import WalletConnectProvider from "@walletconnect/web3-provider/dist/cjs";

export const options = new WalletConnectProvider({
  rpc: {
    137: "https://matic-mainnet.chainstacklabs.com",
  },
  infuraId: process.env.INFURAID,
});
