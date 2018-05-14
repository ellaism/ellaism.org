---
title: "Mining Ellaism"
permalink: /mining/
modified: 2018-05-13
---

{% include base_path %}

Ellaism uses the *ethash* proof of work algorithm, the same algorithm used in
Ethereum and Ethereum Classic.

## Solo Mining

Follow the guide in [Installation](/install/) to either set up a Parity or Geth
full node. After that, you can use any ethash miner (such as
[ethminer](https://github.com/ethereum-mining/ethminer)) to mine Ellaism. To
mine using your GPU, run `ethminer -G -F http://localhost:8545`.

## Pools

Pool mining helps miners to compensate "bad luck" and share "good luck" when it comes. Help is appreciated to keep the [Dev Mining Pool](https://pool.ellaism.org) running. This pool maintains several infrastructures on Ellaism, like the BTC Relay fetchd script, and contributes directly to the [Dev Fund](https://ellaism.org/donations/).

You can also check out the current pool hashrates in Explorer's [miners' ranking](https://explorer.ellaism.org/miners). Pools have their own instructions of how to set your miners up.

<div class="wiki-loader"></div>
<div id="wiki-page-content" data-wiki-page="https://wiki.ellaism.org/Pool-List" data-wiki-fail-message="View the complete pool list on the wiki"></div>
