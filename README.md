# 🌽 Maize Protocol 
![](https://th.bing.com/th/id/OIP.oQZ_32LCDIQCXjhxCkJGbQHaFt?w=216&h=180&c=7&o=5&pid=1.7)
#### *Maize in your hand*
   　  
-----
#### No Pre-mine, No Founder Fee, No Cheats

## The Protocol
During the 50s, maize has helped the Soviet Union to grow into a great empire under the leadership of the famous corn crusader, Nikita Khrushchev. Now, maize has returned to help defi industry to evolvo to the next stage!

Of course, the $MAIZ token combines the rules of Ampleforth’s economic policy with YFI’s distribution mechanism. However, the form of the rebase and the future of this token is in your hands. At Day 0, 150,000 $MAIZ will be released equally in six pools, and the mining will last for one week. At Day 1, another 150,000 $MAIZ will be released equally in three LP pools. Finally, after Day 2, the address holding the most amount of $MAIZ will decide the furture of this project.

**exact tiem of Day 0 is: 2020/09/04 12:00:00 (UTC+0)**

> After 2020/09/06 12:00:00 (UTC+0), anyone who holds more $MAIZ than the current owner can claim the ownership immediately.

> Before that time, the owner is set to 0x0.

> Owner can not mint, but he shall decide how the rebase happens.

[More Info](https://github.com/Zombie-Finance/zombie-protocol/wiki/Doomsday-Prophecy---What-is-Doomsday-Clock-and-Debase%3F) for the doomsday

## $MAIZ is in your hands!

Who will lead defi to the final success? It is us the PEOPLE who hold tokens! Trust $MAIZ, trust THE holder!


![](https://th.bing.com/th/id/OIP.NbTFHjBbIgHnsmGninftWQHaFr?w=229&h=180&c=7&o=5&pid=1.7)
**~~The big holder will lead everyone~~**


> check out this line in the contract of the $MAIZ **who holds the most $MAIZ owns $MAIZ**
```
function claimGov()
        external
    {
        require(_yamBalances[msg.sender] > _yamBalances[gov], "!notEnough");
        address oldGov = gov;
        gov = msg.sender;
        emit NewGov(oldGov, gov);
    }
```

## Community Launch & Token Distribution
The $MAIZ token has 9 separate staking pools.

Total supply: 300,000 $MAIZ  
Token Distribution Period: 1 Weeks  
Token Distribution starts at: 2020/09/4 12:00:00 (UTC+0)  
Token Distribution:
* AMPL pool: 8%    2020/09/4 12:00:00 (UTC+0)  
* YamV2 pool: 8%   2020/09/4 12:00:00 (UTC+0)  
* LEND pool: 8%    2020/09/4 12:00:00 (UTC+0)  　　　　
* yCurve pool: 8%    2020/09/4 12:00:00 (UTC+0)  
* yfi pool: 8%   2020/09/4 12:00:00 (UTC+0)  
* yfii pool: 8%    2020/09/4 12:00:00 (UTC+0) 
* uniswap maiz-eth LP pool: 16%    2020/09/5 12:00:00 (UTC+0)  
* balancer maiz95-eth5 pool: 16%   2020/09/5 12:00:00 (UTC+0)  
* moonswap maiz-eth LP pool: 16%    2020/09/5 12:00:00 (UTC+0) 　　　　　　　


## Smart Contracts
$MAIZ ERC20 Address: [pending](https://etherscan.io/token/)  

Pool - AMPL - [Smart Contract](https://etherscan.io/address/)  
Pool - YamV2 - [Smart Contract](https://etherscan.io/address/)  
Pool - LENDp  - [Smart Contract](https://etherscan.io/address/)  
Pool - yCurve - [Smart Contract](https://etherscan.io/address/)  
Pool - yfi - [Smart Contract](https://etherscan.io/address/)  
Pool - yfii - [Smart Contract](https://etherscan.io/address/)  
Pool - uniswap - [Smart Contract](https://etherscan.io/address/)  
Pool - balancer - [Smart Contract](https://etherscan.io/address/)  
Pool - moonswap - [Smart Contract](https://etherscan.io/address/)  


## Governance
The big holder is watching all of you!


## Audits

None. Contributors have given their best efforts to ensure the security of these contracts, but make no guarantees. It has been spot checked by just a few pairs of eyes. It is a probability - not just a possibility - that there are bugs. That said, minimal changes were made to the staking/distribution contracts that have seen hundreds of millions flow through them via SNX, YFI, and YFI derivatives. The reserve contract is excessively simple as well. We prioritized staked assets' security first and foremost.


If you feel uncomfortable with these disclosures, don't stake or hold Maize. If the big holder wants to fund an audit, or the community is gifted an audit, there is no assumption that the original devs will be around to implement fixes, and is entirely at their discretion.



#### Attributions
Much of this codebase is modified from existing works, including:

[Ampleforth](https://ampleforth.org) - Initial rebasing mechanism, modified to better suit the YAM protocol

[Synthetix](https://synthetix.io) - Rewards staking contract

[YEarn](https://yearn.finance)/[YFI](https://ygov.finance) - Initial fair distribution implementation
