require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/H6_HSQthPkUx5pL6Rb38r-SUbgDJrM6a",
      accounts: [
        "62f5196b5ae1a069f4478f99cdc17e0aade1a035d163191d8f4fee794861eeaa",
      ],
    },
  },
};
