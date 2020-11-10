import Web3 from "web3";

export const LoadWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable().then((val: any) => {
     console.log("val", val);
      window.localStorage.setItem("account", val);
    });
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    // DO NOTHING...
  }
};
