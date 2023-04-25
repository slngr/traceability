# Cardano Traceability Solution

This is an MVP that allows location sharing in a decentralized, immutable, and transparent manner by leveraging blockchain technology.

The notion of “trustless” traceability can be achieved through signed transactions referenced in URLs, with optional QR codes or NFC tags. There are many use cases for supply chain, consumer goods, and civil rights.

Whether you are a winemaker who wants to add a protected designation of origin on bottles, or people organizing a pro-democracy protest, the design of this solution is such that pins on the map can only be hidden by their owner.

In order to ensure maximum on-chain readability, pinning transactions are constructed with their datum defined as the public key hash of the owner, together with latitude and longitude (fixed length of 6 decimals).

How to use:

Insert your Blockfrost preview API key in line 51 of Map/src/index.js

Put the Map directory inside your Plutus Pioneer Program 4 Docker Workspace, cd there then npm install and npm start

You need the Eternl Chrome extension with a Preview Testnet wallet, navigate to http://localhost:9081

You can easily reproduce the on-chain validator by putting Pinning.hs in code/Week03/lecture, add Pinning in the exposed-modules of Week03.cabal, then cabal repl in Week03, import Pinning, and finally call the saveVal helper function
