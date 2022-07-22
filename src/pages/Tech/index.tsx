import React, {useEffect, useState, useRef} from 'react'
import { Button, Modal } from 'antd';
import Advantage1 from '../../assets/images/tech/advantage1.png';
import Advantage2 from '../../assets/images/tech/advantage2.png';
import Advantage3 from '../../assets/images/tech/advantage3.png';
import Advantage4 from '../../assets/images/tech/advantage4.png';
import Tool1 from '../../assets/images/tech/tool1.png';
import Tool2 from '../../assets/images/tech/tool2.png';
import Tool3 from '../../assets/images/tech/tool3.png';
import Tool4 from '../../assets/images/tech/tool4.png';
import Network from '../../assets/images/tech/network.png';
import Cube from '../../assets/images/home/cube.png'


import './index.less'

const Tech: React.FC = () =>  {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    return <div className="tech">
        <div className="banner">
            <div className="content">
                <h2>Verse Architecture on BAS</h2>
                <p>Powered by Ankr BNB Chain-Application-Sidechain (BAS) framework, Verse Network’s chain is built with flexible, convenient, and easy-to-use multi-modular blockchain architecture. The core modules for this purpose include Parlia Consensus Engine, Pool & Staking, Governance, Dynamic Runtime Upgrades, and Reward Management, and these modules will be built with System Smart Contract and Ethereum Virtual Machine (EVM) machines. Verse solves the virtual machine security issues by fully trusting the EVM of the official Go-Ethereum codebase. EVM, which has been audited thousands of times, is widely used in blockchain networks.
                <br/>
                To fully manage and validate governance and reward distribution in an EVM runtime environment, Verse implements the relevant logic directly using Smart Contract without relying on third-party services.</p>
            </div>
        </div>
        <div className='container'>
            <div className="content">
                <h3>Advantage of building on BAS</h3>
                <p>BAS has many advantages for the development of Verse, enabling users and project teams to create and manage DAOs on the platform seamlessly.</p>
                <div className="list">
                    <div className="item">
                        <img src={Advantage1} alt="" />
                        <h4>Stability</h4>
                        <p>Through a scalable sidechain solution, BAS provides high throughput including over 5,000 TPS, ultra-low gas fee, and full EVM compatibility, which is important for any large-scale platform applications including Clique to create disruptive governance experience on the blockchain.</p>
                    </div>
                    <div className="item">
                        <img src={Advantage2} alt="" />
                        <h4>Scalability and Customizability</h4>
                        <p>The blockchain can be built with huge flexibility of validator set, tokenomic design, and network configurations, which enables more scalability on the product for users.</p>
                    </div>
                    <div className="item">
                        <img src={Advantage3} alt="" />
                        <h4>Security</h4>
                        <p>BAS uses the BNB Smart Chain codebase and fully trust EVM (Ethereum Virtual Machine) from the official Go-Ethereum codebase. Everything that goes on BAS is controlled by the governance model: from the blockchain consensus, change proposals and staking.</p>
                    </div>
                    <div className="item">
                        <img src={Advantage4} alt="" />
                        <h4>Larger ecosystems penetration through BNB Chain and BNB Sidechain</h4>
                        <p>BNB Chain and BNB Sidechain are seamlessly integrated and BNB Chain DeFi/NFT liquidity and user base (&gt;2M DAU ATH)</p>
                    </div>
                </div>
                <img className='network' src={Network} alt="" />
            </div>
        </div>
        <div className='content'>
            <h3>Tools</h3>
            <div className='tools'>
                <div onClick={() => {window.open('https://bas-testnet-explorer.myclique.io', '_blank');}}>
                    <div className='img'><img src={Tool1} alt="" /></div>
                    <p>Testnet Explorer</p>
                </div>
                <div onClick={() => {window.open('https://bas-testnet-faucet.myclique.io', '_blank');}}>
                    <div className='img'><img src={Tool2} alt="" /></div>
                    <p>Testnet Explorer</p>
                </div>
                <div onClick={showModal}>
                    <div className='img'><img src={Tool3} alt="" /></div>
                    <p>Testnet Explorer</p>
                </div>
                <div onClick={showModal}>
                    <div className='img'><img src={Tool4} alt="" /></div>
                    <p>Testnet Explorer</p>
                </div>
            </div>
        </div>
        <Modal className="comingModal" visible={isModalVisible} footer={null} closable={false} width={320} centered>
                <img src={Cube} alt="" />
                <p>Coming Soon...</p>
            <Button type="primary" onClick={handleCancel}>Close</Button>
        </Modal>
    </div>
}

export default Tech;