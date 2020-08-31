import BigNumber from 'bignumber.js/bignumber';
import Web3 from 'web3';
import * as Types from "./types.js";
import { SUBTRACT_GAS_LIMIT, addressMap } from './constants.js';

import ERC20Json from '../clean_build/contracts/IERC20.json';
import YAMJson from '../clean_build/contracts/YAMDelegator.json';
import YAMRebaserJson from '../clean_build/contracts/YAMRebaser.json';
import YAMReservesJson from '../clean_build/contracts/YAMReserves.json';
import YAMGovJson from '../clean_build/contracts/GovernorAlpha.json';
import YAMTimelockJson from '../clean_build/contracts/Timelock.json';
import WETHJson from './weth.json';
import SNXJson from './snx.json';
import UNIFactJson from './unifact2.json';
import UNIPairJson from './uni2.json';
import UNIRouterJson from './uniR.json';

import WETHPoolJson from '../clean_build/contracts/YAMETHPool.json';
import CREAMPoolJson from '../clean_build/contracts/SHRIMPCREAMPool.json';
import YFIPoolJson from '../clean_build/contracts/YAMYFIPool.json';

import BalShrimpDai95Json from '../clean_build/contracts/BalShrimpDai95.json'
import BalShrimpDai80Json from '../clean_build/contracts/BalShrimpDai80.json'

import COMPPoolJson from '../clean_build/contracts/YAMCOMPPool.json';
import UNIPoolJson from '../clean_build/contracts/ShrimpUniPool.json';
import DICEPoolJson from '../clean_build/contracts/SHRIMPDICEPool.json';
import TACOPoolJson from '../clean_build/contracts/ShrimpTacoPool.json';
import ProposalJson from '../clean_build/contracts/Proposal.json';
import IncJson from '../clean_build/contracts/YAMIncentivizer.json';

export class Contracts {
  constructor(
    provider,
    networkId,
    web3,
    options
  ) {
    this.web3 = web3;
    this.defaultConfirmations = options.defaultConfirmations;
    this.autoGasMultiplier = options.autoGasMultiplier || 1.5;
    this.confirmationType = options.confirmationType || Types.ConfirmationType.Confirmed;
    this.defaultGas = options.defaultGas;
    this.defaultGasPrice = options.defaultGasPrice;

    this.uni_pair = new this.web3.eth.Contract(UNIPairJson);
    this.uni_router = new this.web3.eth.Contract(UNIRouterJson);
    this.uni_fact = new this.web3.eth.Contract(UNIFactJson);
    this.yfi = new this.web3.eth.Contract(ERC20Json.abi);
    this.UNIAmpl = new this.web3.eth.Contract(ERC20Json.abi);
    this.lend = new this.web3.eth.Contract(ERC20Json.abi);
    this.yfii = new this.web3.eth.Contract(ERC20Json.abi);
    this.ycrv = new this.web3.eth.Contract(ERC20Json.abi);
    this.yam = new this.web3.eth.Contract(YAMJson.abi);
    this.uni = new this.web3.eth.Contract(ERC20Json.abi);
    this.ampl = new this.web3.eth.Contract(ERC20Json.abi);
    this.yamv2 = new this.web3.eth.Contract(ERC20Json.abi);
    this.lend = new this.web3.eth.Contract(ERC20Json.abi);
    this.moon = new this.web3.eth.Contract(ERC20Json.abi);
    this.bsd95 = new this.web3.eth.Contract(ERC20Json.abi);

    this.yfi_pool = new this.web3.eth.Contract(YFIPoolJson.abi);
    this.yamv2_pool = new this.web3.eth.Contract(WETHPoolJson.abi);
    this.ycrv_pool = new this.web3.eth.Contract(CREAMPoolJson.abi);
    this.lend_pool = new this.web3.eth.Contract(COMPPoolJson.abi);
    this.yfii_pool = new this.web3.eth.Contract(DICEPoolJson.abi);
    this.ampl_pool = new this.web3.eth.Contract(TACOPoolJson.abi);
    this.uni_pool = new this.web3.eth.Contract(UNIPoolJson.abi);
    this.bsd95_pool = new this.web3.eth.Contract(BalShrimpDai95Json.abi)
    this.moon_pool = new this.web3.eth.Contract(BalShrimpDai80Json.abi)
    this.proposal = new this.web3.eth.Contract(ProposalJson.abi);
    
    this.erc20 = new this.web3.eth.Contract(ERC20Json.abi);

    this.rebaser = new this.web3.eth.Contract(YAMRebaserJson.abi);
    this.reserves = new this.web3.eth.Contract(YAMReservesJson.abi);
    this.gov = new this.web3.eth.Contract(YAMGovJson.abi);
    this.timelock = new this.web3.eth.Contract(YAMTimelockJson.abi);
    this.weth = new this.web3.eth.Contract(WETHJson);
    this.setProvider(provider, networkId);
    this.setDefaultAccount(this.web3.eth.defaultAccount);
  }


