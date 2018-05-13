---
permalink: /about/
title: "About"
excerpt: "An Ethereum-like networks with no premine and no contentious hard forks."
modified: 2018-05-13
---

{% include base_path %}

Ellaism is an Ethereum clone using a blend of ETC and ETH code, and intends to use exclusively “proof of work” to secure the blockchain.  It benefits from a zero pre-mine and has no mandatory developer fees with all support and development donated freely by the community.  We believe this makes our coin one of the most honest pure Ethereum projects, and something that is uniquely interesting as a platform for serious developers, educators, and enthusiasts.

Ellaism also has a clearly defined monetary policy, with around 280 million coins in total. See also [Comparison of Different Ethereum Networks](/comparison/).

## Information and Community

Ellaism has a welcoming and strong community. Its Twitter, Discord server, forum and other
parts are managed by different community members.

* [Roadmap](/roadmap/)
* [Principles](/principles/)
* [Get Involved](https://github.com/ellaism/meta)
* [Discord](https://discord.gg/gz9tURY)
* [Telegram](https://t.me/ellaismcoin)
* [Reddit](https://www.reddit.com/r/ellaism/)
* [Community Twitter](https://twitter.com/EllaismProject)
* [Core Twitter](https://twitter.com/EllaismCore)
* IRC: [#ellaism](http://webchat.freenode.net/?channels=ellaism)
* [Code of Conduct](https://github.com/ellaism/meta/blob/master/conduct.md) (Draft)

## Clients

You might also want to follow the [installation](/install/) or
[mining](/mining/) guide for this section.

* [Parity](https://github.com/ellaism/parity-config) (recommended)
* [Geth](https://github.com/ellaism/go-ellaism) (beta)

## Exchanges

<div class="wiki-loader"></div>
<div id="wiki-page-content" data-wiki-page="https://wiki.ellaism.org/Supported-Exchanges" data-wiki-fail-message="View the complete list of exchanges on the wiki"></div>

## Wallets

* [MyEtherWallet](https://myetherwallet.com/)
* [Ellaism Web Wallet](https://ellaism.github.io/ellawallet)
* [Ellaism Chrome Extension Wallet](https://chrome.google.com/webstore/detail/myellawallet/bgfofdgebpphdhddggaggeafenegbjef)

## Hardware Wallets

* [Trezor](https://shop.trezor.io/) with [Web Wallet](https://ellaism.github.io/ellawallet)

## Get Involved

There is no pre-mine and the coin is totally community-driven. You can find more information about how to get involved in the [ellaism/meta](https://github.com/ellaism/meta) repository and the [Discord](https://discord.gg/gz9tURY) server. You can also [donate](/donate/) to Ellaism developers and community members to help this coin.

## Total Supply

The total supply for Ellaism is around 280 million coins.

* [Analysis on the supply model](https://docs.google.com/spreadsheets/d/1v3T6gRupH4C4Zx3B60fOOIqFiilItSpVTszEHjyIPIw/edit#gid=640070299)
* [Discussions](https://github.com/ellaism/meta/issues/9)

## JSON RPC Endpoint

If you are a dapp developer, you can use
"[https://jsonrpc.ellaism.org](https://jsonrpc.ellaism.org)" as a JSON RPC
endpoint.

## Technical Information

* Average block time: 14 seconds.
* Expected block time: 10-19 seconds (inclusive).
* Coin generation: 5 Ella per block with 20% reward reduction happens every 10 million blocks.
* Network ID is 0x40.
* Replay protection enabled by default, and chain ID is 0x40.
* No difficulty bomb.
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

## Logo Assets

Ellaism's logo is created by @BL0ckchain and is released into the public domain. You can find a high resolution asset of the logo [here](https://ellaism.org/images/logo.png).