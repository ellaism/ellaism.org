---
permalink: /about/
title: "About"
excerpt: "An Ethereum-like networks with no premine and no contentious hard forks."
modified: 2017-11-21
---

{% include base_path %}

Ellaism is an Ethereum-like network. Features include:

* No pre-mine.
* No contentious hard forks. Stability is a feature.
* Monetary policy. 5 ELLA every block in the beginning. A reduction of 20%
  mining rewards happens every 10 million blocks.
* No difficulty bomb.
* Replay protection enabled by default.

See also [Comparison of Different Ethereum Networks](/comparison/).

## Information and Community

Ellaism has a welcoming and strong community. Its Twitter, Discord server, forum and other
parts are managed by different community members.

* [Roadmap](/roadmap/)
* [Principles](/principles/)
* [Get Involved](https://github.com/ellaism/meta)
* [Discord](https://discord.gg/66Pn9jn)
* [Reddit](https://www.reddit.com/r/ellaism/)
* [Community Board](https://board.ellaism.io/)
* [Community Twitter](https://twitter.com/EllaismCoin)
* [Core Twitter](https://twitter.com/EllaismCore)
* IRC: [#ellaism](http://webchat.freenode.net/?channels=ellaism)

## Clients

You might also want to follow the [installation](/install/) or
[mining](/mining/) guide for this section.

* [Parity](https://github.com/ellaism/parity-config) (recommended)
* [Geth](https://github.com/ellaism/go-ellaism) (beta)

## Exchanges

See the complete exchange list at [here](/exchange/).

* [Cryptopia](https://www.cryptopia.co.nz/Exchange?market=ELLA_BTC)
* [Stocks Exchange](https://stocks.exchange/trade/ELLA/BTC)
* [Bisq](https://bisq.network/)

## Wallets

* [MyEtherWallet](https://myetherwallet.com/)
* [Ellaism Web Wallet](https://ellaism.github.io/ellawallet)
* [Ellaism Chrome Extension Wallet](https://chrome.google.com/webstore/detail/myellawallet/bgfofdgebpphdhddggaggeafenegbjef)

## Hardware Wallets

* [Trezor](https://shop.trezor.io/) with [Web Wallet](https://ellaism.github.io/ellawallet)

## Get Involved

There is no pre-mine and the coin is totally community-driven. You can find more information about how to get involved in the [ellaism/meta](https://github.com/ellaism/meta) repository and the [Discord](https://discord.gg/66Pn9jn) server. You can also [donate](/donate/) to Ellaism developers and community members to help this coin.

## Total Supply

Below you will find an analysis of the total supply. The coin unit "Ella" is
equivalent to "ETH" in Ethereum. The total supply will not exceed 280 million
Ella. On 2027/09/15, around 50% (139 million Ella) will be mined, and on
2050/07/20, around 90% (250 million Ella) will be mined.

![Total supply](/images/total-supply.png)

## JSON RPC Endpoint

If you are a dapp developer, you can use
"[https://jsonrpc.ellaism.org](https://jsonrpc.ellaism.org)" as a JSON RPC
endpoint.

## Technical Information

* Block time: 10 seconds.
* Coin generation: 5 Ella per block with 20% reward reduction happens every 10 million blocks.
* Network ID and chain ID is 0x40.
* Most other parameters are the same as Ethereum.

This is an Ethereum network as specified in the [yellow
paper](https://ethereum.github.io/yellowpaper/paper.pdf), with
[Homestead](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-2.md),
[EIP150](https://github.com/ethereum/eips/issues/150),
[EIP155](https://github.com/ethereum/eips/issues/155),
[EIP160](https://github.com/ethereum/eips/issues/160) and
[ECIP1017](https://github.com/ethereumproject/ECIPs/blob/master/ECIPs/ECIP-1017.md)
applied from block 0. The era for ECIP1017 is changed to 10 million. Chain id
and network id are both `0x40`. Difficulty bomb is diffused from block 0.

Genesis block contains 0 coins (hence no premine). The initial difficulty in
genesis block is changed to `0x40000000`, its extra data field is
`0x0000000000000000000000000000000000000000000000000000000000000000`, and its
initial nonce is `0x0000000000000040`.