  setProvider(
    provider,
    networkId
  ) {
    this.yam.setProvider(provider);
    this.rebaser.setProvider(provider);
    this.reserves.setProvider(provider);
    this.gov.setProvider(provider);
    this.timelock.setProvider(provider);
    const contracts = [
      { contract: this.yam, json: YAMJson },
      { contract: this.rebaser, json: YAMRebaserJson },
      { contract: this.reserves, json: YAMReservesJson },
      { contract: this.gov, json: YAMGovJson },
      { contract: this.timelock, json: YAMTimelockJson },
      { contract: this.yamv2_pool, json: WETHPoolJson },
      { contract: this.yfi_pool, json: YFIPoolJson },
      { contract: this.ycrv_pool, json: CREAMPoolJson },
      { contract: this.yfii_pool, json: DICEPoolJson },
      { contract: this.lend_pool, json: COMPPoolJson },
      { contract: this.uni_pool, json: UNIPoolJson },
      { contract: this.ampl_pool, json: TACOPoolJson},
      { contract: this.bsd95_pool, json: BalShrimpDai95Json},
      { contract: this.moon_pool, json: BalShrimpDai80Json},
      // { contract: this.proposal, json: ProposalJson}
    ]

    contracts.forEach(contract => this.setContractProvider(
        contract.contract,
        contract.json,
        provider,
        networkId,
      ),
    );
    this.yfi.options.address = addressMap["YFI"];
    this.yamv2.options.address = addressMap["YAMV2"];
    this.lend.options.address = addressMap["LEND"];
    this.ampl.options.address = addressMap["AMPL"];
    this.bsd95.options.address = addressMap["BSD95"];
    this.moon.options.address = addressMap["MOON"];
    this.yfii.options.address = addressMap["YFII"];
    this.ycrv.options.address = addressMap["YCRV"];
    this.uni.options.address = addressMap["UNI"];
    this.uni_fact.options.address = addressMap["uniswapFactoryV2"];
    this.uni_router.options.address = addressMap["UNIRouter"];
    // this.shrimp_scrv_uni_lp.options.address = addressMap["SHRIMPsCRV"];

    this.pools = [
      {"tokenAddr": this.yfi.options.address, "poolAddr": this.yfi_pool.options.address},
      {"tokenAddr": this.yamv2.options.address, "poolAddr": this.yamv2_pool.options.address},
      {"tokenAddr": this.lend.options.address, "poolAddr": this.lend_pool.options.address},
      {"tokenAddr": this.yfii.options.address, "poolAddr": this.yfii_pool.options.address},
      {"tokenAddr": this.ycrv.options.address, "poolAddr": this.ycrv_pool.options.address},
      {"tokenAddr": this.uni.options.address, "poolAddr": this.uni_pool.options.address},
      {"tokenAddr": this.ampl.options.address, "poolAddr": this.ampl_pool.options.address},
      {"tokenAddr": this.bsd95.options.address, "poolAddr": this.bsd95_pool.options.address},
      {"tokenAddr": this.moon.options.address, "poolAddr": this.moon_pool.options.address},
    ]
  }

  setDefaultAccount(
    account
  ) {
    this.yfi.options.from = account;
    this.yfii.options.from = account;
    this.ycrv.options.from = account;
    this.yam.options.from = account;
    this.lend.options.from = account;
    this.yamv2.options.from = account;
    this.uni.options.from = account;
    this.ampl.options.from = account;
    this.bsd95.options.from = account;
    this.moon.options.from = account;
  }

