require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy radar oven pulse idea entire slot gas'; 
let testAccounts = [
"0x6cf148c2f03a168966b2a527a5c969fa0813ab997ef9264135e1c8fa2f021446",
"0x9ca9af0a3ce1d5f01e439714e26a4704a8caf6b38161aaf002ade21f1e8f106c",
"0x69324cf13be9ab6b3dcb034131e7dea41c65b8a9d84784812e784d8568d97ee0",
"0xe4bf373f1ef78be13c34bd80bf7230fd7310d4a61ddf4986efb076de9f8391e9",
"0xefb8a8fe5ef5e8892d19000cf25f74d325ab7c2f7a0bf437e39bd3876adb2888",
"0x36c05dc4d99eb6e99d1623ce0b8ad889bfbcbb0a59164fed993bd6fad361c41f",
"0x448fd622b0ba7c9ba31c6b05e6e1d65f981d928fbf7503cf0385bd5120588084",
"0xe885809df59ffc1dcd04393834e565cb67131b9408233f3d9164b64eec206649",
"0x1fcf08fef98d29282cf15220265e881771f2079a8d27c57e8197e220c1cde4d6",
"0x232fa37dbbda5cb13c2ffe48a740fa6626a3617806ba687e4522f8422bd1c963"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

