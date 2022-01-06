import React from 'react'
import Dao1 from '../../assets/images/home/dao1.png'
import Dao2 from '../../assets/images/home/dao2.png'
import Dao3 from '../../assets/images/home/dao3.png'
import Dao4 from '../../assets/images/home/dao4.png'
import Daos1 from '../../assets/images/product/daos1.png'
import Daos2 from '../../assets/images/product/daos2.png'
import Daos3 from '../../assets/images/product/daos3.png'
import Daos4 from '../../assets/images/product/daos4.png'
import './index.less'

const Tech: React.FC = () =>  {
    return <div className="tech">
                <div className="side"></div>
                <div className="content">
                    <h2>Verse</h2>
                    <h3></h3>
                    <p>
                        The Verse Network
                        Verse is a censorship resistant, front running resistant, high performance, and interconnected cloud for next gen DAOs and DeFi. It enables networks, developers and organizations to decentralize decision making effectively and scale their communities and decentralized applications. It is highly scalable, through its Proof of Stake (POS) consensus. It is censorship-resistant, unlike ZK Rollups and Optimistic Rollups. It can also support multiple virtual machines, not only the EVM. Furthermore, it is resistant to front-running, meaning that nobody
                        can pay a higher gas fee than someone in order to have their transaction approved/validated before them.

                        Verse Network Architecture
                        Co-Developed with the Meter Foundation, Verse Network is built on the upcoming Meter SDK, a HotStuff consensus-based framework scalable to 1000s of validators and with a throughput of 1000s of transactions per second on each chain. The Meter SDK is backward compatible with EVM and Ethereum RPC and will support containerized VMs like MOVE and WASM on the same consensus and network layers. The Meter SDK cross chain protocol enables the communication between parallel chains through a hub model while providing the ability to communicate across heterogeneous chains through Meter Passport infrastructure. With Meter SDK, you can interconnect with blockchain clouds like Ethereum, BSC and Polkadot.

                        Infrastructure

                        Application Layer - Smart Contracts, DAPPs, User Interface
                        • Ethereum Emulation – EVM & RPC emulation mode
                        • Cross-chain Interoperability
                        • DAPP Deployment – Low and stable Gas Costs

                        Execution Layer– Supporting multiple VMs (EVM, WASM, MOVE) inside
                        separate containers
                        • High Throughput ( 1500 TPS per EVM chain)
                        • Front Running Resistant
                        • Low Gas Fees (5 to 50 Cents)

                        Network Layer – 1,000s of full node operation with low hardware specifications
                        • O(log(n)) network communication overhead BLS and layered gossip network design
                        • Potential of further scaling through Sharding
                        • Potential of shared hub with parallel/shared chains with Instant Finality
                        • Low Hardware Specifications

                        Consensus Layer – Scale to 1,000s of validators without effect on performance
                        • High Sybil Resistance – 67%
                        • Instant deterministic finality – 2.4 Sec or lower
                        • Best performance for totally order linear blockchains
                    </p>
                    <p>
                        Platform Infrastructure

                        Containerized Virtual Machine
                        • POS chain has the capability to run multiple Virtual Machines (EVM, MOVE, WASM) on the same consensus layer
                        • Projects can choose multiple VMs to meet diverse application requirements while benefiting from common set of consensus layer and network
                        layer capabilities

                        Parallel / Side Chain
                        • A parallel / side-chain infrastructure allows completely independent interchain communications
                        • A parallel / side-chain can choose its own set of validators or leverage the
                        validator setup of the main chain
                        • Built-in cross-chain support: Communicate across all parallel/ side chains
                        with instant finality
                        • External heterogeneous chain communications
                    </p>
                </div>
            </div>
}

export default Tech;