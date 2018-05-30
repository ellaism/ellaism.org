---
title: "Installation"
permalink: /install/
excerpt: "Install a Ellaism full node using Parity or Geth."
modified: 2017-11-21
---

{% include base_path %}
{% include toc %}

We have three clients available you can use to connect to the Ellaism network. You
can also use MyEtherWallet, MyCrypto and MetaMask to interact with the network.

## Wallets

* [Ellaism Shell](https://github.com/ellaism/shell/releases): Ellaism-branded desktop wallet and dapp browser.
* [MyCrypto](https://mycrypto.com): Choose ELLA from the top-right dropdown menu.
* [MyEtherWallet](https://myetherwallet.com): Choose ELLA from the top-right dropdown menu.
* [Ellaism Web Wallet](https://ellaism.github.io/ellawallet): Easiest wallet option besides MyEtherWallet. Hosted directly on Github. Supports Trezor hardware wallet.
* [Ellaism Chrome Extension Wallet](https://chrome.google.com/webstore/detail/myellawallet/bgfofdgebpphdhddggaggeafenegbjef): Runs in a sandbox in your Chrome browser. Functionality is similar to the web wallet, but technically safer.

## Parity Full Node

Install Parity from [Parity's official website](https://github.com/paritytech/parity/releases).
Please use Parity version 1.10.3 or later. Run Parity with `parity --chain ellaism`.

Include the `--author yourellaaddress` parameter if you plan to mine using this
node.

## Mining

If you want to solo mine on the Ellaism network, follow the solo mining guide
[here](/mining/) after you have started a full node.

## Browser Plugin

You can also use the MetaMask browser plugin on Ellaism. This plugin allows you
to directly interact with many Ethereum dapps on the network. To do this:

1. Download [MetaMask](http://metamask.io/) from the official website.
2. After installation, click the MetaMask icon, and choose (in the top left
   corner of the pop up) network selection.
3. Choose "Custom RPC" and Enter `https://jsonrpc.ellaism.org`. Click "Save".

Now you can use dapps directly. For example, try out [Token
Factory](https://tokenfactory.surge.sh) which allows you to create a new tokens
in minutes.
