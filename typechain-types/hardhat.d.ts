/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IZklabV1Callee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IZklabV1Callee__factory>;
    getContractFactory(
      name: "IZklabV1ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IZklabV1ERC20__factory>;
    getContractFactory(
      name: "IZklabV1Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IZklabV1Factory__factory>;
    getContractFactory(
      name: "IZklabV1Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IZklabV1Pair__factory>;
    getContractFactory(
      name: "ZklabV1ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZklabV1ERC20__factory>;
    getContractFactory(
      name: "ZklabV1Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZklabV1Factory__factory>;
    getContractFactory(
      name: "ZklabV1Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZklabV1Pair__factory>;
    getContractFactory(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnable__factory>;
    getContractFactory(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnable__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IArrayV1Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IArrayV1Factory__factory>;
    getContractFactory(
      name: "IArrayV1Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IArrayV1Pair__factory>;
    getContractFactory(
      name: "IArrayV1Router01",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IArrayV1Router01__factory>;
    getContractFactory(
      name: "IArrayV1Router02",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IArrayV1Router02__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IWETH",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWETH__factory>;
    getContractFactory(
      name: "Router02",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Router02__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnable__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "TestToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestToken__factory>;
    getContractFactory(
      name: "WETH9",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WETH9__factory>;

    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IZklabV1Callee",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IZklabV1Callee>;
    getContractAt(
      name: "IZklabV1ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IZklabV1ERC20>;
    getContractAt(
      name: "IZklabV1Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IZklabV1Factory>;
    getContractAt(
      name: "IZklabV1Pair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IZklabV1Pair>;
    getContractAt(
      name: "ZklabV1ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ZklabV1ERC20>;
    getContractAt(
      name: "ZklabV1Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ZklabV1Factory>;
    getContractAt(
      name: "ZklabV1Pair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ZklabV1Pair>;
    getContractAt(
      name: "IOwnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnable>;
    getContractAt(
      name: "IOwnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnable>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IArrayV1Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IArrayV1Factory>;
    getContractAt(
      name: "IArrayV1Pair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IArrayV1Pair>;
    getContractAt(
      name: "IArrayV1Router01",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IArrayV1Router01>;
    getContractAt(
      name: "IArrayV1Router02",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IArrayV1Router02>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IWETH",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWETH>;
    getContractAt(
      name: "Router02",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Router02>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IOwnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnable>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "TestToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestToken>;
    getContractAt(
      name: "WETH9",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WETH9>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
