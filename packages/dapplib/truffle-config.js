require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture infant forget seed edge rare remember solid imitate private food text'; 
let testAccounts = [
"0x4101cb082040257f206a79f350d35ceaa55cfaa84ce08250a91d2b8557872c61",
"0x481acb6fd07215e495ac659e87d56e792129a4322e5388bcf5e0f9ce08c8c33d",
"0x5a23bf3eb3a2e8bdf06b2e9a91368b50e60fd1090983347ddfa1a6a57b365c73",
"0xd9df297613dd9f14d5cb631ba0ad9349d6160a44b837f529fd0a38320fca72a6",
"0x483f97eabf45411cced0b8b4360ad488809d7fd2aa20e2a4b4c705546797a574",
"0xfab0d04ea28cdf22c4d89338155bb433709477b2d67b44fb35dce3b4cbc54361",
"0x86321899b90cf4610265199d9927536a7ac51cca60678bedb30694cdaa3df1db",
"0xcd63ba0acc3307e878945c4bb9e80eda9cbe3fc3c705eb537d6a5311fe988b1b",
"0x61dbbf59777a02ff8bc4b3b2b5cb1fc79d8f461fffe94606719087a603804de9",
"0x89836812dae24653da338497752d2987a1a2bb4bed3ecdcbea2dac5845953e73"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

