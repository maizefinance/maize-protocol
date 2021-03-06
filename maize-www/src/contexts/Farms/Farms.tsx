import React, { useCallback, useEffect, useState } from 'react'

import { Contract } from 'web3-eth-contract'

import { yam as yamAddress } from '../../constants/tokenAddresses'
import useYam from '../../hooks/useYam'
import { getPoolContracts } from '../../yamUtils'

import Context from './context'
import { Farm } from './types'

const NAME_FOR_POOL: { [key: string]: string } = {
  yfi_pool: 'YFI Russian',
  yfii_pool: 'YFII Byelorussian',
  yamv2_pool: 'Yam Ukrainian',
  lend_pool: 'Lending Georgia',
  ycrv_pool: 'yCurve Azerbaijan',
  ampl_pool: 'Ample Armenian',
  uni_pool: 'Uni the Union',
  bsd95_pool: 'Big Balancer',
  moon_pool: 'To Da Moon',
}

const ICON_FOR_POOL: { [key: string]: string } = {
  yfi_pool: '🐻',
  yfii_pool:'🐗',
  yamv2_pool: '🎖️',
  lend_pool: '⛰️',
  ampl_pool: '🏕️',
  uni_pool: '🦄',
  ycrv_pool: '🚜',
  bsd95_pool: '🏦',
  moon_pool: '🌔',
}

const SORT_FOR_POOL: { [key: string]: number } = {
  yfii_pool: 4,  
  yfi_pool: 5,
  yamv2_pool: 8,
  lend_pool: 7,
  ampl_pool: 9,
  ycrv_pool: 6,
  uni_pool: 3,
  bsd95_pool: 2,
  moon_pool: 1,
}

const Farms: React.FC = ({ children }) => {

  const [farms, setFarms] = useState<Farm[]>([])
  const yam = useYam()

  const fetchPools = useCallback(async () => {
    const pools: { [key: string]: Contract} = await getPoolContracts(yam)

    const farmsArr: Farm[] = []
    const poolKeys = Object.keys(pools)

    for (let i = 0; i < poolKeys.length; i++) {
      const poolKey = poolKeys[i]
      const pool = pools[poolKey]
      let tokenKey = poolKey.replace('_pool', '')
      if (tokenKey === 'eth') {
        tokenKey = 'weth'
      }
      if (tokenKey === 'cream') {
        tokenKey = 'curve'
      }
      if (tokenKey === 'uni') {
        tokenKey = 'MAIZ_ETH_UNISWAP_LP'
      }
      if (tokenKey === 'taco') {
        continue;
      }
      if (tokenKey === 'bsd95') {
        tokenKey = 'BAL_MAIZ_ETH_95'
      }
      if (tokenKey === 'moon') {
        tokenKey = 'moonswap_lp'
      }
      //  else if (tokenKey === 'ampl') {
      //   tokenKey = 'ampl_eth_uni_lp'
      // } else if (tokenKey === 'scrv') {
      //   tokenKey = 'scrv_shrimp_uni_lp'
      // }

      // const method = pool.methods[tokenKey]
      try {
        let tokenAddress = ''
        // if (method) {
        //   tokenAddress = await method().call()
        // } 
        
        if (tokenKey === 'yfii') {
          tokenAddress = '0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83'
        }

        if (tokenKey === 'yfi') {
          tokenAddress = '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e'
        }

        if (tokenKey === 'lend') {
          tokenAddress = '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03'
        }

        if (tokenKey === 'yamv2') {
          tokenAddress = '0xAba8cAc6866B83Ae4eec97DD07ED254282f6aD8A'
        }

        if (tokenKey === 'ampl') {
          tokenAddress = '0xD46bA6D942050d489DBd938a2C909A5d5039A161'
        }

        if (tokenKey === 'ycrv') {
          tokenAddress = '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8'
        }
        //xixi

        
        // alert(tokenAddress);

        farmsArr.push({
          contract: pool,
          name: NAME_FOR_POOL[poolKey],
          depositToken: tokenKey,
          depositTokenAddress: tokenAddress,
          earnToken: 'MAIZ',
          earnTokenAddress: yamAddress,
          icon: ICON_FOR_POOL[poolKey],
          id: tokenKey,
          sort: SORT_FOR_POOL[poolKey]
        })
      } catch (e) {
        console.log(e)
        alert(e);
      }
    }
    farmsArr.sort((a, b) => a.sort < b.sort ? 1 : -1)
    setFarms(farmsArr)
  }, [yam, setFarms])

  useEffect(() => {
    if (yam) {
      fetchPools()
    }
  }, [yam, fetchPools])
  
  return (
    <Context.Provider value={{ farms }}>
      {children}
    </Context.Provider>
  )
}

export default Farms