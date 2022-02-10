import { Button } from 'antd'
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

const Product: React.FC = () =>  {
    return <div className="product">
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
                                <h3>Framework</h3>
                                <p>A full suite of native tools and infrastructure built on Verse facilitates efficient decentralized decision-making for users, communities and organizations</p>
                                <div className="btns">
                                    <Button type="primary"><a href="https://daoframe.com" target="_blank">Launch App</a></Button>
                                    <Button type="primary"><a href="https://stp-dao.gitbook.io/verse-network/dapps/framework" target="_blank">Learn More</a></Button>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div>
                                <img src={Dao3} alt="" />
                            </div>
                            <div>
                                <h3>DAO Scan Tool</h3>
                                <p>Track all DAO transaction history and onchain data globally</p>
                                <div className="btns">
                                    <Button type="primary">Coming Soon</Button>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div>
                                <img src={Dao4} alt="" />
                            </div>
                            <div>
                                <h3>DAO MarketCap Tool</h3>
                                <p>A global DAO ranking and data analysis platform</p>
                                <div className="btns">
                                    <Button type="primary">Coming Soon</Button>
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