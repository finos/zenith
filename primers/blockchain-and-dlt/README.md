# Decentralised Ledger Technology Primer (DLT): Introduction to the Subject

## [Introduction to DLT](#_toc140607934)
[Definition and Overview](#_toc140607935)\
[Importance and Applications](#_toc140607936)\
[Ethical Considerations](#_toc140607937)\
[Accessibility](#_toc140607939)\
[Security](#_toc140607940)\
[Emerging Current Trends](#_toc140607941)\
[What comes next?](#_toc140607942)

## [A Brief History of DLT](#_toc140607943)
[Early Developments](#_toc140607944)\
[Key Milestones](#_toc140607945)\
[Current State & Future Directions](#_toc140607946)

## [Tools for DLT Development](#_toc140607954)
[Programming Languages](#_toc140607955)
- [Solidity](#_toc140607956)
- [Go](#_toc140607957)
- [Rust](#_toc140607958)
- [Javascript (Node.js)](#_toc140607959)
- [Java](#_toc140607960)
- [C++](#_toc140607961)

[Frameworks & Libraries](#_toc140607962)
- [Ethereum](#_toc140607963)
- [Hyperledger Fabric](#_toc140607964)
- [Corda](#_toc140607965)
- [Stellar](#_toc140607966)
- [EOSIO](#_toc140607967)
- [Quorum](#_toc140607968)

[Integrated Development Environments (IDEs)](#_toc140607969)
- [Remix](#_toc140607970)
- [Truffle Suite](#_toc140607971)
- [Ganache](#_toc140607972)
- [Ethereum Studio](#_toc140607973)

[Cloud Platforms and Services](#_toc140607974)
- [Hedera Hashgraph](#_toc140607979)
- [Hyperledger Fabric on AWS](#_toc140607975)
- [Hyperledger Besu on AWS/Azure](#_toc140607976)
- [Binance Smart Chain (BSC)](#_toc140607977)
- [Algorand Blockchain](#_toc140607978)

***

## [Introduction to DLT](#_toc140607934)

Distributed Ledger Technology (DLT) represents a groundbreaking approach to record-keeping and transaction management. Unlike traditional centralized systems, DLT operates on a decentralized network of computers, enabling secure, transparent, and tamper-resistant data storage. With its foundations in decentralization, security, and immutability, DLT offers a powerful tool for enhancing transparency and trust in a wide range of applications, including financial services. This primer will explore the fundamentals, history, and tools of DLT, empowering executives in the financial sector to harness its potential for innovation and operational efficiency.

### [Definition and Overview](#_toc140607935)

DLT is a transformative innovation that offers a new way of recording and verifying transactions across multiple parties in a decentralized and secure manner. At its core, DLT is a digital ledger that records a series of transactions or data entries on a digital network, rather than a single, centralized entity. This decentralized approach to record-keeping provides several key advantages:

- Decentralization: Being peer-to-peer, this eliminated the need for a central authority. This increases trust and transparency
- Immutability: Once the data is recorded, changing, altering or deleting data is very hard to do. This ensures integrity and authenticity of information recorded
- Security: By using cryptographic techniques to secure data, we get a network highly resistant to tampering and unauthorized access
- Transparency: Anyone on the network can see any and all transactions, reducing the risk of fraud

### [Importance and Applications](#_toc140607936)

DLT holds immense importance in various industries, with the financial services sector being a primary beneficiary. Industry is utilising this technology for Digital Currencies, smart contracts, supply chain management and identity verification. These use cases and others will be covered in more depth later in the guide.

### [Ethical Considerations](#_toc140607937)

While DLT offers significant benefits, it also raises ethical considerations. Privacy, data ownership, and security are critical concerns. It's essential to strike a balance between transparency and protecting sensitive information. On top of this, considerations about the environmental impact of hashing & mining should be considered when planning DLT implementations.

### [Accessibility](#_toc140607939)

The accessibility of DLT varies by region and industry. Some regions have embraced DLT more quickly than others, and specific industries may have unique use cases. Executives should assess the accessibility of DLT in their respective markets and consider how it can benefit their operations and services.

### [Security](#_toc140607940)

DLT's security features are a significant selling point. It employs cryptographic techniques to safeguard data and transactions. The decentralized nature of DLT also makes it resistant to single points of failure. Executives should appreciate the robust security measures in place when implementing DLT solutions.

### [Emerging Current Trends](#_toc140607941)

Current trends in DLT technology include the rise of permissioned (private) DLT networks, the development of interoperability solutions to connect different DLT platforms, and the integration of DLT into financial services to streamline processes, reduce costs, and enhance transparency.

### [What comes next?](#_toc140607942)

DLT continues to evolve rapidly. As an executive in the financial services industry, staying informed about emerging trends and innovations in DLT is crucial. The possibilities for DLT applications in finance are expanding, and understanding these developments will be key to leveraging DLT effectively in your organization.

In our deep dives, we will talk about different aspects of DLT and associated Web3 terms like Non-Fungible Tokens (NFTs), Decentralised Autonomous Organizations (DAOs), Decentralized Finance (DeFi) and Governance & Security. Please stay tuned for these additional primers to be uploaded!

## [A Brief History of DLT](#_toc140607943)

DLT's journey began with the idea of a decentralized, secure ledger. It was a response to the limitations of traditional centralized systems.

### [Early Developments](#_toc140607944)

- Pre-Bitcoin Era: The concept of decentralized ledger technology existed before the introduction of Bitcoin. Various cryptographic and decentralized systems paved the way for DLT.

- [Bitcoin's Whitepaper](https://bitcoin.org/en/bitcoin-paper) (2008): Satoshi Nakamoto's whitepaper introduced Bitcoin as the first practical application of DLT. It described a decentralized digital currency that relied on a public ledger, which later became known as the blockchain.

- Bitcoin's [Genesis Block](https://en.bitcoin.it/wiki/Genesis_block) (2009): The creation of Bitcoin's genesis block marked the birth of DLT. This block included the message, "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks," emphasizing the need for an alternative to traditional banking.

### [Key Milestones](#_toc140607945)

DLT's evolution continued with the introduction of blockchain technology and subsequent developments. After the above Bitcoin innovations, alternative cryptocurrencies started to spring up more frequently. Coins such as [Litecoin](https://litecoin.com/en/), [Ripple](https://ripple.com/) and [Ethereum](https://ethereum.org/en/).org/en/) emerged, each making a specific pitch as to their features and use cases. 

Of these, [Ethereum](https://ethereum.org/en/) brought the concept of smart contracts (self-executing contracts with code that automatically enforced pre-agreed terms when specified conditions are met) which was widely considered a very interesting and beneficial development to the DLT toolbox.

This has spawned off a number of enterprise DLT solutions, enabling consortium-based DLT platforms such as [Hyperledger](https://www.hyperledger.org/) and [R3 Corda](https://www.hyperledger.org/) to gain popularity in the enterprise sector, offering private and permissioned DLT solutions to commercial customers.

### [Current State & Future Directions](#_toc140607946)

Today, DLT continues to mature, albeit with numerous teething problems, starting to show promise for applications far beyond the original concept of cryptocurrencies. Considering interoperability using DLT to share data through compatible platforms, spurs on the push for more widespread data sharing backed by transparency into the data's uses.

On top of this, the market seeks different ways to tokenise assets including real estate, traditional securities and even artworks to enable new trade and asset management. These then have to integrate with traditional financial mechanisms and tools, leading to streamlining opportunities that can reduce cost while benefitting from decentralised transparency.

Lastly, the considerations of energy use and efficiency of DLT networks is a major focus for research and development in an age where ESG is so critical in the eyes of investors.

## [Tools for DLT Development](#_toc140607954)

Effectively developing DLT applications requires the right tools and platforms. Whether you're working with smart contracts, building decentralized applications, or creating private blockchain networks, having the appropriate resources is essential. In this section, we'll explore a range of tools and platforms that facilitate DLT development. From programming languages to development frameworks, libraries, developer tools, and cloud platforms, we'll provide insights and examples to help you make informed decisions about your DLT projects.

### [Programming Languages](#_toc140607955)

When developing DLT applications, the choice of programming language is crucial. It directly impacts the efficiency and functionality of the applications. Some widely used programming languages for DLT development are linked below:

#### [Solidity](#_toc140607956)

[Solidity](https://soliditylang.org/) is the programming language for [Ethereum](https://ethereum.org/en/) smart contracts. It's a statically-typed language designed for building decentralized applications on the [Ethereum](https://ethereum.org/en/) platform.

#### [Go](#_toc140607957)

The [Go](https://go.dev/) programming language is used in various DLT projects, including [Ethereum](https://ethereum.org/en/) and [Hyperledger Fabric](https://www.hyperledger.org/projects/fabric). It offers simplicity, efficiency, and strong support for concurrent programming.

#### [Rust](#_toc140607958)

[Rust](https://www.rust-lang.org/) is known for its memory safety and low-level control. It's used in blockchain projects like [Polkadot](https://polkadot.network/) and [Substrate](https://substrate.io/).

#### [Javascript (Node.js)](#_toc140607959)

Node.js is often used for server-side development in DLT projects, including building APIs, managing blockchain nodes, and creating web interfaces.

#### [Java](#_toc140607960)

Java is employed in various DLT platforms, particularly in enterprise solutions such as [Hyperledger Fabric](https://www.hyperledger.org/projects/fabric).

#### [C++](#_toc140607961)

C++ has a long history in blockchain development, with applications in projects like [Bitcoin](https://bitcoin.org/en/) and [EOSIO](https://eos.io/).

### [Frameworks & Libraries](#_toc140607962)

Frameworks and libraries are essential for streamlining DLT development and improving code efficiency. 

#### [Ethereum](#_toc140607963)

[Ethereum](https://ethereum.org/en/) offers a development framework for creating decentralized applications and smart contracts.

#### [Hyperledger Fabric](#_toc140607964)

An enterprise-ready DLT framework, [Hyperledger Fabric](https://www.hyperledger.org/projects/fabric) provides tools for building permissioned, private blockchain networks.

#### [Corda](#_toc140607965)

[Corda]((https://www.hyperledger.org/)) is a DLT platform designed for financial services, offering a framework for developing and deploying financial applications.

#### [Stellar](#_toc140607966)

[Stellar](https://stellar.org/) provides a platform for creating financial applications, and its SDKs and libraries facilitate development.

#### [EOSIO](#_toc140607967)

[EOSIO](https://eos.io/) includes developer tools and libraries for building decentralized applications on its blockchain platform.

#### [Quorum](#_toc140607968)

Developed by JP Morgan Chase, [Quorum](https://consensys.net/quorum/) is a DLT platform for enterprise applications, based on [Ethereum](https://ethereum.org/en/), and offers developer tools and libraries for private transactions.

### [Integrated Development Environments (IDEs)](#_toc140607969)

Effective DLT development requires a suite of developer tools. Below are some of our recommendations:

#### [Remix](#_toc140607970)

[Remix](https://remix.ethereum.org/) is an online IDE for [Solidity](https://soliditylang.org/) smart contract development, offering a user-friendly interface and debugging capabilities.

#### [Truffle Suite](#_toc140607971)

[Truffle](https://trufflesuite.com/) is a development framework for [Ethereum](https://ethereum.org/en/) that includes tools for smart contract compilation, testing, and deployment.

#### [Ganache](#_toc140607972)

[Ganache](https://trufflesuite.com/ganache/) is a personal blockchain for [Ethereum](https://ethereum.org/en/) development, allowing developers to test their applications in a controlled environment. This is a specialised part of the [Truffle](https://trufflesuite.com/) development suite focused on personal testing and development.

#### [Ethereum Studio](#_toc140607973)

[Ethereum](https://ethereum.org/en/) Studio is a comprehensive development environment for [Ethereum](https://ethereum.org/en/)-based applications, providing tools for smart contract development, testing, and deployment.

### [Cloud Platforms and Services](#_toc140607974)

Some common Cloud providers have specific offerings focused on DLT development. Some of these are backed by FINOS members!

#### [Hedera Hashgraph](#_toc140607979)

[Hedera Hashgraph](https://hedera.com/) offers cloud services for building applications on its high-performance public ledger. Our first foray into Open-source DLT will be built using this platform. Join our discussions to find out more.

#### [Hyperledger Fabric on AWS](#_toc140607975)

[Amazon Web Services (AWS)](https://aws.amazon.com/blockchain/) offers [Hyperledger Fabric](https://www.hyperledger.org/projects/fabric) as a managed service, making it easier to deploy and manage private blockchain networks.

#### [Hyperledger Besu on AWS/Azure](#_toc140607976)

[Besu](https://besu.hyperledger.org/), another Hyperledger project, is available on AWS and Azure for building enterprise blockchain networks.

#### [Binance Smart Chain (BSC)](#_toc140607977)

[Binance Smart Chain](https://www.bnbchain.org/en/smartChain) offers cloud-based services for developing and deploying smart contracts and decentralized applications.

#### [Algorand Blockchain](#_toc140607978)

[Algorand](https://algorand.com/) provides cloud-based infrastructure for developing and launching scalable DLT applications.