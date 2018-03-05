---
title: "Testnet"
permalink: /testnet/
modified: 2018-03-05
---

Ellaism has a Proof of Authority (PoA) testnet called "Shikinseki". To connect to the testnet, download [this file](https://github.com/ellaism/parity-config/blob/master/shikinseki.json) and run:

```
parity --chain shikinseki.json
```

We choose PoA consensus algorithm because it provides a stable experience. It is known that PoW testnets can be unstable due to lack of nodes. And please note that the testnet might be restarted at any time with all states cleared. Don't use it to store anything important.

Additional facilities you can use on the testnet:

* Explorer: [https://explorer.testnet.ellaism.org](https://explorer.testnet.ellaism.org)
* JSONRPC Endpoint: [https://jsonrpc.testnet.ellaism.org](https://jsonrpc.testnet.ellaism.org)

## Shikinseki Faucet

To get some testnet token, go to the Discord channel, in `#ask-ella-bot` channel, run command `!testnet send <address>`. For example:

```
!testnet send 0x2cbb505641e0c1b0ada0cf0b045014383de94576
```

You will receive 10 testnet tokens each time issuing this command.