  async callContractFunction(
    method,
    options
  ) {
    const { confirmations, confirmationType, autoGasMultiplier, ...txOptions } = options;

    if (!this.blockGasLimit) {
      await this.setGasLimit();
    }

    if (!txOptions.gasPrice && this.defaultGasPrice) {
      txOptions.gasPrice = this.defaultGasPrice;
    }

    if (confirmationType === Types.ConfirmationType.Simulate || !options.gas) {
      let gasEstimate;
      if (this.defaultGas && confirmationType !== Types.ConfirmationType.Simulate) {
        txOptions.gas = this.defaultGas;
      } else {
        try {
          console.log("estimating gas");
          gasEstimate = await method.estimateGas(txOptions);
        } catch (error) {
          const data = method.encodeABI();
          const { from, value } = options;
          const to = method._parent._address;
          error.transactionData = { from, value, data, to };
          throw error;
        }

        const multiplier = autoGasMultiplier || this.autoGasMultiplier;
        const totalGas = Math.floor(gasEstimate * multiplier);
        txOptions.gas = totalGas < this.blockGasLimit ? totalGas : this.blockGasLimit;
      }

      if (confirmationType === Types.ConfirmationType.Simulate) {
        let g = txOptions.gas;
        return { gasEstimate, g };
      }
    }

    if (txOptions.value) {
      txOptions.value = new BigNumber(txOptions.value).toFixed(0);
    } else {
      txOptions.value = '0';
    }

    const promi = method.send(txOptions);

    const OUTCOMES = {
      INITIAL: 0,
      RESOLVED: 1,
      REJECTED: 2,
    };

    let hashOutcome = OUTCOMES.INITIAL;
    let confirmationOutcome = OUTCOMES.INITIAL;

    const t = confirmationType !== undefined ? confirmationType : this.confirmationType;

    if (!Object.values(Types.ConfirmationType).includes(t)) {
      throw new Error(`Invalid confirmation type: ${t}`);
    }

    let hashPromise;
    let confirmationPromise;

    if (t === Types.ConfirmationType.Hash || t === Types.ConfirmationType.Both) {
      hashPromise = new Promise(
        (resolve, reject) => {
          promi.on('error', (error) => {
            if (hashOutcome === OUTCOMES.INITIAL) {
              hashOutcome = OUTCOMES.REJECTED;
              reject(error);
              const anyPromi = promi ;
              anyPromi.off();
            }
          });

          promi.on('transactionHash', (txHash) => {
            if (hashOutcome === OUTCOMES.INITIAL) {
              hashOutcome = OUTCOMES.RESOLVED;
              resolve(txHash);
              if (t !== Types.ConfirmationType.Both) {
                const anyPromi = promi ;
                anyPromi.off();
              }
            }
          });
        },
      );
    }

    if (t === Types.ConfirmationType.Confirmed || t === Types.ConfirmationType.Both) {
      confirmationPromise = new Promise(
        (resolve, reject) => {
          promi.on('error', (error) => {
            if (
              (t === Types.ConfirmationType.Confirmed || hashOutcome === OUTCOMES.RESOLVED)
              && confirmationOutcome === OUTCOMES.INITIAL
            ) {
              confirmationOutcome = OUTCOMES.REJECTED;
              reject(error);
              const anyPromi = promi ;
              anyPromi.off();
            }
          });

          const desiredConf = confirmations || this.defaultConfirmations;
          if (desiredConf) {
            promi.on('confirmation', (confNumber, receipt) => {
              if (confNumber >= desiredConf) {
                if (confirmationOutcome === OUTCOMES.INITIAL) {
                  confirmationOutcome = OUTCOMES.RESOLVED;
                  resolve(receipt);
                  const anyPromi = promi ;
                  anyPromi.off();
                }
              }
            });
          } else {
            promi.on('receipt', (receipt) => {
              confirmationOutcome = OUTCOMES.RESOLVED;
              resolve(receipt);
              const anyPromi = promi ;
              anyPromi.off();
            });
          }
        },
      );
    }

    if (t === Types.ConfirmationType.Hash) {
      const transactionHash = await hashPromise;
      if (this.notifier) {
          this.notifier.hash(transactionHash)
      }
      return { transactionHash };
    }

    if (t === Types.ConfirmationType.Confirmed) {
      return confirmationPromise;
    }

    const transactionHash = await hashPromise;
    if (this.notifier) {
        this.notifier.hash(transactionHash)
    }
    return {
      transactionHash,
      confirmation: confirmationPromise,
    };
  }

  async callConstantContractFunction(
    method,
    options
  ) {
    const m2 = method;
    const { blockNumber, ...txOptions } = options;
    return m2.call(txOptions, blockNumber);
  }

  async setGasLimit() {
    const block = await this.web3.eth.getBlock('latest');
    this.blockGasLimit = block.gasLimit - SUBTRACT_GAS_LIMIT;
  }

  setContractProvider(
    contract,
    contractJson,
    provider,
    networkId,
  ){
    contract.setProvider(provider);
    try {
      contract.options.address = contractJson.networks[networkId]
        && contractJson.networks[networkId].address;
    } catch (error) {
      // console.log(error)
    }
  }
}
