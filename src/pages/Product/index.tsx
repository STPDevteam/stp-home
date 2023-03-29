import { Button, Modal } from 'antd'
import React, { useState } from 'react'
import Dao1 from '../../assets/images/home/dao1.png'
import Dao2 from '../../assets/images/home/dao2.png'
import Dao3 from '../../assets/images/home/dao3.png'
import Dao4 from '../../assets/images/home/dao4.png'
import Daos1 from '../../assets/images/product/daos1.png'
import Daos2 from '../../assets/images/product/daos2.png'
import Daos3 from '../../assets/images/product/daos3.png'
import Daos4 from '../../assets/images/product/daos4.png'
import Cube from '../../assets/images/home/cube.png'
import './index.less'

const Product: React.FC = () =>  {
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    
    return <div className="product">
            <Modal className="comingModal" visible={isModalVisible} footer={null} closable={false} width={320} centered>
                <img src={Cube} alt="" />
                <p>Coming Soon...</p>
            <Button type="primary" onClick={handleCancel}>Close</Button>
            </Modal>
                <div className="content">
                    <h2>Product</h2>
                    <div className="product-box">
                        <div className="item">
                                <div>
                                    <img src={Dao1} alt="" />
                                </div>
                                <div>
                                    <h3>Clique</h3>
                                    <p>An aggregated dashboard to browse, manage and socially participate in all DAOs, asset holdings, proposals, and ongoing events on Verse</p>
                                    <div className="btns">
                                        <Button type="primary"><a href="https://myclique.io" target="_blank">Launch App</a></Button>
                                        <Button type="primary"><a href="https://stp-dao.gitbook.io/verse-network/dapps/clique">Learn More</a></Button>
                                    </div>
                                </div>
                            </div>
                        <div className="item">
                            <div>
                                <img src={Dao2} alt="" />
                            </div>
                            <div>
                                <h3>Governance SDK</h3>
                                <p>Using Clique, DAOs can implement cross chain governance to take advantage of greatly reduced gas fees. DAOs on Ethereum (or any EVM chain) can execute governance on Polygon without the need to issue new tokens or bridge their existing tokens. </p>
                                <div className="btns">
                                        <Button type="primary"><a href="https://myclique.io/governance" target="_blank">Launch App</a></Button>
                                        <Button type="primary"><a href="https://stp-dao.gitbook.io/verse-network/clique/clique-sdk-beta">Learn More</a></Button>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div>
                                <img src={Dao4} alt="" />
                            </div>
                            <div>
                                <h3>Multi-modular blockchain architecture</h3>
                                <p>Powered by Ankr BNB Chain-Application-Sidechain (BAS) framework, Verse Network’s chain includes core modules including Parlia Consensus Engine, Pool & Staking, Governance, Dynamic Runtime Upgrades, and Reward Management.</p>
                                <div className="btns">
                                    <Button type="primary" onClick={showModal}>Coming soon</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h3>DAOs Launching on Verse</h3>
                <div className="daos content">
                    <div className="item">
                        <div className="blue"><img src={Daos1} alt="" /></div>
                        <h3>Gaming DAOs</h3>
                        <p>One of the top Asia E-sports team will launch a gaming guild DAO on Verse</p>
                    </div>
                    <div className="item">
                        <div className="blue"><img src={Daos2} alt="" /></div>
                        <h3>Investment DAOs</h3>
                        <p>A diverse crypto collective supporting blockchain development in Asia will launch on Verse as well as an investment DAO dedicated to acquiring NFTs</p>
                    </div>
                    <div className="item">
                        <div className="blue"><img src={Daos3} alt="" /></div>
                        <h3>Social/Membership DAOs</h3>
                        <p>Organic social and membership based DAOs </p>
                    </div>
                    <div className="item">
                        <div className="blue"><img src={Daos4} alt="" /></div>
                        <h3>Project DAOs</h3>
                        <p>Projects with treasury DAOs managing over $1B </p>
                    </div>
                </div>
            </div>
}

export default Product;