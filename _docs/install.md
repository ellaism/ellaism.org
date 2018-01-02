---
title: "Installation"
permalink: /install/
excerpt: "Install a Ellaism full node using Parity or Geth."
modified: 2017-11-21
---

{% include base_path %}
{% include toc %}

We have two clients available you can use to connect to the Ellaism network. You
can also use MyEtherWallet and MetaMask to interact with the network.

## Parity Full Node

Install Parity from [Parity's official
website](https://github.com/paritytech/parity/releases). Please use Parity
version 1.6.10 or later. Download the Ellaism config file
([https://raw.githubusercontent.com/ellaism/parity-config/master/ellaism.json](https://raw.githubusercontent.com/ellaism/parity-config/master/ellaism.json)).
Run Parity with `parity --chain /path/to/ellaism.json` (if you are on Windows,
that would be `parity --chain X:\path\to\ellaism.json`).

Include the `--author yourellaaddress` parameter if you plan to mine using this
node.

**If you're running Parity as a public node or for a mining pool**, it is
recommended to run with `--usd-per-tx 0` because Parity cannot calculate the
correct ELLA-USD rate.

```
parity --chain "/path/to/ellaism.json" --usd-per-tx 0
```

To set it in your Parity config file, add the following:

```
[mining]
usd_per_tx = "0"
```

## Go Ellaism Full Node

Download Geth from the [release
page](https://github.com/ellaism/go-ellaism/releases). You can then extract the
executable and run it:

```
./geth
```

Include the `--etherbase yourellaaddress` parameter if you plan to mine using
this node.

## Mining

If you want to solo mine on the Ellaism network, follow the solo mining guide
[here](/mining/) after you have started a full node.

## Wallets

* [MyEtherWallet](https://myetherwallet.com): Choose ELLA from the top-right dropdown menu.
* [Ellaism Web Wallet](https://ellaism.github.io/ellawallet): Easiest wallet option besides MyEtherWallet. Hosted directly on Github. Supports Trezor hardware wallet.
* [Ellaism Chrome Extension Wallet](https://chrome.google.com/webstore/detail/myellawallet/bgfofdgebpphdhddggaggeafenegbjef): Runs in a sandbox in your Chrome browser. Functionality is similar to the web wallet, but technically safer.
* [Ellagem](https://github.com/ellaism-io/ellagem): Windows desktop wallet by @Riddlez666. This needs to download the whole blockchain so a little bit slower than the above options.

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
