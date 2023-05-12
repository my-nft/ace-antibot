import { ethers } from "hardhat";

async function main(hre: HardhatRuntimeEnvironment) {

  // const [deployer] = await ethers.getSigners();
  // const wallet = new Wallet("215f466b3e435d7ce15f03dae4d1ef774eb7598945c41d887c1e70d474fdc2b6");

  // const privkey = "215f466b3e435d7ce15f03dae4d1ef774eb7598945c41d887c1e70d474fdc2b6"

  // const deployer = new Deployer(hre, wallet);

  // const provider = new Provider("https://sepolia.infura.io/v3/b6271a54103e430fbc6d2ec56ff98755"); // using default http://localhost:8545

  // const signer = new ethers.Wallet(privkey, provider)

  const [deployer] = await ethers.getSigners();

  const factoryArtifact = await ethers.getContractFactory("ZklabV1Factory");

  const routerArtifact = await ethers.getContractFactory("Router02");

  const tokenArtifact = await ethers.getContractFactory("TestToken");


  ////////////// deploy weth /////////////////
  // const wethArtifact = await ethers.getContractFactory("WETH9");

  // const wethInstance = await wethArtifact.deploy();

  // await wethInstance.deployed();

  // console.log("deployer address: ", deployer.address);

  // console.log("wethInstance: ", wethInstance.address);

  ////////////// deploy factory /////////////////

  // const factoryInstance = await factoryArtifact.deploy(deployer.address);

  // await factoryInstance.deployed();

  // console.log("factoryInstance: ", factoryInstance.address);

  ////////////// deploy factory /////////////////

  // const routerInstance = await routerArtifact.deploy(factoryInstance.address, wethInstance.address);

  // await routerInstance.deployed();
  
  // console.log("routerInstance: ", routerInstance.address);

  ////////////// deploy token /////////////////

  const tokenInstance = await tokenArtifact.deploy("test token", "tt");

  await tokenInstance.deployed();
  
  console.log("tokenInstance: ", tokenInstance.address);

  /////////////// addresses //////////

  const routerAddress = "0x980aCF80570e0895A3e03D8786A4cCB7C94408b2";
  const factoryAddress = "0xE5D0eB12257DFE3b17b34f758efD7c6631f97017";
  const wethAddress = "0x1dDaBBFF083301E937b24fA4C31ebCb9c695F39c";
  const tokenAddress = tokenInstance.address;//"0x2529c9De9d39B4fd354B90927c83A82d5Bd6a552";

  ////////////// load contracts ///////////

  
  const hardhat = require("hardhat");
  const routerArtifact2 = await hardhat.artifacts.readArtifact("Router02");

  const routerInstance = new ethers.Contract(
    factoryAddress,
    routerArtifact2["abi"],
    deployer
  );

  // const tokenArtifact2 = await hardhat.artifacts.readArtifact("TestToken");

  // const tokenInstance = new ethers.Contract(
  //   tokenAddress,
  //   tokenArtifact2["abi"],
  //   deployer
  // );


  ///////////// add liquidity //////////////////

  const tokenLiquidity = "1000000000000000000000";

  const tokenMinLiquidity = "10000000000000000000";

  const ethLiquidity = "10000000000000000";

  const ethMinLiquidity = "1000";

  const tokenApprove = await tokenInstance.approve(
    routerAddress, 
    tokenLiquidity
  )

  await tokenApprove.wait();

  // console.log("tokenApprove: ", tokenApprove);

  console.log("tokenAddress: ", tokenAddress);
  console.log("tokenLiquidity: ", tokenLiquidity);
  console.log("tokenMinLiquidity: ", tokenMinLiquidity);
  console.log("ethMinLiquidity: ", ethMinLiquidity);
  console.log("deployer.address: ", deployer.address);
  console.log("ethLiquidity: ", ethLiquidity);

  const addLiquidityETH = await routerInstance.addLiquidityETH(
    tokenAddress,
    tokenLiquidity,
    tokenMinLiquidity,
    ethMinLiquidity,
    deployer.address,
    "6000000000000000",
    {
      value: ethLiquidity,
      gasLimit: 4000000,
    } 
  );
  
  await addLiquidityETH.wait();

  console.log("addLiquidityETH: ", addLiquidityETH);

  const swapEthAmount = "100000000000000";

  const routes = [
    wethAddress,
    tokenInstance.address
  ];

  const swapExactETHForTokens = await routerInstance.swapExactETHForTokens(
    "0",
    routes,
    deployer.address,
    "100000000000000",
    {
      value: swapEthAmount,
      gasLimit: 500000,
    }
  ) 

  await swapExactETHForTokens.wait();

  const routes2 = [
    tokenInstance.address,
    wethAddress
  ];

  const swapTokensAmount = "10000000000000000000";

  const tokenApprove2 = await tokenInstance.approve(
    routerAddress, 
    swapTokensAmount
  )

  await tokenApprove2.wait();
  const swapExactTokensForETH = await routerInstance.swapExactTokensForETH(
    swapTokensAmount,
    "0",
    routes2,
    deployer.address,
    "100000000000000",
    {
      gasLimit: 500000,
    }
  ) 

  await swapExactETHForTokens.wait();

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
