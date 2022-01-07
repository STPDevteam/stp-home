import React from 'react'

import {ReactComponent as Infrastructure1} from '../../assets/images/home/svg/infrastructure1.svg'
import {ReactComponent as Infrastructure2} from '../../assets/images/home/svg/infrastructure2.svg'
import {ReactComponent as Infrastructure3} from '../../assets/images/home/svg/infrastructure3.svg'
import {ReactComponent as Infrastructure4} from '../../assets/images/home/svg/infrastructure4.svg'
import './index.less'

const Tech: React.FC = () =>  {
    return <div className="tech">
                <div className="side"></div>
                <div className="content">
                    <h2>Verse</h2>
                    <h3>The Verse Network</h3>
                    <p>
                    Verse is a censorship resistant, front running resistant, high performance, and interconnected cloud for next gen DAOs and DeFi. It enables networks, developers and organizations to decentralize decision making effectively and scale their communities and decentralized applications. It is highly scalable, through its Proof of Stake (POS) consensus. It is censorship-resistant, unlike ZK Rollups and Optimistic Rollups. It can also support multiple virtual machines, not only the EVM. Furthermore, it is resistant to front-running, meaning that nobody
                    can pay a higher gas fee than someone in order to have their transaction approved/validated before them.</p>

                    <h3>Verse Network Architecture</h3>
                    <p>Co-Developed with the Meter Foundation, Verse Network is built on the upcoming Meter SDK, a HotStuff consensus-based framework scalable to 1000s of validators and with a throughput of 1000s of transactions per second on each chain. The Meter SDK is backward compatible with EVM and Ethereum RPC and will support containerized VMs like MOVE and WASM on the same consensus and network layers. The Meter SDK cross chain protocol enables the communication between parallel chains through a hub model while providing the ability to communicate across heterogeneous chains through Meter Passport infrastructure. With Meter SDK, you can interconnect with blockchain clouds like Ethereum, BSC and Polkadot.</p>

                    <h3>Infrastructure</h3>

                    <p>Application Layer - Smart Contracts, DAPPs, User Interface</p>
                    <ul>
                        <li>
                        Ethereum Emulation – EVM & RPC emulation mode
                        </li>
                        <li>
                        Cross-chain Interoperability
                        </li>
                        <li>
                        DAPP Deployment – Low and stable Gas Costs
                        </li>
                    </ul>

                    <p>Execution Layer– Supporting multiple VMs (EVM, WASM, MOVE) inside
                    separate containers</p>
                    <ul>
                        <li>High Throughput ( 1500 TPS per EVM chain)</li>
                        <li>
                        Front Running Resistant
                        </li>
                        <li>Low Gas Fees (5 to 50 Cents)</li>
                    </ul>

                    <p>Network Layer – 1,000s of full node operation with low hardware specifications</p>
                    <ul>
                        <li> O(log(n)) network communication overhead BLS and layered gossip network design</li>
                        <li>Potential of further scaling through Sharding</li>
                        <li>Potential of shared hub with parallel/shared chains with Instant Finality</li>
                        <li>Low Hardware Specifications</li>
                    </ul>
                

                    <p>Consensus Layer – Scale to 1,000s of validators without effect on performance</p>
                    <ul>
                        <li>High Sybil Resistance – 67%</li>
                        <li>Instant deterministic finality – 2.4 Sec or lower</li>
                        <li>Best performance for totally order linear blockchains</li>
                    </ul>
                    <div className="infrastructure">
                        <div id="infrastructure-list" className={`list`}>
                            <div>
                                <div><Infrastructure1/></div>
                                <div>
                                    <h3>
                                    Application Layer 
                                    </h3>
                    
                                    <p>
                                    Smart Contracts, DAPPs, User Interface
                                    </p>
                                    
                                    <hr />
                                </div>
                            </div>
                            <div>
                                <div><Infrastructure2/></div>
                                <div>
                                    <h3>
                                    Execution Layer 
                                    </h3>
                    
                                        <p>
                                        Supporting multiple VMs (EVM, WASM, MOVE) inside separate containers 
                                        </p>
                                    
                                    <hr />
                                </div>
                            </div>
                            <div>
                                <div><Infrastructure3/></div>
                                <div>
                                    <h3>
                                    Network Layer 
                                    </h3>
                    
                                        <p>
                                        1,000s of Full Node Operation with low hardware specifications 
                                        </p>
                                    
                                    <hr />
                                </div>
                            </div>
                            <div>
                                <div><Infrastructure4/></div>
                                <div>
                                    <h3>
                                    Consensus Layer
                                    </h3>
                        
                                        <p>
                                        Scale to 1,000s of validators without effect on performance
                                        </p>
                                    
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                        <h3>Platform Infrastructure</h3>

                        <h3>Containerized Virtual Machine</h3>
                        <ul>
                            <li>
                            POS chain has the capability to run multiple Virtual Machines (EVM, MOVE, WASM) on the same consensus layer
                            </li>
                            <li>
                            Projects can choose multiple VMs to meet diverse application requirements while benefiting from common set of consensus layer and network
                        layer capabilities
                            </li>
                        </ul>

                        <h3>Parallel / Side Chain</h3>
                        <ul>
                            <li>
                            A parallel / side-chain infrastructure allows completely independent interchain communications
                            </li>
                            <li>
                            A parallel / side-chain can choose its own set of validators or leverage the
                        validator setup of the main chain
                            </li>
                            <li>
                            Built-in cross-chain support: Communicate across all parallel/ side chains
                        with instant finality
                            </li>
                            <li>
                            External heterogeneous chain communications
                            </li>
                        </ul>
                </div>
            </div>
}

export default Tech;