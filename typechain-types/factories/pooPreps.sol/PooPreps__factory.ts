/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { PooPreps, PooPrepsInterface } from "../../pooPreps.sol/PooPreps";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "MaxCumulativeBalanceExceeded",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "_abTrigger",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "_exponentialInc",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getController",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getMaxCumulativeBalanceForAccount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRouterAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "remainingAllowedBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "setController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "setRouterAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50600080546001600160a01b03191633179055604080518082019091526009815268506f6f20507265707360b81b60208201526008906200005390826200034c565b50604080518082019091526002815261050560f41b60208201526009906200007c90826200034c565b50600a805460ff19166012178155336000908152600160209081526040918290206c054e739ef2d4e77128a290000090819055600455600780546001600160a81b03191674c36442b4a4522e871399cd717abdd847ab11fe8800179055815161036081018352928352600f90830152601490820152601e606082015260326080820152604b60a0820152606460c082015261012c60e08201526101f46101008201526102586101208201526102bc61014082015261032061016082018190526103e86101808301526107d06101a0830152610fa06101c08301526117706101e0830152611f40610200830152612710610220830152613a98610240830152614e2061026083015261c350610280830152620138806102a0830152620186a06102c083015262030d406102e0830152620493e061030083015262061a80908201526207a120610340820152620001d690600690601b620001dd565b5062000418565b82805482825590600052602060002090600901600a900481019282156200027e5791602002820160005b838211156200024b57835183826101000a81548162ffffff021916908362ffffff160217905550926020019260030160208160020104928301926001030262000207565b80156200027c5782816101000a81549062ffffff02191690556003016020816002010492830192600103026200024b565b505b506200028c92915062000290565b5090565b5b808211156200028c576000815560010162000291565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620002d257607f821691505b602082108103620002f357634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200034757600081815260208120601f850160051c81016020861015620003225750805b601f850160051c820191505b8181101562000343578281556001016200032e565b5050505b505050565b81516001600160401b03811115620003685762000368620002a7565b6200038081620003798454620002bd565b84620002f9565b602080601f831160018114620003b857600084156200039f5750858301515b600019600386901b1c1916600185901b17855562000343565b600085815260208120601f198616915b82811015620003e957888601518255948401946001909101908401620003c8565b5085821015620004085787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610e9180620004286000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806370a08231116100ad578063cc6862f811610071578063cc6862f81461027f578063d54f7d5e1461028c578063dd62ed3e14610294578063f45e907e146102cd578063fee406d5146102e057600080fd5b806370a082311461021557806392eefe9b1461023e57806395d89b4114610251578063a457c2d714610259578063a9059cbb1461026c57600080fd5b80633018205f116100f45780633018205f1461018c578063313ce567146101b157806339509351146101c657806341cb87fc146101d95780636dcc431f146101ee57600080fd5b806306fdde0314610126578063095ea7b31461014457806318160ddd1461016757806323b872dd14610179575b600080fd5b61012e6102f3565b60405161013b9190610bda565b60405180910390f35b610157610152366004610c44565b610385565b604051901515815260200161013b565b6004545b60405190815260200161013b565b610157610187366004610c6e565b61039c565b6000546001600160a01b03165b6040516001600160a01b03909116815260200161013b565b600a5460405160ff909116815260200161013b565b6101576101d4366004610c44565b6103ed565b6101ec6101e7366004610caa565b610423565b005b6102016101fc366004610cc5565b61047e565b60405162ffffff909116815260200161013b565b61016b610223366004610caa565b6001600160a01b031660009081526001602052604090205490565b6101ec61024c366004610caa565b6104b7565b61012e610585565b610157610267366004610c44565b610594565b61015761027a366004610c44565b6105ca565b6007546101579060ff1681565b6101996105d7565b61016b6102a2366004610cde565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205490565b61016b6102db366004610caa565b610617565b61016b6102ee366004610caa565b61067a565b60606008805461030290610d11565b80601f016020809104026020016040519081016040528092919081815260200182805461032e90610d11565b801561037b5780601f106103505761010080835404028352916020019161037b565b820191906000526020600020905b81548152906001019060200180831161035e57829003601f168201915b5050505050905090565b6000610392338484610815565b5060015b92915050565b60006103a984848461093a565b6001600160a01b0384166000908152600360209081526040808320338085529252909120546103e39186916103de9086610b6a565b610815565b5060019392505050565b3360008181526003602090815260408083206001600160a01b038716845290915281205490916103929185906103de9086610b86565b6000546001600160a01b031633146104565760405162461bcd60e51b815260040161044d90610d4b565b60405180910390fd5b600780546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b6006818154811061048e57600080fd5b90600052602060002090600a9182820401919006600302915054906101000a900462ffffff1681565b6000546001600160a01b031633146104e15760405162461bcd60e51b815260040161044d90610d4b565b6001600160a01b03811661052a5760405162461bcd60e51b815260206004820152601060248201526f4552525f5a45524f5f4144445245535360801b604482015260640161044d565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b60606009805461030290610d11565b3360008181526003602090815260408083206001600160a01b038716845290915281205490916103929185906103de9086610b6a565b600061039233848461093a565b600080546001600160a01b031633146106025760405162461bcd60e51b815260040161044d90610d4b565b5060075461010090046001600160a01b031690565b6000806106238361067a565b6001600160a01b038416600090815260026020526040902054909150811115610671576001600160a01b03831660009081526002602052604090205461066a908290610b6a565b9392505050565b50600092915050565b60075460009060ff1615806106a8575060196005544361069a9190610d8d565b6106a5906001610da0565b10155b156106b557600454610396565b6040516bffffffffffffffffffffffff19606084901b16602082015269038f98e1390378c00000906000906034016040516020818303038152906040529050600081600183516107059190610d8d565b8151811061071557610715610db3565b016020015160f81c90506001600682900361073257506032610797565b8160ff166098036107455750602d610797565b8160ff1660aa0361075857506030610797565b8160ff1660c10361076b5750602a610797565b8160ff1660da0361077e5750602c610797565b610789603183610ddf565b610794906001610e01565b90505b61080b8160ff166108056006600554436107b19190610d8d565b6107bc906001610da0565b815481106107cc576107cc610db3565b90600052602060002090600a91828204019190066003029054906101000a900462ffffff1662ffffff1687610ba490919063ffffffff16565b90610ba4565b9695505050505050565b6001600160a01b0383166108775760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161044d565b6001600160a01b0382166108d85760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161044d565b6001600160a01b0383811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b03831661099e5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161044d565b6001600160a01b038216610a005760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161044d565b60075460ff168015610a195750610a1682610617565b81115b15610a3757604051635f8c625960e01b815260040160405180910390fd5b60075460ff16158015610a5757506c03c95a2f0b4856475fe00000008110155b15610a7257610a72436005556007805460ff19166001179055565b6001600160a01b038316600090815260016020526040902054610a959082610b6a565b6001600160a01b038085166000908152600160205260408082209390935590841681522054610ac49082610b86565b6001600160a01b03831660009081526001602052604090205560075460ff1615610b25576001600160a01b038216600090815260026020526040902054610b0b9082610b86565b6001600160a01b0383166000908152600260205260409020555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161092d91815260200190565b600082821115610b7c57610b7c610e1a565b61066a8284610d8d565b6000610b928284610da0565b90508281101561039657610396610e1a565b600082600003610bb657506000610396565b610bc08284610e30565b905081610bcd8483610e47565b1461039657610396610e1a565b600060208083528351808285015260005b81811015610c0757858101830151858201604001528201610beb565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610c3f57600080fd5b919050565b60008060408385031215610c5757600080fd5b610c6083610c28565b946020939093013593505050565b600080600060608486031215610c8357600080fd5b610c8c84610c28565b9250610c9a60208501610c28565b9150604084013590509250925092565b600060208284031215610cbc57600080fd5b61066a82610c28565b600060208284031215610cd757600080fd5b5035919050565b60008060408385031215610cf157600080fd5b610cfa83610c28565b9150610d0860208401610c28565b90509250929050565b600181811c90821680610d2557607f821691505b602082108103610d4557634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526012908201527122a9292fa727aa2fa1a7a72a2927a62622a960711b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561039657610396610d77565b8082018082111561039657610396610d77565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601260045260246000fd5b600060ff831680610df257610df2610dc9565b8060ff84160691505092915050565b60ff818116838216019081111561039657610396610d77565b634e487b7160e01b600052600160045260246000fd5b808202811582820484141761039657610396610d77565b600082610e5657610e56610dc9565b50049056fea264697066735822122025b10d9e6a06ee866d6512f4035de6d1473d5023774782f18b55b927d1d686ef64736f6c63430008120033";

type PooPrepsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PooPrepsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PooPreps__factory extends ContractFactory {
  constructor(...args: PooPrepsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PooPreps> {
    return super.deploy(overrides || {}) as Promise<PooPreps>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PooPreps {
    return super.attach(address) as PooPreps;
  }
  override connect(signer: Signer): PooPreps__factory {
    return super.connect(signer) as PooPreps__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PooPrepsInterface {
    return new utils.Interface(_abi) as PooPrepsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PooPreps {
    return new Contract(address, _abi, signerOrProvider) as PooPreps;
  }
}
