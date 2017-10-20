---
title: Ellaism
feature_text: |
  ## Ellaism
  An Ethereum-like Network With No Premine and No Contentious Hard Forks
feature_image: "https://unsplash.it/1300/400?image=1026"
excerpt: |
  Ellaism is an Ethereum-like network. Features include:
  * No pre-mine.
  * No contentious hard forks. Stability is a feature.
  * Monetary policy. A reduction of 20% mining rewards happens every 10 million blocks.
  * No difficulty bomb.
  * Replay protection enabled by default.
---

Ellaism is an Ethereum-like network. Features include:

* No pre-mine.
* No contentious hard forks. Stability is a feature.
* Monetary policy. A reduction of 20% mining rewards happens every 10 million blocks.
* No difficulty bomb.
* Replay protection enabled by default.

{% include button.html text="Github" icon="github" link="https://github.com/ellaism" color="#0366d6" %} {% include button.html text="Twitter" icon="twitter" link="https://twitter.com/EllaismCoin" color="#1DA1F2" %} {% include button.html text="Donate" link="https://github.com/ellaism/meta/blob/master/donations.md" color="#333333" %}

## Links

* [Principles of Ellaism](/principles/)
* Github: [https://github.com/ellaism](https://github.com/ellaism)
* Stats: [http://stats.ellaism.org](http://stats.ellaism.org)
* Explorer: [https://explorer.ellaism.org](https://explorer.ellaism.org)
* IRC: [#ellaism](http://webchat.freenode.net/?channels=ellaism)
* Twitter: [@EllaismCoin](https://twitter.com/EllaismCoin)
* [Discord community](https://discord.gg/66Pn9jn)
* [Ellaism Dev Mining Pool](https://pool.ellaism.org)
* [Ellaism Pool Sexy](http://ella.pool.sexy)
* [Ella Minerpool](http://ella.minerpool.net)
* [Ellaism Name System](http://ens.ellaism.org)
* [BTC Relay](https://github.com/ellaism/btcrelay) ([Status](http://ellaism.org/btcrelay))
* [Web Wallet](https://ellaism.github.io/ellawallet)

## Exchanges

* [Cryptobroker](https://trade.cryptobroker.io/markets/ellabtc)
* [Bisq](https://bisq.network/). Ellaism support not yet released, but will be there in the near future.

## Pools

* [Ellaism Pool Sexy](http://ella.pool.sexy)
* [Ellaism Dev Mining Pool](https://pool.ellaism.org)
* [Ella Minerpool](http://ella.minerpool.net)

## Volunteer

There is no premine and the coin is totally community-driven. Help wanted to keep this coin alive [https://github.com/ellaism/meta/issues](https://github.com/ellaism/meta/issues).

## Installation

Install Parity from Parity's official website ([https://github.com/paritytech/parity/releases](https://github.com/paritytech/parity/releases)). Download the Ellaism config file ([https://raw.githubusercontent.com/ellaism/parity-config/master/ellaism.json](https://raw.githubusercontent.com/ellaism/parity-config/master/ellaism.json)). Run Parity with `parity --chain /path/to/ellaism.json` (if you are on Windows, that would be `parity --chain X:\path\to\ellaism.json`).

## Mining

With a Parity client running, you can use any ethash miner (such as [ethminer](https://github.com/ethereum-mining/ethminer)) to mine Ellasim. To mine using your GPU, run `ethminer -G -F http://localhost:8545`.

## Basic Information

* Coin generation: 5 Ella per block with 20% reward reduction happens every 10 million blocks.
* Network ID and chain ID is 0x40.
* Most other parameters are the same as Ethereum.

## Total Supply

Below you will find an analysis of the total supply. The coin unit "Ella" is equivalent to "ETH" in Ethereum. The total supply will not exceed 280 million Ella. On 2027/09/15, around 50% (139 million Ella) will be mined, and on 2050/07/20, around 90% (250 million Ella) will be mined.

![Total supply](/images/total-supply.png)

## JSON RPC Endpoint

If you are a dapp developer, you can use "[https://jsonrpc.ellaism.org](https://jsonrpc.ellaism.org)" as a JSON RPC endpoint.

## Web Wallet

You can access the web wallet [here](https://ellaism.github.io/ellawallet).

## Browser Plugin

You can also use the MetaMask browser plugin on Ellaism. This plugin allows you to directly interact with many Ethereum dapps on the network. To do this:

1. Download [MetaMask](http://metamask.io/) from the official website.
2. After installation, click the MetaMask icon, and choose (in the top left corner of the pop up) network selection.
3. Choose "Custom RPC" and Enter `https://jsonrpc.ellaism.org`. Click "Save".

Now you can use dapps directly. For example, try out [Token Factory](https://tokenfactory.surge.sh) which allows you to create a new tokens under minutes.

## Technical Information

This is an Ethereum network as specified in the [yellow paper](https://ethereum.github.io/yellowpaper/paper.pdf), with [Homestead](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-2.md), [EIP150](https://github.com/ethereum/eips/issues/150), [EIP155](https://github.com/ethereum/eips/issues/155), [EIP160](https://github.com/ethereum/eips/issues/160) and [ECIP1017](https://github.com/ethereumproject/ECIPs/blob/master/ECIPs/ECIP-1017.md) applied from block 0. The era for ECIP1017 is changed to 10 million. Chain id and network id are both `0x40`. Difficulty bomb is diffused from block 0.

Genesis block contains 0 coins (hence no premine). The initial difficulty in genesis block is changed to `0x40000000`, its extra data field is `0x0000000000000000000000000000000000000000000000000000000000000000`, and its initial nonce is `0x0000000000000040`.