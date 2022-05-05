const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'disagree must voice surface broom flash else motor item powder lake alpha',
    'https://rinkeby.infura.io/v3/1a7fe401ed444925a0cd096f0f80ccf3'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]); 

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address ); //0x87E8389e8D62c4366Eb97a33fc9BF1d9b59f79Ac
    provider.engine.stop(); //preventing hanging deployment
};
deploy();
