---
title: Comparison of Different Ethereum Networks
---

Technically, nearly all of the Ethereum networks have similar capabilities in
terms of functionality because they share many common parts. Some networks might
have additional ones, but they can be easily ported to other networks in terms
of *weeks*. So for this comparison, we focus on pre-mine, coin distribution,
philosophy, and community.

## Ethereum

The chain by *Ethereum Foundation* is the oldest and currently the most valuable
one. Launching this coin, the Foundation did an ICO of 60 million ETH and also
included an additional of 12 million ETH pre-mine for developers. That sums up
to a total of 72 million ETH pre-mine. In the meantime, only about 10 million
new ETH can be mined by miners per year. Today, three years after its launch,
all coins in genesis block (block 0) still consists of more than half of all
coins available. This makes the coin distribution of it questionable. For
example, at the time of DAO hack, many users don't trust the result of
CarbonVote (one-ETH-one-vote style of voting).

In the recent Byzantium hard fork, Ethereum further changed coin issuance per
block from 5 ETH to 3 ETH. This further reduces total coins that can be mined.
And make pre-mine and the overall coin distribution more questionable.

In terms of community, Ethereum has the largest groups of developers and
businesses supporting it. However, its hard forks and many changes that require
acknowledgment from the whole community, are often criticised as being "rushed"
and "one person (Vitalik Buterin) decides everything". Many people argue that
this is a good thing because it allows the coin to change much faster. Many
others don't like this fact that a "decentralized cryptocurrency" is, in fact,
centralized, and switch to other coins like Ethereum Classic.

## Ethereum Classic

Ethereum Classic is a community split happened during the DAO hard fork.
Compared with Ethereum, it has a strong principle of "code is law" and
"transaction finalization". Many people consider this to be more censorship
resistance. It also has a clear monetary policy (which Ellaism borrowed from)
that has 210 million total coin supply.

However, Ethereum Classic still has the same problem as Ethereum in terms of
pre-mine. 72 million pre-mine, even after the 210 million coins are all mined,
is still more than 30% in the network. Many people consider this to be a
problem, while others do not.

## Expanse

The Expanse network is one of the early forks of Ethereum. Compared with
Ethereum and Ethereum Classic, its community is smaller. Expanse network
consists of 11.11 million coins pre-mined in the genesis block in which the
founder controls the private key.

The Expanse network also has the Tokenlab project.

## Ubiq

Ubiq is a re-launch of Jumbucks (JBS) and is advertised to be no pre-mine. While
this is true, some people criticise that Jumbucks is a Proof of Stake coin (in
which is much harder to get a fair coin distribution) consisting of only 21 days
of Proof of Work period. The fact that Ubiq is a re-launch means that about 36
million coins are in the genesis block. In the future, Ubiq's monetary policy
makes it so that block rewards start out at 8, and decrease by 1, until it
reaches 1 per block.

The Ubiq development team is run by donations. This fact, combined with that it
is advertised being no pre-mine, attracts some developers. Ubiq also has the
unique *Flux Difficulty Algorithm*.

## Pirl

Pirl is a coin launched in July 2017. The coin is also advertised to be no
pre-mine, and is probably the only cryptocurrency besides Ellaism that contains
zero coins in genesis block (block 0). The coin, however, takes around 16% dev
fees (for masternode and dev fund) in every block reward. People interested in
Pirl usually don't consider this as a pre-mine, because devs are only paid if
the coin is valuable. This, however, is sometimes criticised in other coins like
Zcash, which also takes dev fees called "founders' reward".

Pirl has a slightly bigger community compared with Ellaism.

## Ellaism

Ellaism is designed to be a "pure" coin. A coin that is as fair as Bitcoin.
Compared with Ubiq, the only other Ethereum-like coin here that has no pre-mine
or dev fees, Ellaism can be argued to have a much more fair launch due to the
fact that Ubiq is a "re-launch".

Ellaism's current development team (Ellaism Core) is [run by
donations](/roadmap/). While this fact makes the coin has a good long-term
foundation, people argue that this would result in a slower initial coin growth
for the beginning. Ellaism's community size is also small right now.

## Specialized Ethereum Networks

There are also other specialized Ethereum networks that serves some specific
functionalities based on the Ethereum protocol. Notable ones include:

* WhaleCoin: A social network based on Ethereum.
* Musicoin: Direct payments for musicians.

## Appendix: Comparison Table

<!-- Include the standard DataTables bits -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.13/css/jquery.dataTables.css">
<script type="text/javascript" charset="utf8" src="//cdn.datatables.net/1.10.13/js/jquery.dataTables.js"></script>
<script>
  $(document).ready(function(){
    $('div.datatable-begin').nextUntil('div.datatable-end', 'table').addClass('display');
    $('table.display').DataTable( {
      paging: false,
      stateSave: false,
      searching: false,
      ordering: false
    });
  });
</script>

<div class="datatable-begin"></div>

| Name             | Dev Fees | ICO Premine | Dev Premine   | Genesis Block | PCS<sup><a href="#pcs">1</a></sup> | DCS<sup><a href="#dcs">2</a></sup> |
|------------------|----------|-------------|---------------|---------------|------------------------------------|------------------------------------|
| Ethereum         |        0 |  60 million | 12 million    | 72 million    |                               >50% | 13%                                |
| Ethereum Classic |        0 |  60 million | 12 million    | 72 million    |                               >50% | 13%                                |
| Expanse          |        0 |           0 | 11.11 million | 11.11 million |                               >50% | >50%                               |
| Ubiq             |        0 |           0 | 0             | 36 million    |                               >50% | 0                                  |
| Pirl             |      16% |           0 | 0             | 0             |                                  0 | 16%                                |
| Ellaism          |        0 |           0 | 0             | 0             |                                  0 | 0                                  |

<div class="datatable-end"></div>

<a name="pcs">1</a>: Percentage of genesis block coins in current supply.<br />
<a name="dcs">2</a>: Percentage of mandatory developer fees or premine in current supply.
