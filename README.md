# 🌽 Maize Protocol 
![](https://th.bing.com/th/id/OIP.oQZ_32LCDIQCXjhxCkJGbQHaFt?w=216&h=180&c=7&o=5&pid=1.7)
#### *A holder holding Maize*
   　  
-----
#### No Pre-mine, No Founder Fee, No Cheats

## The Protocol
During the 50s, maize has helped the Soviet Union to grow into a great empire under the leadership of the famous corn crusader, Nikita Khrushchev. Now, maize has returned to help defi industry to evolvo to the next stage!

Of course, the $MAIZ token combines the rules of Ampleforth’s economic policy with YFI’s distribution mechanism. However, the form of the rebase and the future of this token is in your hands. At Day 0, 150,000 $MAIZ will be released equally in six pools, and the mining will last for one week. At Day 1, another 150,000 $MAIZ will be released equally in three LP pools. Finally, after Day 2, the address holding the most amount of $MAIZ will decide the furture of this project.

**exact tiem of Day 0 is: 06/Sept/2020 12:00:00 (UTC+0)**

> After 08/Sept/2020 00:00:00 (UTC+0), anyone who holds more $MAIZ than the current owner can claim the ownership immediately.

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
        require(block.timestamp > 1599494400); //08/Sept/2020 00:00:00 (UTC+0)
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
Token Distribution starts at: 06/Sept/2020 12:00:00 (UTC+0)  
Token Distribution:
* AMPL pool: 8%    06/Sept/2020 12:00:00 (UTC+0)  
* YamV2 pool: 8%   06/Sept/2020 12:00:00 (UTC+0)  
* LEND pool: 8%    06/Sept/2020 12:00:00 (UTC+0)  　　　　
* yCurve pool: 8%    06/Sept/2020 12:00:00 (UTC+0)  
* yfi pool: 8%   06/Sept/2020 12:00:00 (UTC+0)  
* yfii pool: 8%    06/Sept/2020 12:00:00 (UTC+0) 
* uniswap maiz-eth LP pool: 16%    08/Sept/2020 00:00:00 (UTC+0)  
* balancer maiz95-eth5 pool: 16%   08/Sept/2020 00:00:00 (UTC+0)  
* moonswap maiz-eth LP pool: 16%   08/Sept/2020 00:00:00 (UTC+0) 　　　　　　　


## Smart Contracts
$MAIZ ERC20 Address: [0x9b42c461E4397D7880dAb88c8bB3D3cfC94b353A](https://etherscan.io/token/0x9b42c461E4397D7880dAb88c8bB3D3cfC94b353A)  

Pool - AMPL - [Smart Contract](https://etherscan.io/address/0x1172ab3f0cb3f53baf86a274cc770dcd56db850a)  
Pool - YamV2 - [Smart Contract](https://etherscan.io/address/0x4ba62908e1cDB15Fa79F5c764e13c92c7d5d2DC4)  
Pool - LEND  - [Smart Contract](https://etherscan.io/address/0xa9fe70323bfe612E7D532af918eF60DA0a33E5A9)  
Pool - yCurve - [Smart Contract](https://etherscan.io/address/0xce900f935d5F7c881e3AEaEf1e6675F944A1dA52)  
Pool - yfi - [Smart Contract](https://etherscan.io/address/0xb2906bC3872a378Fd47CE376Ae00c41cbC7A680C)  
Pool - yfii - [Smart Contract](https://etherscan.io/address/0x5fe411EA3f3c47885C99880B7B21F9953ba83831)  
Pool - uniswap - pending
Pool - balancer - pending
Pool - moonswap - pending 

$MAIZ keeper Address: [0xB2166e079a6424Fc7b136AE8AA87380fC2Cc7A73](https://etherscan.io/token/0xB2166e079a6424Fc7b136AE8AA87380fC2Cc7A73)

## Notes
Currently the $MAIZ pools for LP tokens are not deployed yet, the fund (150,000 $MAIZ) ~~is temporally held by the deployer (0x6377624c3307a7e3Db13805e9aDdaE90552082AF).~~  
The fund for LP pools (150,000 $MAIZ) is now kept safely in the MAIZ keeper contract (0xB2166e079a6424Fc7b136AE8AA87380fC2Cc7A73). On 08/Sept/2020 00:00:00 (UTC+0), the leader of $MAIZ will arrive and see to it that these funds are transferred to LP pools. 
The leader can be anyone, as long as he holds the most $MAIZ.

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
